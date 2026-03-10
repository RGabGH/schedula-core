import { IDragDropPlugin } from '../models/IDragDropPlugin.js';
import { SchedulaItem } from '../ui/SchedulaItem.js';

/**
 * DragDropPlugin — PRO feature.
 * Handles all interactive item manipulation: move, resize, external drop,
 * item hover/click, and the built-in task popup.
 */
export class DragDropPlugin implements IDragDropPlugin {
    readonly name = 'dragdrop';
    private _core: any;
    private _dragItem: any = null;

    init(core: any): void {
        this._core = core;
    }

    destroy(): void {
        this._core = null;
    }

    // ── Mouse move (delegates moving or sizing) ────────────────────────────

    onMouseMove(event: MouseEvent): void {
        const action = this._core.currentAction;
        if (action === 'moving') this._move();
        else if (action === 'sizing') this._resize();
    }

    private _move(): void {
        const core = this._core;
        const element = core.currentElement;
        if (!element) return;

        const x = parseFloat(element.getAttribute('data-x') ?? '0');
        const y = parseFloat(element.getAttribute('data-y') ?? '0');
        const mpos = core.mousePosition;
        const memo = core.actionMemoPosition;
        const ratio = core.viewRatio;

        const variationx = Math.round(((mpos.x - memo.x) * ratio) * 100) / 100;
        const variationy = Math.round(((mpos.y - memo.y) * ratio) * 100) / 100;

        element.setAttribute('x', (x + variationx).toString());
        if (core.settings.resourceChange) {
            element.setAttribute('y', (y + variationy).toString());
        }
        core.schedulerItemsElement?.append(element);
        this._liveRefreshPopup();
    }

    private _resize(): void {
        const core = this._core;
        const element = core.currentElement;
        if (!element) return;

        const mpos = core.mousePosition;
        const memo = core.actionMemoPosition;
        const ratio = core.viewRatio;
        const w = parseFloat(element.getAttribute('data-w') ?? '0');
        const variationx = Math.round(((mpos.x - memo.x) * ratio) * 100) / 100;

        element.setAttribute('width', (w + variationx).toString());
        core.schedulerItemsElement?.append(element);
        this._liveRefreshPopup();
    }

    private _liveRefreshPopup(): void {
        if (!this._dragItem) return;
        const core = this._core;
        if (!core.settings.enablePopup) return;
        const popupProvider = (core.settings.popupProvider && core.settings.licenseKey)
            ? core.settings.popupProvider
            : core.getPlugin('defaultpopup');
        if (popupProvider && typeof popupProvider.refreshItem === 'function') {
            popupProvider.refreshItem(this._dragItem);
        }
    }

    // ── Mouse up (finalize action) ─────────────────────────────────────────

    onMouseUp(event: MouseEvent): void {
        const core = this._core;
        const action = core.currentAction;

        if (action === 'moving' || action === 'sizing') {
            const element = core.currentElement;
            if (element) {
                const id = element.getAttribute('data-id');
                let itemData: any = null;
                core.data.Resources?.forEach((r: any) => {
                    r.Items?.forEach((i: any) => { if (String(i.Id) === id) itemData = i; });
                });
                if (itemData) {
                    this.processItemAction(element, itemData, (event as any).ctrlKey);

                    // Final popup refresh with committed data
                    if (core.settings.enablePopup) {
                        const popupProvider = core.settings.popupProvider ||
                            core.getPlugin('advancedpopup') ||
                            core.getPlugin('defaultpopup');
                        if (popupProvider && typeof popupProvider.refreshItem === 'function') {
                            popupProvider.refreshItem(itemData);
                        }
                    }
                    const notifPlugin = core.getPlugin?.('notification');
                    if (notifPlugin && itemData) notifPlugin.notifyChanged(itemData);
                }
                this._dragItem = null;
            }
        }

        if (action) {
            core.schedulerItemsElement?.querySelectorAll('rect.item').forEach(
                (el: Element) => { el.classList.remove(action); }
            );
        }
        core.currentAction = '';

        if (typeof (window as any).modified === 'function') (window as any).modified();
        if (core.settings.storeData) localStorage.setItem('data', JSON.stringify(core.data));
    }

