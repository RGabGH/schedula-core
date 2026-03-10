import { SchedulaCalendar } from '../models/SchedulaCalendar.js';

/**
 * CalendarPlugin — PRO feature.
 *
 * Populates a single SchedulaCalendar with all rules (global and per-resource).
 * getCapacity(instant, day, resourceId) handles the per-resource filtering internally:
 *   item.resourceId == resourceId || item.resourceId == null
 *
 * Calendar.Items entries:
 *   - { Day, Capacity }                          — global weekly rule
 *   - { DateFrom, DateTo, Capacity, Day? }       — global date-range rule
 *   - { Day, Capacity, ResourceId }              — per-resource weekly rule
 *   - { DateFrom, DateTo, Capacity, ResourceId } — per-resource date-range rule
 */
export class CalendarPlugin {
    readonly name = 'calendar';
    private _core: any;

    init(core: any): void {
        this._core = core;
        this.applyData(core.data?.Calendar);
    }

    /**
     * Builds one SchedulaCalendar with base rule + all items (global and per-resource).
     * Sets core.calendar to the new calendar.
     */
    applyData(calendarData: any): void {
        const cal = new SchedulaCalendar();

        // Base rule: full capacity for all days/times (global, no resourceId)
        const r = cal.newItem();
        r.capacity = calendarData?.Reference ?? cal.reference;
        r.day = -1;
        r.from = 0;
        r.duration = 999999999;
        r.type = 'rule';
        r.resourceId = null;

        // All items: global (ResourceId == null) and per-resource
        calendarData?.Items?.forEach((item: any) => this._addRuleItem(cal, item));

        this._core.calendar = cal;
    }

    /**
     * Adds or replaces a calendar rule for a specific resource.
     * Writes to data.Calendar.Items and rebuilds the calendar.
     */
    addResourceException(resourceId: string | number, rule: { Day: number; Capacity: number; DateFrom?: string; DateTo?: string }): void {
        const id = String(resourceId);
        const calendarData = this._core.data?.Calendar;
        if (!calendarData) return;
        if (!calendarData.Items) calendarData.Items = [];

        calendarData.Items = calendarData.Items.filter((i: any) =>
            String(i.ResourceId) !== id || i.Day !== rule.Day || i.DateFrom !== rule.DateFrom
        );
        calendarData.Items.push({ ...rule, ResourceId: id });

        this.applyData(calendarData);
    }

    destroy(): void {
        this._core = null;
    }

    private _parseDate(value: string): number {
        // ISO 8601 date-only (YYYY-MM-DD): parse as local midnight to avoid UTC offset shifting the day
        const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (iso) return new Date(+iso[1], +iso[2] - 1, +iso[3]).getTime();
        return new Date(value).getTime();
    }

    private _addRuleItem(cal: SchedulaCalendar, item: any): void {
        const i = cal.newItem();
        i.capacity = item.Capacity;
        i.day = item.Day ?? -1;
        i.from = item.DateFrom ? this._parseDate(item.DateFrom) : 0;
        i.duration = item.DateFrom && item.DateTo
            ? (this._parseDate(item.DateTo) - this._parseDate(item.DateFrom)) / 60000 + 1440
            : 999999999;
        i.resourceId = item.ResourceId != null ? String(item.ResourceId) : null;
        i.type = 'rule';
    }
}
