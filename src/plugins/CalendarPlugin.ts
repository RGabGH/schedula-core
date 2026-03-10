import { SchedulaCalendar } from '../models/SchedulaCalendar.js';
import { SchedulaItem } from '../ui/SchedulaItem.js';

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

    /**
     * Adds (or replaces) a date-based calendar exception.
     * Pass resourceId = null for a global rule, or a resource id/index for per-resource.
     */
    addException(
        rule: { Capacity: number; DateFrom: string; DateTo: string; Day?: number },
        resourceId?: string | number | null
    ): void {
        const calendarData = this._core.data?.Calendar;
        if (!calendarData) return;
        if (!calendarData.Items) calendarData.Items = [];

        const idStr = resourceId != null ? String(resourceId) : null;

        // Remove any existing rule for the same date + resource to avoid duplicates
        calendarData.Items = calendarData.Items.filter((i: any) => {
            const sameRes = idStr != null ? String(i.ResourceId) === idStr : i.ResourceId == null;
            return !(sameRes && i.DateFrom === rule.DateFrom);
        });

        const newItem: any = { Capacity: rule.Capacity, DateFrom: rule.DateFrom, DateTo: rule.DateTo };
        if (rule.Day != null) newItem.Day = rule.Day;
        if (idStr != null) newItem.ResourceId = idStr;

        calendarData.Items.push(newItem);
        this.applyData(calendarData);
        this._core?.getPlugin?.('notification')?.notifyCalendarChanged(newItem, 'add');
        this._recalculateTasks(idStr);
    }

    /**
     * Removes all calendar exceptions for a specific date (and optional resource).
     */
    removeException(date: string, resourceId?: string | number | null): void {
        const calendarData = this._core.data?.Calendar;
        if (!calendarData?.Items) return;

        const idStr = resourceId != null ? String(resourceId) : null;

        calendarData.Items = calendarData.Items.filter((i: any) => {
            const sameRes = idStr != null ? String(i.ResourceId) === idStr : i.ResourceId == null;
            return !(sameRes && i.DateFrom === date);
        });

        this.applyData(calendarData);
        this._core?.getPlugin?.('notification')?.notifyCalendarChanged(
            { DateFrom: date, ResourceId: idStr },
            'remove'
        );
        this._recalculateTasks(idStr);
    }

    destroy(): void {
        this._core = null;
    }

    /**
     * After a calendar change, recalculate Width from Effort for all affected tasks.
     * If affectedResourceId is null, all resources are recalculated (global rule).
     * Effort is the ground truth — Width is derived via calcDuration with the new calendar.
     */
    private _recalculateTasks(affectedResourceId?: string | null): void {
        const resources = this._core?.data?.Resources;
        if (!resources) return;
        const notif = this._core?.getPlugin?.('notification');

        resources.forEach((resource: any, ri: number) => {
            // Skip resources not affected by a per-resource rule
            if (affectedResourceId != null && String(ri) !== affectedResourceId) return;

            resource.Items?.forEach((itemData: any) => {
                if (itemData.Deleted) return;
                const savedEffort = itemData.Effort;
                if (!savedEffort) return;

                const scitem = new SchedulaItem(this._core, itemData);
                scitem.Effort = savedEffort;
                notif?.notifyChanged(itemData);
            });
        });

        this._resolveInterferences(affectedResourceId, notif);
    }

    /**
     * After widths are recalculated, push downstream tasks to avoid overlaps.
     * Processes tasks in chronological order per resource: if a task starts before
     * the previous one ends, it is moved to start right after it (cascade effect).
     * Moving a task changes its From, so its Width is also recalculated from Effort.
     */
    private _resolveInterferences(affectedResourceId?: string | null, notif?: any): void {
        const resources = this._core?.data?.Resources;
        if (!resources) return;

        resources.forEach((resource: any, ri: number) => {
            if (affectedResourceId != null && String(ri) !== affectedResourceId) return;

            const items: any[] = (resource.Items ?? [])
                .filter((i: any) => !i.Deleted)
                .sort((a: any, b: any) => a.Offset - b.Offset);

            for (let idx = 1; idx < items.length; idx++) {
                const prev = items[idx - 1];
                const curr = items[idx];
                const prevEnd = prev.Offset + prev.Width;

                if (curr.Offset < prevEnd) {
                    const savedEffort = curr.Effort;
                    const scitem = new SchedulaItem(this._core, curr);
                    // Place immediately after the previous task ends, then recalculate Width
                    scitem.Offset = prevEnd;
                    if (savedEffort) scitem.Effort = savedEffort;
                    notif?.notifyChanged(curr);
                }
            }
        });
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