    /**
     * Applies the result of a move/resize action to the data model.
     * Handles grid snapping and collision/interference logic.
     * (formerly named processItemAction2 — renamed for clarity)
     */
    processItemAction(element: any, data: any, ctrl: boolean): void {
        const core = this._core;
        const settings = core.settings;

        let x = parseFloat(element.getAttribute('x') ?? '0');
        let y = parseFloat(element.getAttribute('y') ?? '0');
        let w = parseFloat(element.getAttribute('width') ?? '0');
        const dx = parseFloat(element.getAttribute('data-x') ?? '0');
        const dy = parseFloat(element.getAttribute('data-y') ?? '0');
        const dw = parseFloat(element.getAttribute('data-w') ?? '0');

        const axisXsteps = settings.gridStep / (settings.timeUnitVal / settings.timeWidth);
        const gridOffset = settings.gridOffset / (settings.timeUnitVal / settings.timeWidth);

        // Snap to grid
        x = this._snap(x, axisXsteps, gridOffset);
        y = this._snap(y, settings.resourceHeight, core.headerHeight + settings.itemsPadding);
        w = this._snap(w, axisXsteps);

        const moved = Math.abs(dx - x) > (axisXsteps / 2) || y !== dy;
        const resized = Math.abs(dw - w) > (axisXsteps / 3);

        const si = new SchedulaItem(core, data, core.calendar);

        if (moved) {
            si.X = x;
            si.Y = y;
        } else {
            element.setAttribute('x', dx.toString());
            element.setAttribute('y', dy.toString());
            if (resized) {
                si.W = w;
            } else {
                element.setAttribute('width', dw.toString());
            }
        }

        // Interference check
        if (settings.checkInterferences) {
            const ok = si.checkInterference();
            if (!ok) {
                if (!settings.shiftItems || !ctrl) {
                    if (resized && !moved) {
                        si.W = dw;
                    } else {
                        si.X = dx;
                        si.Y = dy;
                    }
                } else {
                    // Push colliding items forward (Ctrl + move)
                    const previous = core.data.Resources[si.Resource]?.Items
                        ?.filter((i: any) => (i.Offset + i.Width) > si.Offset && i.Offset < si.Offset)
                        ?.sort((a: any, b: any) => a.Offset - b.Offset)[0];
                    if (previous) {
                        const siPrev = new SchedulaItem(core, previous, core.calendar);
                        si.X = siPrev.X + siPrev.W;
                    }
                    let cursor = si.X + si.W;
                    const following = core.data.Resources[si.Resource]?.Items
                        ?.filter((i: any) => i.Offset >= si.Offset && i.Id !== si.Id)
                        ?.sort((a: any, b: any) => parseInt(a.Offset) - parseInt(b.Offset)) ?? [];
                    for (const fi of following) {
                        const siFi = new SchedulaItem(core, fi, core.calendar);
                        if (cursor > siFi.X) siFi.X = cursor;
                        cursor = siFi.X + siFi.W;
                    }
                }
            }
        }
    }

    /** Snap a value to the nearest grid step */
    private _snap(value: number, step: number, min?: number): number {
        const base = min ?? 0;
        const modulo = (value - base) % step;
        const correction = modulo > step / 2 ? step - modulo : -modulo;
        const result = value + correction;
        return min != null && result < min ? min : result;
    }

    // ── Item mousedown ─────────────────────────────────────────────────────

    onItemMouseDown(event: MouseEvent, data: any): void {
        const core = this._core;
        if (core.currentAction !== '') return;

        if (event.button === 0 && core.settings.canMoveItems && (event.target as HTMLElement).classList.contains('item')) {
            core.currentAction = 'moving';
        } else if (event.button === 0 && core.settings.canResizeItems && (event.target as HTMLElement).classList.contains('resize')) {
            core.currentAction = 'sizing';
        }

        if (core.currentAction !== '') {
            const el = (event.target as HTMLElement).parentElement;
            core.currentElement = el;
            if ((event.target as HTMLElement).classList.contains('item')) {
                (event.target as HTMLElement).classList.add(core.currentAction);
            }
            if ((event.target as HTMLElement).classList.contains('resize') && el) {
                const id = el.getAttribute('data-id');
                document.querySelector(`svg[data-id="${id}"]>rect.item`)?.classList.add(core.currentAction);
            }
            el?.setAttribute('data-x', data.element.getAttribute('x'));
            el?.setAttribute('data-y', data.element.getAttribute('y'));
            el?.setAttribute('data-w', data.element.getAttribute('width'));
            const memo = core.actionMemoPosition;
            memo.x = event.pageX;
            memo.y = event.pageY;

            // Cache the dragged item for live popup refresh
            this._dragItem = data.item ?? null;
        }

        if (typeof (window as any).itemMouseDown === 'function') {
            (window as any).itemMouseDown(event, data);
        }
    }

    // ── Item mouseup ───────────────────────────────────────────────────────

