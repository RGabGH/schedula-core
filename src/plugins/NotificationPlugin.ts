import { isPro } from '../license/LicenseValidator.js';

/**
 * NotificationPlugin — PRO feature.
 *
 * Fires callbacks whenever scheduler data changes (item moved, resized,
 * added via drop, or deleted). The client overrides the public methods
 * to react to each event.
 *
 * Usage:
 *   const notif = new NotificationPlugin();
 *   notif.onItemChanged       = (item) => saveToServer(item);
 *   notif.onItemAdded         = (item) => console.log('nuovo task', item);
 *   notif.onItemDeleted       = (item) => console.log('eliminato', item.Id);
 *   notif.onCalendarChanged   = (rule, action) => saveCalendarToServer(rule);
 *   scheduler.registerPlugin(notif);
 */
export class NotificationPlugin {
    readonly name = 'notification';
    private _core: any = null;
    private _enabled = false;

    // ── Lifecycle ────────────────────────────────────────────────────────────

    init(core: any): void {
        this._core = core;
        if (!isPro(core.settings.licenseKey)) {
            console.warn('[NotificationPlugin] A valid PRO licenseKey is required — plugin disabled.');
            return;
        }
        this._enabled = true;
    }

    destroy(): void {
        this._core = null;
        this._enabled = false;
    }

    // ── Public callbacks — override these ────────────────────────────────────

    /**
     * Called after a task is moved or resized by the user.
     * @param item  The raw data object of the modified task.
     */
    onItemChanged(item: any): void {}

    /**
     * Called after a new task is added via drag-and-drop from an external source.
     * @param item  The raw data object of the newly added task.
     */
    onItemAdded(item: any): void {}

    /**
     * Called after a task is deleted (e.g. via context menu).
     * @param item  The raw data object of the deleted task (Deleted flag is already true).
     */
    onItemDeleted(item: any): void {}

    /**
     * Called after a context menu action is executed.
     * @param actionId  The id from IMenuItemDef (e.g. 'holiday', 'closed', 'open', 'delete-rule').
     * @param item      The raw task data object for task actions; null for calendar actions.
     * @param ctx       The context object: { type, date, resourceId?, taskId?, taskRef?, taskKey? }
     */
    onMenuAction(actionId: string, item: any, ctx: any): void {}

    /**
     * Called after a calendar exception is added or removed.
     * @param rule    The exception rule object: { Capacity, DateFrom, DateTo, ResourceId? }
     *                For removals, only { DateFrom, ResourceId? } is guaranteed to be present.
     * @param action  'add' when an exception is added, 'remove' when it is deleted.
     */
    onCalendarChanged(rule: any, action: 'add' | 'remove'): void {}

    // ── Internal dispatch — called by core and plugins ───────────────────────

    /** @internal */
    notifyChanged(item: any): void {
        if (!this._enabled) return;
        try { this.onItemChanged(item); } catch (e) { console.error('[NotificationPlugin] onItemChanged error:', e); }
    }

    /** @internal */
    notifyAdded(item: any): void {
        if (!this._enabled) return;
        try { this.onItemAdded(item); } catch (e) { console.error('[NotificationPlugin] onItemAdded error:', e); }
    }

    /** @internal */
    notifyDeleted(item: any): void {
        if (!this._enabled) return;
        try { this.onItemDeleted(item); } catch (e) { console.error('[NotificationPlugin] onItemDeleted error:', e); }
    }

    /** @internal */
    notifyMenuAction(actionId: string, item: any, ctx: any): void {
        if (!this._enabled) return;
        try { this.onMenuAction(actionId, item, ctx); } catch (e) { console.error('[NotificationPlugin] onMenuAction error:', e); }
    }

    /** @internal */
    notifyCalendarChanged(rule: any, action: 'add' | 'remove'): void {
        if (!this._enabled) return;
        try { this.onCalendarChanged(rule, action); } catch (e) { console.error('[NotificationPlugin] onCalendarChanged error:', e); }
    }
}
