import { SchedulaCalendar } from '../models/SchedulaCalendar.js';

/**
 * CalendarPlugin — PRO feature.
 *
 * Reads data.Calendar (Reference, Items) and replaces the core's default
 * full-capacity calendar with custom capacity rules.
 *
 * Without this plugin the core uses a plain full-capacity calendar (ratio = 1
 * for every day), which is correct for basic use cases.
 *
 * Calendar.Items entries:
 *   - { Day, Capacity }                          — global weekly rule
 *   - { DateFrom, DateTo, Capacity, Day? }       — global date-range rule
 *   - { Day, Capacity, ResourceId }              — per-resource weekly rule
 *   - { DateFrom, DateTo, Capacity, ResourceId } — per-resource date-range rule
 *
 * Global items (no ResourceId) build the shared calendar.
 * Items with ResourceId build per-resource calendars that inherit global base.
 */
export class CalendarPlugin {
    readonly name = 'calendar';
    private _core: any;
    private _resourceCalendars = new Map<string, SchedulaCalendar>();

    init(core: any): void {
        this._core = core;
        core.initCalendar();
    }

    /**
     * Builds the global SchedulaCalendar from Items without ResourceId,
     * then builds per-resource calendars from Items with ResourceId.
     * Called by core.initCalendar() whenever data changes.
     */
    applyData(calendarData: any): void {
        const cal = this._buildCalendar(calendarData);
        this._core.calendar = cal;

        this._resourceCalendars.clear();
        const items: any[] = calendarData?.Items ?? [];
        const resourceIds = [...new Set(
            items.filter((i: any) => i.ResourceId != null).map((i: any) => String(i.ResourceId))
        )];
        resourceIds.forEach((id: string) => {
            const rules = items.filter((i: any) => String(i.ResourceId) === id);
            this._resourceCalendars.set(id, this._buildResourceCalendar(rules, cal));
        });
    }

    /**
     * Returns the per-resource SchedulaCalendar for the given resource Id,
     * or null if no resource-specific rules are defined.
     */
    getResourceCalendar(resourceId: string): SchedulaCalendar | null {
        return this._resourceCalendars.get(String(resourceId)) ?? null;
    }

    /**
     * Adds or replaces a calendar exception for a specific resource.
     * Writes to data.Calendar.Items with ResourceId — the single source of truth.
     * Call scheduler.refresh() afterwards.
     *
     * @param resourceId  The resource Id (string or number)
     * @param rule        { Day: 0-6, Capacity: minutes } for a weekly rule
     *                    or { Day, Capacity, DateFrom, DateTo } for a date range
     */
    addResourceException(resourceId: string | number, rule: { Day: number; Capacity: number; DateFrom?: string; DateTo?: string }): void {
        const id = String(resourceId);
        const calendarData = this._core.data?.Calendar;
        if (!calendarData) return;
        if (!calendarData.Items) calendarData.Items = [];

        // Remove existing rule with same ResourceId + Day (or same date range)
        calendarData.Items = calendarData.Items.filter((i: any) =>
            String(i.ResourceId) !== id || i.Day !== rule.Day || i.DateFrom !== rule.DateFrom
        );
        calendarData.Items.push({ ...rule, ResourceId: id });

        const rules = calendarData.Items.filter((i: any) => String(i.ResourceId) === id);
        this._resourceCalendars.set(id, this._buildResourceCalendar(rules, this._core.calendar));
    }

    destroy(): void {
        this._resourceCalendars.clear();
        this._core = null;
    }

    // ── Internals ────────────────────────────────────────────────────────────

    private _buildCalendar(calendarData: any): SchedulaCalendar {
        const cal = new SchedulaCalendar();
        const r = cal.newItem();
        r.capacity = calendarData?.Reference ?? cal.reference;
        r.day = -1;
        r.from = 0;
        r.duration = 999999999;
        r.type = 'rule';

        // Only global items (no ResourceId)
        calendarData?.Items?.filter((item: any) => item.ResourceId == null)
            .forEach((item: any) => this._addRuleItem(cal, item));

        return cal;
    }

    /**
     * Builds a per-resource SchedulaCalendar inheriting the global base capacity
     * and applying the given resource-specific rules on top.
     */
    private _buildResourceCalendar(rules: any[], globalCal: SchedulaCalendar): SchedulaCalendar {
        const cal = new SchedulaCalendar();
        const base = cal.newItem();
        base.capacity = globalCal.reference;
        base.day = -1;
        base.from = 0;
        base.duration = 999999999;
        base.type = 'rule';

        rules.forEach((rule: any) => this._addRuleItem(cal, rule));
        return cal;
    }

    private _addRuleItem(cal: SchedulaCalendar, item: any): void {
        const i = cal.newItem();
        i.capacity = item.Capacity;
        i.day = item.Day ?? -1;
        i.from = item.DateFrom ? new Date(item.DateFrom).getTime() : 0;
        i.duration = item.DateFrom && item.DateTo
            ? (new Date(item.DateTo).getTime() - new Date(item.DateFrom).getTime()) / 60000
            : 999999999;
        i.type = 'rule';
    }
}
