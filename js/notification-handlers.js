/**
 * SchedulaCore PRO
 *
 * @file    js/notification-handlers.js
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
/**
 * notification-handlers.js — SchedulaCore handler file.
 *
 * Edit this file to intercept and customise scheduler events.
 * This file is loaded BEFORE the PRO bundle, so window.SchedulaHandlers
 * is ready when the plugin initialises.
 *
 * All logging lives here — the plugin itself emits nothing to the console.
 *
 * Return false from any onBefore* function to cancel/veto the action.
 */
window.SchedulaHandlers = {

    // ── Veto hooks ─────────────────────────────────────────────────────────────
    // Return false to block the action.

    /**
     * Called before a task is moved or resized.
     * @param {object} item      Task data after the change (new state).
     * @param {object} oldState  Previous state: { Offset, Width, Resource, From, To }
     * @returns {boolean}  false to revert.
     */
    onBeforeItemChange(item, oldState) {
        // Example: block if task is locked
        // if (item.Locked) return false;
        return true;
    },

    /**
     * Called before an externally dragged task is dropped onto the planner.
     * @param {object} item  Proposed new task (not yet in data).
     * @returns {boolean}  false to cancel the drop.
     */
    onBeforeItemAdd(item) {
        return true;
    },

    /**
     * Called before a task is deleted.
     * @param {object} item  Task about to be deleted.
     * @returns {boolean}  false to cancel deletion.
     */
    onBeforeItemDelete(item) {
        return true;
    },

    // ── Post-action hooks ──────────────────────────────────────────────────────

    /**
     * Called after a task is moved, resized or its status changes.
     * @param {object}   item     Task data object.
     * @param {Element}  element  SVG element of the task bar (may be undefined).
     */
    onItemChanged(item, element) {
        _hideResizeTooltip();
        console.log('[Scheduler] onItemChanged', {
            id: item?.Id,
            text: item?.Text,
            offset: item?.Offset,
            width: item?.Width,
            resource: item?.Resource,
        }, element ?? '(no element)');

        // Example: save to server
        // fetch('/api/tasks', { method: 'PUT', body: JSON.stringify(item) });
    },

    /**
     * Called after a new task is dropped from an external source.
     * @param {object} item  Newly added task data.
     */
    onItemAdded(item) {
        console.log('[Scheduler] onItemAdded', {
            id: item?.Id,
            text: item?.Text,
            offset: item?.Offset,
            width: item?.Width,
            resource: item?.Resource,
        });
    },

    /**
     * Called after a task is deleted.
     * @param {object} item  Deleted task data (Deleted flag is already true).
     */
    onItemDeleted(item) {
        console.log('[Scheduler] onItemDeleted', { id: item?.Id, text: item?.Text });
    },

    /**
     * Called after the user saves edits from the popup.
     * @param {object} item  Task data after popup save.
     */
    onItemSaved(item) {
        console.log('[Scheduler] onItemSaved', {
            id: item?.Id,
            text: item?.Text,
            color: item?.Color1,
            completion: item?.Completion,
            reference: item?.Reference,
            link: item?.Link,
        });
    },

    /**
     * Called after a context menu action is executed.
     * @param {string}  actionId  Menu action id (e.g. 'holiday', 'closed', 'delete-rule').
     * @param {object}  item      Task data for task actions; null for calendar actions.
     * @param {object}  ctx       Context: { type, date, resourceId?, taskId?, taskRef?, taskKey? }
     * @param {Element} element   SVG element for task actions; undefined for calendar actions.
     */
    onMenuAction(actionId, item, ctx, element) {
        console.log('[Scheduler] onMenuAction', {
            actionId,
            itemId: item?.Id,
            text: item?.Text,
            ctx,
        }, element ?? '(no element)');
    },

    /**
     * Called on every mousemove during a resize operation (PRO).
     * Use this to show live duration feedback (e.g. a tooltip near the cursor).
     * @param {object}  item          Task data object being resized.
     * @param {number}  widthMinutes  Current width in minutes (snapped to gridStep).
     * @param {Element} element       SVG element being resized.
     */
    onItemResizing(item, widthMinutes, element) {
        _showResizeTooltip(item, widthMinutes);
    },

    /**
     * Called after a calendar exception is added or removed.
     * @param {object} rule    Exception rule: { Capacity, DateFrom, DateTo, ResourceId? }
     * @param {string} action  'add' or 'remove'.
     */
    onCalendarChanged(rule, action) {
        console.log('[Scheduler] onCalendarChanged', { action, rule });
    },
};

// ── Resize tooltip (demo) ───────────────────────────────────────────────────

var _resizeTooltip = null;

function _showResizeTooltip(item, widthMinutes) {
    if (!_resizeTooltip) {
        _resizeTooltip = document.createElement('div');
        _resizeTooltip.style.cssText =
            'position:fixed;z-index:9999;' +
            'background:#333;color:#fff;' +
            'padding:4px 10px;border-radius:4px;' +
            'font-size:13px;font-weight:600;' +
            'pointer-events:none;white-space:nowrap;' +
            'box-shadow:0 2px 8px rgba(0,0,0,0.3);';
        document.body.appendChild(_resizeTooltip);
    }
    var hh = Math.floor(widthMinutes / 60);
    var mm = Math.round(widthMinutes % 60);
    _resizeTooltip.textContent = hh + 'h ' + String(mm).padStart(2, '0') + 'm';

    var e = window.event || {};
    if (e.clientX !== undefined) {
        _resizeTooltip.style.left = (e.clientX + 14) + 'px';
        _resizeTooltip.style.top = (e.clientY - 30) + 'px';
    }
    _resizeTooltip.style.display = 'block';
}

function _hideResizeTooltip() {
    if (_resizeTooltip) {
        _resizeTooltip.style.display = 'none';
    }
}
