/**
 * SchedulaCore PRO
 *
 * @file    public/src/plugins/NotificationPlugin.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
/**
 * NotificationPlugin — open source, MIT license.
 *
 * Fires callbacks whenever scheduler data changes (item moved, resized,
 * added via drop, saved from popup, or deleted). Supports veto (onBefore*)
 * and dirty tracking (getModifiedItems / clearDirty).
 *
 * Callbacks are resolved in this order:
 *   1. window.SchedulaHandlers.<functionName>  ← edit notification-handlers.js
 *   2. plugin instance method (backward-compat: notif.onItemChanged = ...)
 *
 * All logging is handled inside notification-handlers.js — the plugin itself
 * emits nothing to the console.
 *
 * Usage (handler file):
 *   window.SchedulaHandlers = {
 *     onItemChanged: (item, el) => { console.log(item); saveToServer(item); },
 *     onBeforeItemChange: (item, oldState) => !item.Locked,
 *     ...
 *   };
 *
 * Usage (instance, backward-compat):
 *   const notif = new NotificationPlugin();
 *   notif.onItemChanged = (item) => saveToServer(item);
 *   settings.plugins = [ notif, ... ];
 */
export class NotificationPlugin {
    readonly name = 'notification';
    private _core: any = null;

    // ── Lifecycle ────────────────────────────────────────────────────────────

    init(core: any): void {
        this._core = core;
    }

    destroy(): void {
        this._core = null;
    }

    // ── Veto callbacks — return false to cancel the action ───────────────────

    /**
     * Called before a move or resize is committed.
     * Return false to revert the item to its previous position/size.
     * @param item      The item after the action (new state already applied to data).
     * @param oldState  Snapshot of the item before the action: { Offset, Width, Resource, From, To }.
     */
    onBeforeItemChange(_item: any, _oldState: any): boolean { return true; }

    /**
     * Called before an externally dragged task is added.
     * Return false to cancel the drop.
     * @param item  The proposed new item object (not yet in the data model).
     */
    onBeforeItemAdd(_item: any): boolean { return true; }

    /**
     * Called before a task is deleted.
     * Return false to cancel the deletion.
     * @param item  The item about to be deleted.
     */
    onBeforeItemDelete(_item: any): boolean { return true; }

    // ── Post-action callbacks — override in handler file or on instance ───────

    /**
     * Called after a task is moved, resized, or has its status changed.
     * @param item     The raw data object of the modified task.
     * @param element  The SVG element (`svg.svg-item`) for the task, if available.
     */
    onItemChanged(_item: any, _element?: Element): void {}

    /**
     * Called after a new task is added via drag-and-drop from an external source.
     * @param item  The raw data object of the newly added task.
     */
    onItemAdded(_item: any): void {}

    /**
     * Called after a task is deleted (e.g. via context menu).
     * @param item  The raw data object of the deleted task (Deleted flag is already true).
     */
    onItemDeleted(_item: any): void {}

    /**
     * Called after the user saves edits from the popup (Text, Description,
     * Color, Completion, Reference, Link).
     * @param item  The raw data object of the saved task.
     */
    onItemSaved(_item: any): void {}

    /**
     * Called after a context menu action is executed.
     * @param actionId  The id from IMenuItemDef (e.g. 'holiday', 'closed', 'open', 'delete-rule').
     * @param item      The raw task data object for task actions; null for calendar actions.
     * @param ctx       The context object: { type, date, resourceId?, taskId?, taskRef?, taskKey? }
     * @param element   The SVG element (`svg.svg-item`) for task actions, undefined for calendar actions.
     */
    onMenuAction(_actionId: string, _item: any, _ctx: any, _element?: Element): void {}

    /**
     * Called after a calendar exception is added or removed.
     * @param rule    The exception rule object: { Capacity, DateFrom, DateTo, ResourceId? }
     * @param action  'add' when an exception is added, 'remove' when it is deleted.
     */
    onCalendarChanged(_rule: any, _action: 'add' | 'remove'): void {}

    // ── Dirty tracking ───────────────────────────────────────────────────────

    /**
     * Returns all items that have been modified (item.Modified === true)
     * across all resources.
     */
    getModifiedItems(): any[] {
        if (!this._core?.data?.Resources) return [];
        const result: any[] = [];
        this._core.data.Resources.forEach((r: any) => {
            r.Items?.forEach((item: any) => {
                if (item.Modified) result.push(item);
            });
        });
        return result;
    }

    /**
     * Clears the Modified flag on all items. Call this after a successful
     * server save to reset the dirty state.
     */
    clearDirty(): void {
        if (!this._core?.data?.Resources) return;
        this._core.data.Resources.forEach((r: any) => {
            r.Items?.forEach((item: any) => { item.Modified = false; });
        });
    }

    // ── Internal dispatch — called by core and plugins ───────────────────────

    /** @internal Resolves the handler fn: window.SchedulaHandlers first, then instance method. */
    private _resolve(name: string): Function | null {
        const global = (typeof window !== 'undefined') ? (window as any).SchedulaHandlers : undefined;
        if (global && typeof global[name] === 'function') return global[name].bind(global);
        if (typeof (this as any)[name] === 'function') return ((this as any)[name] as Function).bind(this);
        return null;
    }

    /** @internal — returns false if vetoed */
    notifyBeforeChange(item: any, oldState: any): boolean {
        const fn = this._resolve('onBeforeItemChange');
        if (!fn) return true;
        try { const r = fn(item, oldState); return r !== false; }
        catch (e) { return true; }
    }

    /** @internal — returns false if vetoed */
    notifyBeforeAdd(item: any): boolean {
        const fn = this._resolve('onBeforeItemAdd');
        if (!fn) return true;
        try { const r = fn(item); return r !== false; }
        catch (e) { return true; }
    }

    /** @internal — returns false if vetoed */
    notifyBeforeDelete(item: any): boolean {
        const fn = this._resolve('onBeforeItemDelete');
        if (!fn) return true;
        try { const r = fn(item); return r !== false; }
        catch (e) { return true; }
    }

    /** @internal */
    notifyChanged(item: any, element?: Element): void {
        const fn = this._resolve('onItemChanged');
        if (!fn) return;
        try { fn(item, element); } catch (e) {}
    }

    /** @internal */
    notifyAdded(item: any): void {
        const fn = this._resolve('onItemAdded');
        if (!fn) return;
        try { fn(item); } catch (e) {}
    }

    /** @internal */
    notifyDeleted(item: any): void {
        const fn = this._resolve('onItemDeleted');
        if (!fn) return;
        try { fn(item); } catch (e) {}
    }

    /** @internal */
    notifySaved(item: any): void {
        const fn = this._resolve('onItemSaved');
        if (!fn) return;
        try { fn(item); } catch (e) {}
    }

    /** @internal */
    notifyMenuAction(actionId: string, item: any, ctx: any, element?: Element): void {
        const fn = this._resolve('onMenuAction');
        if (!fn) return;
        try { fn(actionId, item, ctx, element); } catch (e) {}
    }

    /** @internal */
    notifyCalendarChanged(rule: any, action: 'add' | 'remove'): void {
        const fn = this._resolve('onCalendarChanged');
        if (!fn) return;
        try { fn(rule, action); } catch (e) {}
    }
}

// Expose as global for IIFE bundle usage (same pattern as index.ts)
(window as any).NotificationPlugin = NotificationPlugin;
