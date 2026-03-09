
export class SchedulaCalendarItem {

    private _duration: number = 1440;
    private _denominator: number = 60000;
    private _capacity: number = 0;
    private _step: number = 60;
    private _from: number;
    private _type: string = '';
    private _day: number = -1;
    private _orderIndex: number = 1000;
    public resourceId: string | null = null;

    constructor() {
        var now = new Date();
        var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        this._from = Math.trunc(date.getTime() / this._denominator);
        this.type = 'event';
    }

    get capacity() { return this._capacity; }
    set capacity(val: number) { this._capacity = val; }

    get day() { return this._day; }
    set day(val: number) { if ((val >= -1) && (val <= 6)) this._day = val; }

    get dateFrom() { return new Date(this._from * this._denominator).toString(); }
    get dateTo() { return new Date((this._from + this._duration) * this._denominator); }

    get duration() { return this._duration; }
    set duration(value: number) {
        var duration = this.getModulo(value);
        if (duration > 0) this._duration = duration;
    }

    set denominator(value: number) {
        this.from *= this._denominator;
        this.from /= value;
        this._capacity *= this._denominator;
        this._capacity /= value;
        this._denominator = value;
    }

    set from(value: number) {
        let f = Math.trunc(value / this._denominator);
        f = this.getModulo(f);
        this._from = f;
    }
    get from() { return this._from; }

    get to() { return this._from + this._duration; }
    set to(value: number) {
        let v = Math.trunc(value / this._denominator);
        v = this.getModulo(v);
        if (v > 0 && v > this._from) this._duration = v - this._from;
    }

    set type(value: string) {
        this._type = value;
        if (value == 'rule') { this._orderIndex = 0; }
        else if (value == 'calendar' || value == 'exception') { this._orderIndex = 1; this._type = 'calendar'; }
        else if (value == 'event') { this._orderIndex = 2; }
        else { this._orderIndex = 1000; this._type = 'event'; }
    }
    get type() { return this._type; }
    get orderIndex() { return this._orderIndex; }

    set dateFrom(value: string) {
        let dt = value;
        if (!value.includes('T')) dt += 'T00:00:00';
        let date = new Date(dt);
        if (date.toString() != 'Invalid Date') this.from = date.getTime();
        else console.log(value + ' - Invalid Date');
    }

    private getModulo(value: number) {
        let v = value;
        let r = value % this._step;
        if (r > this._step / 2) v = v - r + this._step; else v -= r;
        return v;
    }
}

export class SchedulaCalendar {
    private _items: SchedulaCalendarItem[] = [];
    private _capacity: number = 0;
    private _denominator: number = 60000;
    private _reference: number = 1440;
    private _step: number = 15;

    newItem(): SchedulaCalendarItem {
        let item = new SchedulaCalendarItem();
        this._items.push(item);
        return item;
    }

    addItem(item: SchedulaCalendarItem): SchedulaCalendarItem | null {
        if (item instanceof SchedulaCalendarItem) { this._items.push(item); return item; }
        return null;
    }

    get items() { return this._items; }
    get itemCount() { return this._items.length; }
    get reference() { return this._reference; }

    /**
     * Returns capacity in minutes for the given instant and day-of-week.
     * If resourceId is provided, per-resource rules take precedence over global rules.
     * Filter: item.resourceId == resourceId || item.resourceId == null
     */
    public getCapacity(instant: number, day: number, resourceId?: string): number {
        const filterByResource = (item: SchedulaCalendarItem) =>
            (item.resourceId == resourceId) || (item.resourceId == null);
        const last = (arr: SchedulaCalendarItem[]) => arr.length ? arr[arr.length - 1] : undefined;

        let capacity = this._capacity;

        // Day-specific rule
        const dayRule = last(this._items.filter(item =>
            item.type == 'rule' && item.day == day &&
            item.from <= instant && item.to > instant &&
            filterByResource(item)
        ));
        capacity = dayRule ? dayRule.capacity : capacity;

        // General rule (day == -1) if no day-specific rule found
        if (!dayRule) {
            const baseRule = last(this._items.filter(item =>
                item.type == 'rule' && item.day == -1 &&
                item.from <= instant && item.to > instant &&
                filterByResource(item)
            ));
            capacity = baseRule ? baseRule.capacity : capacity;
        }

        // Calendar exception (overrides rules)
        let calItem = last(this._items.filter(item =>
            item.type == 'calendar' && item.day == day &&
            item.from <= instant && item.to > instant &&
            filterByResource(item)
        ));
        if (!calItem) {
            calItem = last(this._items.filter(item =>
                item.type == 'calendar' && item.day == -1 &&
                item.from <= instant && item.to > instant &&
                filterByResource(item)
            ));
        }
        if (calItem) capacity = calItem.capacity;

        return capacity;
    }

    public calcDuration(item: any): number {
        const resourceId: string | undefined = item.ResourceId ?? item._scheduler?.data?.Resources?.[item.Resource]?.Id;
        let duration = 0, effort = 0, sum = 0;
        const denom = this._denominator, step = this._step;

        while (effort < item.Effort) {
            const cursor = item.From + sum;
            const dt = new Date(cursor * denom);
            const capacity = this.getCapacity(cursor, dt.getUTCDay(), resourceId);
            const dayMinTot = dt.getUTCHours() * 60 + dt.getUTCMinutes();
            let e = 0;
            if (capacity > 0 && dayMinTot < capacity) e = step;
            effort += e;
            effort = Math.round(effort * 1000) / 1000;
            sum += step;
        }

        duration = sum;
        if (duration < step) duration = step;
        return duration;
    }

    public calcEffort(item: any): number {
        const resourceId: string | undefined = item.ResourceId ?? item._scheduler?.data?.Resources?.[item.Resource]?.Id;
        let d = 0, effort = 0;
        const duration = item.Width;
        const denom = this._denominator, step = this._step;

        while (d < duration) {
            const cursor = item.From + d;
            const dt = new Date(cursor * denom);
            const capacity = this.getCapacity(cursor, dt.getUTCDay(), resourceId);
            const dayMinTot = dt.getUTCHours() * 60 + dt.getUTCMinutes();
            let e = 0;
            if (capacity > 0 && dayMinTot < capacity) e = step;
            effort += e;
            effort = Math.ceil(effort * 100) / 100;
            d += step;
        }

        return effort;
    }

    public optimazeStart(item: any): number {
        const resourceId: string | undefined = item.ResourceId ?? item._scheduler?.data?.Resources?.[item.Resource]?.Id;
        let sum = 0;
        const denom = this._denominator, step = this._step, reference = this._reference;

        while (sum < reference * 20) {
            const cursor = item.From + sum;
            const dt = new Date(cursor * denom);
            const capacity = this.getCapacity(cursor, dt.getUTCDay(), resourceId);
            const dayMinTot = dt.getUTCHours() * 60 + dt.getUTCMinutes();
            if (capacity == 0 || dayMinTot >= capacity) sum += step;
            else break;
        }

        return item.From + sum;
    }
}

export class CalendarMousePos {
    x: number = 0;
    y: number = 0;
    timeOffset: number = 0;
    resourceIndex: number = 0;
    date: Date = new Date();
}
