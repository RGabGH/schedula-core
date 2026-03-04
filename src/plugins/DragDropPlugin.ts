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
                }
            }
        }

        core.schedulerItemsElement?.querySelectorAll('rect.item').forEach(
            (el: Element) => { el.classList.remove(action); }
        );
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
                    si.X = dx;
                    si.Y = dy;
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
        const item = element?.item;
        if (!item) return;

        if (this._core.settings.popupProvider) {
            this._core.settings.popupProvider.show(item, event, this._core);
            return;
        }

        const popup = this._ensurePopup();
        this._populatePopup(popup, item);
        popup.style.display = 'block';
    }

    private _ensurePopup(): HTMLElement {
        let popup = document.getElementById('scheduler-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'scheduler-popup';
            popup.className = 'scheduler-popup';
            popup.style.cssText = 'display:none;position:fixed;z-index:9999;';
            popup.innerHTML = `
                <div class="popup-container">
                    <div class="popup-header" id="scheduler-popup-header">
                        <button class="close-button" id="scheduler-popup-close">&#x2715;</button>
                        <span id="scheduler-popup-title">Task</span>
                    </div>
                    <div class="popup-content">
                        <div class="tab">
                            <button class="tab-btn active" data-tab="info">Info</button>
                            <button class="tab-btn" data-tab="json">JSON</button>
                        </div>
                        <div class="tabcontent active" id="scheduler-popup-tab-info">
                            <div class="formgroup"><label>Text</label><input class="taskinput" id="popup-field-text" type="text"></div>
                            <div class="formgroup"><label>Description</label><input class="taskinput" id="popup-field-desc" type="text"></div>
                            <div class="formgroup"><label>From</label><input class="taskinput" id="popup-field-from" type="text" readonly></div>
                            <div class="formgroup"><label>To</label><input class="taskinput" id="popup-field-to" type="text" readonly></div>
                            <div class="formgroup"><label>Color</label><input class="taskinput" id="popup-field-color" type="color"></div>
                            <div class="formgroup"><label>Completion %</label><input class="taskinput" id="popup-field-completion" type="number" min="0" max="100"></div>
                            <div class="formgroup"><label>Reference</label><input class="taskinput" id="popup-field-ref" type="text"></div>
                        </div>
                        <div class="tabcontent" id="scheduler-popup-tab-json">
                            <textarea id="popup-field-json"></textarea>
                        </div>
                    </div>
                    <div class="popup-footer">
                        <button class="scheduler-popup-btn" id="popup-btn-cancel">Cancel</button>
                        <button class="scheduler-popup-btn" id="popup-btn-save">Save</button>
                    </div>
                </div>`;
            document.body.appendChild(popup);
            popup.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    popup!.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                    popup!.querySelectorAll('.tabcontent').forEach(t => t.classList.remove('active'));
                    btn.classList.add('active');
                    const tab = (btn as HTMLElement).dataset.tab;
                    document.getElementById(`scheduler-popup-tab-${tab}`)?.classList.add('active');
                });
            });
            this._makePopupDraggable(popup);
        }
        return popup;
    }

    private _populatePopup(popup: HTMLElement, item: any): void {
        const core = this._core;
        const fmt = (mins: number) => mins != null ? new Date(mins * 60000).toLocaleString() : '';
        (popup.querySelector('#scheduler-popup-title') as HTMLElement).textContent = item.Text || 'Task';
        (popup.querySelector('#popup-field-text') as HTMLInputElement).value = item.Text || '';
        (popup.querySelector('#popup-field-desc') as HTMLInputElement).value = item.Description || '';
        (popup.querySelector('#popup-field-from') as HTMLInputElement).value = fmt(item.From);
        (popup.querySelector('#popup-field-to') as HTMLInputElement).value = fmt(item.To);
        (popup.querySelector('#popup-field-color') as HTMLInputElement).value = item.Color1 || '#000000';
        (popup.querySelector('#popup-field-completion') as HTMLInputElement).value = item.Completion ?? '';
        (popup.querySelector('#popup-field-ref') as HTMLInputElement).value = item.Reference || '';
        (popup.querySelector('#popup-field-json') as HTMLTextAreaElement).value = JSON.stringify(item, null, 2);

        const saveBtn = popup.querySelector('#popup-btn-save')!;
        const newSave = saveBtn.cloneNode(true) as HTMLElement;
        saveBtn.parentNode!.replaceChild(newSave, saveBtn);
        newSave.addEventListener('click', () => {
            item.Text = (popup.querySelector('#popup-field-text') as HTMLInputElement).value;
            item.Description = (popup.querySelector('#popup-field-desc') as HTMLInputElement).value;
            item.Color1 = (popup.querySelector('#popup-field-color') as HTMLInputElement).value;
            const comp = parseInt((popup.querySelector('#popup-field-completion') as HTMLInputElement).value);
            item.Completion = isNaN(comp) ? undefined : comp;
            item.Reference = (popup.querySelector('#popup-field-ref') as HTMLInputElement).value;
            popup.style.display = 'none';
            core.init();
        });

        const cancelBtn = popup.querySelector('#popup-btn-cancel')!;
        const newCancel = cancelBtn.cloneNode(true) as HTMLElement;
        cancelBtn.parentNode!.replaceChild(newCancel, cancelBtn);
        newCancel.addEventListener('click', () => { popup.style.display = 'none'; });

        const closeBtn = popup.querySelector('#scheduler-popup-close')!;
        const newClose = closeBtn.cloneNode(true) as HTMLElement;
        closeBtn.parentNode!.replaceChild(newClose, closeBtn);
        newClose.addEventListener('click', () => { popup.style.display = 'none'; });

        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%,-50%)';
    }

    private _makePopupDraggable(popup: HTMLElement): void {
        const header = popup.querySelector('#scheduler-popup-header') as HTMLElement;
        if (!header) return;
        let isDragging = false, startX = 0, startY = 0, startLeft = 0, startTop = 0;
        header.addEventListener('mousedown', (e: MouseEvent) => {
            isDragging = true;
            startX = e.clientX; startY = e.clientY;
            const rect = popup.getBoundingClientRect();
            startLeft = rect.left + window.scrollX;
            startTop = rect.top + window.scrollY;
            popup.style.left = startLeft + 'px';
            popup.style.top = startTop + 'px';
            popup.style.transform = 'none';
            e.preventDefault();
        });
        document.addEventListener('mousemove', (e: MouseEvent) => {
            if (!isDragging) return;
            popup.style.left = (startLeft + e.clientX - startX) + 'px';
            popup.style.top = (startTop + e.clientY - startY) + 'px';
        });
        document.addEventListener('mouseup', () => { isDragging = false; });
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

        resource.Items?.forEach((item: any) => {
            if (timespan < item.Offset + item.Width && timespan >= item.Offset) {
                timespan = item.Offset + item.Width;
            }
        });

        const ra = Math.floor(Math.random() * 10000000);
        const dropped: any = {
            Id: '_temp_id_' + ra,
            Text: data.text1,
            Description: data.text2,
            Offset: timespan,
            Width: parseInt(data.width),
            Effort: parseInt(data.width),
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

        core.init();
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