    onItemMouseUp(event: MouseEvent, data: any): void {
        this.onMouseUp(event);
    }

    // ── Item click ─────────────────────────────────────────────────────────

    onItemClick(event: MouseEvent, element: any): void {
        // Logica di popup spostata in AdvancedPopupPlugin e DefaultPopupPlugin.
        // DragDropPlugin non si occupa più di intercettare o gestire i click per i popup.
    }

    // ── External drop ──────────────────────────────────────────────────────

    onDrop(event: DragEvent): void {
        event.stopImmediatePropagation();
        const core = this._core;
        const settings = core.settings;

        if (!settings.dropEnable || !(event.target as HTMLElement).classList.contains('box-element')) return;

        const strdata = event.dataTransfer?.getData('task');
        if (!strdata) return;

        const data = JSON.parse(strdata);
        const y = parseFloat((event.target as HTMLElement).getAttribute('y') ?? '0');
        const res = (y - core.headerHeight) / settings.resourceHeight;
        const resource = core.data.Resources[res];
        if (!resource) return;

        const dd = new Date((event.target as HTMLElement).getAttribute('data-date') ?? '');
        const sd = settings.date;
        let timespan = Math.trunc((dd.getTime() - sd.getTime()) / 1000 / 60);

        const newWidth = parseInt(data.width);
        const ctrl = event.ctrlKey;

        if (ctrl && settings.shiftItems) {
            // Push all downstream items forward to make room
            const following = (resource.Items ?? [])
                .filter((item: any) => item.Offset >= timespan)
                .sort((a: any, b: any) => a.Offset - b.Offset);
            let cursor = timespan + newWidth;
            for (const item of following) {
                if (item.Offset < cursor) item.Offset = cursor;
                cursor = item.Offset + item.Width;
            }
        } else {
            // Find first free slot considering full width
            let changed = true;
            while (changed) {
                changed = false;
                resource.Items?.forEach((item: any) => {
                    const x1 = timespan;
                    const x2 = timespan + newWidth;
                    const cx1 = item.Offset;
                    const cx2 = item.Offset + item.Width;
                    if (!(x2 <= cx1 || x1 >= cx2)) {
                        timespan = cx2;
                        changed = true;
                    }
                });
            }
        }

        if (settings.optimizeStart) {
            const cal = (core as any).getCalendarForResource?.(resource.Id) ?? core.calendar;
            if (cal) {
                const newFrom = cal.optimazeStart({ From: (sd.getTime() / 1000 / 60) + timespan });
                timespan = newFrom - (sd.getTime() / 1000 / 60);
            }
        }

        const ra = Math.floor(Math.random() * 10000000);
        const dropped: any = {
            Id: '_temp_id_' + ra,
            Text: data.text1,
            Description: data.text2,
            Offset: timespan,
            Width: newWidth,
            Effort: newWidth,
            IsNew: true,
            Modified: true,
            Color1: data.color1,
            Classes: data.classes,
            From: (sd.getTime() / 1000 / 60) + timespan,
            ForeignKey: data.key,
            Reference: data.ref,
            Pieces: data.pieces,
        };
        dropped.To = dropped.From + dropped.Width;

        if (!resource.Items) resource.Items = [];
        resource.Items.push(dropped);

        if (typeof (window as any).modified === 'function') (window as any).modified();
        if (data.elementId) document.getElementById(data.elementId)?.remove();
        const notifPlugin = core.getPlugin?.('notification');
        if (notifPlugin) notifPlugin.notifyAdded(dropped);

        core.refresh();
    }

    // ── Hover ──────────────────────────────────────────────────────────────

    onItemOver(event: MouseEvent, item: any): void {
        if (typeof (window as any).itemMouseEnter === 'function') {
            (window as any).itemMouseEnter(event, item);
        }
    }

    onItemOut(event: MouseEvent, item: any): void {
        if (typeof (window as any).itemMouseExit === 'function') {
            (window as any).itemMouseExit(event, item);
        }
    }

    // ── Escape ─────────────────────────────────────────────────────────────

    onEscape(): void {
        const core = this._core;
        const el = core.currentElement;
        if (core.currentAction === 'moving' && el) {
            el.setAttribute('x', el.getAttribute('data-x') ?? '0');
            el.setAttribute('y', el.getAttribute('data-y') ?? '0');
            el.querySelector('rect.item')?.classList.remove('moving');
        } else if (core.currentAction === 'sizing' && el) {
            el.setAttribute('width', el.getAttribute('data-w') ?? '0');
            el.querySelector('rect.item')?.classList.remove('sizing');
        }
        core.currentAction = '';
    }
}
