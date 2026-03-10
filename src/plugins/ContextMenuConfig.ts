/**
 * ContextMenuConfig — default menu item definitions for ContextMenuPlugin.
 *
 * PRO users can customise these arrays or replace them at runtime before
 * registering the plugin:
 *
 *   const ctx = new ContextMenuPlugin();
 *   ctx.taskMenuItems = [
 *       { id: 'open',        label: 'Edit' },
 *       { id: '_sep',        label: '', separator: true },
 *       { id: 'my-action',   label: 'My custom action' },
 *       { id: 'delete-task', label: 'Delete', confirm: 'Delete this task?' },
 *   ];
 *   scheduler.registerPlugin(ctx);
 *
 * ── Built-in action IDs (handled internally by ContextMenuPlugin) ────────────
 *   'open'         — opens the task popup editor             (task context only)
 *   'delete-task'  — marks the task as deleted               (task context only)
 *   'delete-rule'  — removes the calendar rule for that day  (day / cell context)
 *   'custom-hours' — prompts the user for a custom hour value (day / cell context)
 *
 * Any other id is treated as a generic calendar action:
 *   • CalendarPlugin (if registered) writes the rule directly.
 *   • A 'schedulacalendar:action' DOM event is dispatched for backward compat.
 *   • NotificationPlugin.onMenuAction(id, null, ctx) is fired.
 */

export interface IMenuItemDef {
    /** Unique action identifier. */
    id: string;
    /** Label shown in the menu. */
    label: string;
    /** If true the item renders as a divider line (id / label are ignored). */
    separator?: boolean;
    /**
     * Confirmation message shown before executing the action.
     * If omitted the action runs immediately.
     */
    confirm?: string;
    // ── Calendar dispatch fields (day / cell context) ─────────────────────────
    /** Capacity in minutes: 0 = unavailable, 480 = 8 h, 960 = 16 h … */
    capacity?: number;
    /** Human-readable description stored in the calendar entry. */
    description?: string;
    /** CSS class applied to the calendar entry. */
    classes?: string;
}

// ── Task context ─────────────────────────────────────────────────────────────

export const defaultTaskMenuItems: IMenuItemDef[] = [
    { id: 'open',        label: 'Edit' },
    { id: '_sep1',       label: '', separator: true },
    { id: 'delete-task', label: 'Delete', confirm: 'Confirm task deletion?' },
];

// ── Day (time-unit header) context ───────────────────────────────────────────

export const defaultDayMenuItems: IMenuItemDef[] = [
    { id: 'holiday',     label: 'Holiday',      capacity: 0,    description: 'Holiday',      classes: 'timeoff',     confirm: 'Set as Holiday?' },
    { id: 'closed',      label: 'Closed',        capacity: 0,    description: 'Closed',       classes: 'closed',      confirm: 'Set as Closed?' },
    { id: 'unavailable', label: 'Unavailable',   capacity: 0,    description: 'Unavailable',  classes: 'unavailable', confirm: 'Set as Unavailable?' },
    { id: '_sep1',       label: '', separator: true },
    { id: 'cap8h',        label: '8 hours',       capacity: 480,  description: '8h capacity',  classes: 'cap8h',       confirm: 'Set capacity to 8 hours?' },
    { id: 'cap16h',       label: '16 hours',      capacity: 960,  description: '16h capacity', classes: 'cap16h',      confirm: 'Set capacity to 16 hours?' },
    { id: 'custom-hours', label: 'Custom time...' },
    { id: '_sep2',        label: '', separator: true },
    { id: 'delete-rule',  label: 'Delete',        confirm: 'Reset this day to default?' },
];

// ── Cell (resource row) context ───────────────────────────────────────────────

export const defaultCellMenuItems: IMenuItemDef[] = [
    { id: 'holiday',     label: 'Holiday',      capacity: 0,    description: 'Holiday',      classes: 'timeoff',     confirm: 'Set as Holiday?' },
    { id: 'closed',      label: 'Closed',        capacity: 0,    description: 'Closed',       classes: 'closed',      confirm: 'Set as Closed?' },
    { id: 'unavailable', label: 'Unavailable',   capacity: 0,    description: 'Unavailable',  classes: 'unavailable', confirm: 'Set as Unavailable?' },
    { id: '_sep1',        label: '', separator: true },
    { id: 'cap8h',        label: '8 hours',       capacity: 480,  description: '8h capacity',  classes: 'cap8h',       confirm: 'Set capacity to 8 hours?' },
    { id: 'cap16h',       label: '16 hours',      capacity: 960,  description: '16h capacity', classes: 'cap16h',      confirm: 'Set capacity to 16 hours?' },
    { id: 'custom-hours', label: 'Custom time...' },
    { id: '_sep2',        label: '', separator: true },
    { id: 'delete-rule',  label: 'Delete',        confirm: 'Reset this resource for this day?' },
];
