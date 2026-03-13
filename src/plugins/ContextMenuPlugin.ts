/**
 * SchedulaCore PRO
 *
 * @file    public/src/plugins/ContextMenuPlugin.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
import {
    IMenuItemDef,
    defaultTaskMenuItems,
    defaultDayMenuItems,
    defaultCellMenuItems,
} from './ContextMenuConfig.js';

export class ContextMenuPlugin {
    readonly name = 'contextmenu';
    private _core: any = null;
    private _menu: HTMLElement | null = null;
    private _onCtxMenu = (e: MouseEvent) => this._handleContextMenu(e);
    private _onHide = () => this._hideMenu();
    private _onKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape') this._hideMenu(); };

    // ── Public menu definitions — override before registerPlugin() ────────────

    /** Menu items shown when right-clicking a task. */
    taskMenuItems: IMenuItemDef[] = defaultTaskMenuItems.slice();
    /** Menu items shown when right-clicking a day column header. */
    dayMenuItems: IMenuItemDef[]  = defaultDayMenuItems.slice();
    /** Menu items shown when right-clicking a resource row cell. */
    cellMenuItems: IMenuItemDef[] = defaultCellMenuItems.slice();

    // ── Lifecycle ────────────────────────────────────────────────────────────

    init(core: any): void {
        this._core = core;
        this._createMenuEl();
        const svg = core.schedulerSVGElement;
        if (svg) svg.addEventListener('contextmenu', this._onCtxMenu);
        document.addEventListener('click', this._onHide);
        document.addEventListener('keydown', this._onKeydown);
        window.addEventListener('resize', this._onHide);
        window.addEventListener('scroll', this._onHide, true);
    }

    destroy(): void {
        const svg = this._core?.schedulerSVGElement;
        if (svg) svg.removeEventListener('contextmenu', this._onCtxMenu);
        document.removeEventListener('click', this._onHide);
        document.removeEventListener('keydown', this._onKeydown);
        window.removeEventListener('resize', this._onHide);
        window.removeEventListener('scroll', this._onHide, true);
        this._menu?.remove();
        this._menu = null;
        this._core = null;
    }

    // ── Menu DOM helpers ─────────────────────────────────────────────────────

    private _createMenuEl(): void {
        const el = document.createElement('div');
        el.className = 'dropdown-menu schedula-ctx-menu';
        el.addEventListener('contextmenu', (e) => e.preventDefault());
        document.body.appendChild(el);
        this._menu = el;
    }

    private _showMenu(x: number, y: number): void {
        const menu = this._menu!;
        menu.style.display = 'block';
        menu.style.left = '0px';
        menu.style.top = '0px';
        const { width, height } = menu.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        let px = x;
        let py = y;
        if (px + width > vw - 6) px = vw - width - 6;
        if (py + height > vh - 6) py = vh - height - 6;
        if (px < 6) px = 6;
        if (py < 6) py = 6;
        menu.style.left = `${px}px`;
        menu.style.top = `${py}px`;
    }

    private _hideMenu(): void {
        if (!this._menu) return;
        this._menu.style.display = 'none';
        this._menu.innerHTML = '';
    }

    private _addItem(label: string, onClick: (() => void) | null, disabled = false): void {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'dropdown-item';
        a.textContent = label;
        if (disabled) {
            a.classList.add('disabled');
            a.setAttribute('aria-disabled', 'true');
            a.tabIndex = -1;
        } else if (onClick) {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                onClick();
                this._hideMenu();
            });
        }
        this._menu!.appendChild(a);
    }

    private _addDivider(): void {
        const hr = document.createElement('hr');
        hr.className = 'dropdown-divider';
        this._menu!.appendChild(hr);
    }

    // ── Render hook — restore status classes from data ───────────────────────

    onAfterRender(): void {
        for (const res of this._core?.data?.Resources ?? []) {
            for (const item of res.Items ?? []) {
                if (!item.Id) continue;
                const rect = document.querySelector(`svg[data-id="${item.Id}"] rect.item`) as HTMLElement | null;
                if (!rect) continue;
                if (item.Completed) {
                    rect.classList.remove('active');
                    rect.classList.add('completed');
                } else if (item.StartedAt && !item.PausedAt) {
                    rect.classList.add('active');
                } else {
                    rect.classList.remove('active');
                }
            }
        }
    }

    // ── Context detection ────────────────────────────────────────────────────

    private _getContext(e: MouseEvent): any {
        const target = e.target as HTMLElement;
        const taskEl = target.closest('svg.svg-item') as HTMLElement | null;
        if (taskEl?.dataset.id) {
            return { type: 'task', date: '', taskId: taskEl.dataset.id, taskRef: taskEl.dataset.ref, taskKey: taskEl.dataset.key };
        }
        const dayunit = target.closest('rect.time-unit') as HTMLElement | null;
        if (dayunit?.dataset.date) {
            return { type: 'day', date: dayunit.dataset.date };
        }
        const cell = (target.closest('rect.box-element') ?? target.closest('rect.box-element-empty')) as HTMLElement | null;
        if (cell?.dataset.date) {
            return { type: 'cell', date: cell.dataset.date, resourceId: cell.dataset.res };
        }
        const dayCell = target.closest('rect.daybox-element') as HTMLElement | null;
        if (dayCell?.dataset.date) {
            const core = this._core;
            const resIndex = Math.floor((e.offsetY - core.headerHeight) / core.settings.resourceHeight);
            const resourceId = resIndex >= 0 && resIndex < core.data.Resources.length ? String(resIndex) : undefined;
            return { type: 'cell', date: dayCell.dataset.date, resourceId };
        }
        return null;
    }

    // ── Context menu event handler ───────────────────────────────────────────

    private _handleContextMenu(e: MouseEvent): void {
        const ctx = this._getContext(e);
        if (!ctx) return;
        e.preventDefault();
        this._buildMenu(ctx);
        if (this._menu!.children.length > 0) {
            this._showMenu(e.clientX, e.clientY);
        } else {
            this._hideMenu();
        }
    }

    // ── Menu building ────────────────────────────────────────────────────────

    private _buildMenu(ctx: any): void {
        this._menu!.innerHTML = '';
        const ro = this._core?.settings.canMoveItems === false;

        const defs: IMenuItemDef[] =
            ctx.type === 'task' ? this.taskMenuItems :
            ctx.type === 'day'  ? this.dayMenuItems  :
            ctx.type === 'cell' ? this.cellMenuItems  : [];

        const taskItem = ctx.type === 'task' ? this._findItem(ctx.taskId) : null;

        for (const def of defs) {
            if (def.separator) {
                this._addDivider();
                continue;
            }

            // Dynamic labels / disabled state for task status actions
            if (taskItem) {
                if (def.id === 'task-start') {
                    const started = !!taskItem.StartedAt;
                    this._addItem(started ? '✓ Started' : 'Start', started ? null : () => this._executeItem(def, ctx), ro || started);
                    continue;
                }
                if (def.id === 'task-pause') {
                    this._addItem('Pause', () => this._executeItem(def, ctx), ro);
                    continue;
                }
                if (def.id === 'task-complete') {
                    const completed = !!taskItem.Completed;
                    this._addItem(completed ? '✓ Completed' : 'Complete', completed ? null : () => this._executeItem(def, ctx), ro || completed);
                    continue;
                }
            }

            this._addItem(def.label, () => {
                if (def.confirm && !confirm(def.confirm)) return;
                this._executeItem(def, ctx);
            }, ro);
        }
    }

    // ── Action execution ─────────────────────────────────────────────────────

    private _executeItem(def: IMenuItemDef, ctx: any): void {
        switch (def.id) {

            case 'open': {
                this._openPopup(ctx);
                return;
            }

            case 'delete-task': {
                const item = this._findItem(ctx.taskId);
                if (item) { item.Deleted = true; item.Modified = true; }
                document.querySelector(`svg[data-id="${ctx.taskId}"]`)?.remove();
                if (typeof (window as any).modified === 'function') (window as any).modified();
                const notifDel = this._core?.getPlugin?.('notification');
                if (notifDel && item) notifDel.notifyDeleted(item);
                return;
            }

            case 'delete-rule': {
                this._applyCalendarDelete(ctx);
                return;
            }

            case 'custom-hours': {
                this._promptCustomHours(ctx);
                return;
            }

            case 'task-start': {
                const item = this._findItem(ctx.taskId);
                if (!item) return;
                item.StartedAt = new Date().toISOString();
                item.Modified = true;
                this._core?.refreshItem?.(item);
                const svgStart = document.querySelector(`svg[data-id="${ctx.taskId}"]`) as Element | null;
                svgStart?.querySelector('rect.item')?.classList.add('active');
                const notifStart = this._core?.getPlugin?.('notification') as any;
                if (notifStart) { notifStart.notifyChanged(item, svgStart); notifStart.notifyMenuAction('task-start', item, ctx, svgStart); }
                if (typeof (window as any).modified === 'function') (window as any).modified();
                return;
            }

            case 'task-pause': {
                const item = this._findItem(ctx.taskId);
                if (!item) return;
                item.PausedAt = new Date().toISOString();
                item.Modified = true;
                this._core?.refreshItem?.(item);
                const svgPause = document.querySelector(`svg[data-id="${ctx.taskId}"]`) as Element | null;
                svgPause?.querySelector('rect.item')?.classList.remove('active');
                const notifPause = this._core?.getPlugin?.('notification') as any;
                if (notifPause) { notifPause.notifyChanged(item, svgPause); notifPause.notifyMenuAction('task-pause', item, ctx, svgPause); }
                if (typeof (window as any).modified === 'function') (window as any).modified();
                return;
            }

            case 'task-complete': {
                const item = this._findItem(ctx.taskId);
                if (!item) return;
                item.Completed = true;
                item.CompletedAt = new Date().toISOString();
                item.Modified = true;
                this._core?.refreshItem?.(item);
                const svgComplete = document.querySelector(`svg[data-id="${ctx.taskId}"]`) as Element | null;
                svgComplete?.querySelector('rect.item')?.classList.remove('active');
                svgComplete?.querySelector('rect.item')?.classList.add('completed');
                const notifComplete = this._core?.getPlugin?.('notification') as any;
                if (notifComplete) { notifComplete.notifyChanged(item, svgComplete); notifComplete.notifyMenuAction('task-complete', item, ctx, svgComplete); }
                if (typeof (window as any).modified === 'function') (window as any).modified();
                return;
            }

            default: {
                this._applyCalendarRule(def, ctx);
                return;
            }
        }
    }

    // ── Calendar helpers ─────────────────────────────────────────────────────

    /**
     * Applies a calendar rule (capacity change) for a date + optional resource.
     * Writes via CalendarPlugin if registered, always dispatches DOM event.
     */
    private _applyCalendarRule(def: IMenuItemDef, ctx: any): void {
        const capacity   = def.capacity ?? 0;
        const description = def.description ?? def.label;
        const classes    = def.classes ?? '';
        const date       = ctx.date as string;
        const resourceId = ctx.resourceId ?? null;

        // Write directly via CalendarPlugin (if present)
        const calPlugin = this._core?.getPlugin?.('calendar') as any;
        if (calPlugin && typeof calPlugin.addException === 'function') {
            calPlugin.addException(
                { Capacity: capacity, DateFrom: date, DateTo: date, description, classes },
                resourceId
            );
            this._core.refresh?.();
        }

        // DOM event for backward compat (consumer may still listen)
        this._dispatchCalendar(ctx, def.label, description, capacity, classes);

        // Notification
        const notif = this._core?.getPlugin?.('notification') as any;
        if (notif) notif.notifyMenuAction(def.id, null, ctx);
    }

    /** Removes the calendar rule for a date + optional resource. */
    private _applyCalendarDelete(ctx: any): void {
        const date       = ctx.date as string;
        const resourceId = ctx.resourceId ?? null;

        const calPlugin = this._core?.getPlugin?.('calendar') as any;
        if (calPlugin && typeof calPlugin.removeException === 'function') {
            calPlugin.removeException(date, resourceId);
            this._core.refresh?.();
        }

        this._dispatchCalendar(ctx, 'Delete', '', 0, '');

        const notif = this._core?.getPlugin?.('notification') as any;
        if (notif) notif.notifyMenuAction('delete-rule', null, ctx);
    }

    /** Dispatches the backward-compat 'schedulacalendar:action' DOM event. */
    private _dispatchCalendar(ctx: any, actionName: string, description: string, capacity: number, classes: string): void {
        const isDelete = actionName === 'Delete';
        const detail = { DateFrom: ctx.date, DateTo: ctx.date, Name: isDelete ? '' : actionName, Description: description, Capacity: capacity, Classes: classes, ResourceId: ctx.resourceId ? parseInt(ctx.resourceId, 10) : null, isDelete };
        const svg = this._core?.schedulerSVGElement;
        svg?.dispatchEvent(new CustomEvent('schedulacalendar:action', { bubbles: true, detail }));
    }

    /** Prompts for custom hours, then applies the calendar rule. */
    private _promptCustomHours(ctx: any): void {
        const raw = prompt('Capacity in hours (e.g. 5 or 5.5):', '');
        if (raw === null) return;
        const hours = parseFloat(raw.replace(',', '.'));
        if (isNaN(hours) || hours < 0 || hours > 24) {
            alert('Invalid value. Enter a number between 0 and 24.');
            return;
        }
        const label = `${hours}h`;
        if (!confirm(`Set capacity to ${label}?`)) return;
        const def: IMenuItemDef = {
            id: 'custom-hours',
            label,
            capacity: Math.round(hours * 60),
            description: `${label} capacity`,
            classes: 'cap-custom',
        };
        this._applyCalendarRule(def, ctx);
    }

    // ── Task helpers ─────────────────────────────────────────────────────────

    private _findItem(taskId: string): any {
        for (const res of this._core?.data?.Resources ?? []) {
            const item = res.Items?.find((i: any) => i.Id == taskId);
            if (item) return item;
        }
        return null;
    }

    private _openPopup(ctx: any): void {
        const item = this._findItem(ctx.taskId);
        if (!item) return;
        const provider = this._getPopupProvider();
        if (!provider) return;
        const existingPopup = document.querySelector('.scheduler-popup');
        const isVisible = existingPopup && (existingPopup as HTMLElement).style.display !== 'none';
        if (isVisible && typeof provider.refreshItem === 'function') {
            provider.refreshItem(item);
        } else {
            const rect = this._menu!.getBoundingClientRect();
            const fakeEvent = new MouseEvent('click', { clientX: rect.left, clientY: rect.top, bubbles: true });
            provider.show(item, fakeEvent, this._core);
        }
        // Notify menu action for task 'open' as well
        const notif = this._core?.getPlugin?.('notification') as any;
        if (notif) notif.notifyMenuAction('open', item, ctx);
    }

    private _getPopupProvider(): any {
        if (this._core?.settings?.popupProvider) return this._core.settings.popupProvider;
        for (const p of this._core?.settings?.plugins ?? []) {
            if (typeof p.show === 'function') return p;
        }
        return null;
    }
}
