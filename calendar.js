export class CalendarItem {
    constructor() {
        this._duration = 1440;
        this._denominator = 60000;
        this._capacity = 0;
        this._step = 10;
        this._type = '';
        this._day = -1;
        this._orderIndex = 1000;
        var now = new Date();
        var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        this._from = Math.trunc(date.getTime() / this._denominator);
        this.type = 'event';
    }
    get capacity() {
        return this._capacity;
    }
    get day() {
        return this._day;
    }
    set day(val) {
        if ((val >= -1) && (val <= 6))
            this._day = val;
    }
    get dateFrom() {
        return new Date(this._from * this._denominator).toString();
    }
    get dateTo() {
        return new Date((this._from + this._duration) * this._denominator);
    }
    get duration() {
        return this._duration;
    }
    set denominator(value) {
        this.from *= this._denominator;
        this.from /= value;
        this._capacity *= this._denominator;
        this._capacity /= value;
        this._denominator = value;
    }
    set duration(value) {
        var duration = value;
        duration = this.getModulo(duration);
        if (duration > 0) {
            this._duration = duration;
        }
    }
    set from(value) {
        var f = Math.trunc(value / this._denominator);
        f = this.getModulo(f);
        this._from = f;
    }
    get from() {
        return this._from;
    }
    get to() {
        return this._from + this._duration;
    }
    set type(value) {
        this._type = value;
        if (value == 'rule') {
            this._orderIndex = 0;
        }
        else if (value == 'calendar') {
            this._orderIndex = 1;
        }
        else if (value == 'event') {
            this._orderIndex = 2;
        }
        else {
            this._orderIndex = 1000;
            this._type = 'event';
        }
    }
    get type() {
        return this._type;
    }
    get orderIndex() {
        return this._orderIndex;
    }
    set to(value) {
        let v = Math.trunc(value / this._denominator);
        v = this.getModulo(v);
        if (v > 0 && v > this._from) {
            this._duration = v - this._from;
        }
    }
    set dateFrom(value) {
        let dt = value;
        if (!value.includes('T'))
            dt += 'T00:00:00';
        let date = new Date(dt);
        if (date.toString() != 'Invalid Date') {
            this.from = date.getTime();
        }
        else
            console.log(value + ' - Invalid Date');
    }
    getModulo(value) {
        let v = value;
        let r = value % this._step;
        if ((r) > (this._step / 2))
            v = v - r + this._step;
        else
            v -= r;
        return v;
    }
}
export class Calendar {
    constructor() {
        this._items = [];
        this._capacity = 1440;
    }
    newItem() {
        let item = new CalendarItem();
        this._items.push(item);
        return item;
    }
    addItem(item) {
        if (item instanceof CalendarItem) {
            this._items.push(item);
            return item;
        }
        else
            return null;
    }
    get items() {
        return this._items;
    }
    get itemCount() {
        return this.items.length;
    }
    getCapacity(instant, day) {
        let capacity = this._capacity;
        let dayRuleItem = this.items.filter(item => (item.type == 'rule' && item.day == day) && (item.from <= instant) && (item.to > instant))[0];
        capacity = dayRuleItem ? dayRuleItem.capacity : capacity;
        if (dayRuleItem == undefined) {
            let capacityRuleItem = this.items.filter(item => (item.type == 'rule' && item.day == -1) && (item.from <= instant) && (item.to > instant))[0];
            capacity = capacityRuleItem ? capacityRuleItem.capacity : capacity;
        }
        let calendarItem = this.items.filter(item => (item.type == 'calendar' && item.day == -1) && (item.from <= instant) && (item.to > instant))[0];
        capacity = calendarItem ? calendarItem.capacity : capacity;
        return capacity;
    }
}
export class SchedulerItem {
    constructor() {
        this._reference = 1440;
        this._duration = 1440;
        this._effort = 1440;
        this._denominator = 60000;
        this._step = 10;
        this._calendar = null;
        var now = new Date();
        var date = new Date(now.getFullYear(), now.getMonth(), now.getDay());
        this._from = Math.trunc(date.getTime() / this._denominator);
    }
    get dateFrom() {
        return new Date(this._from * this._denominator).toString();
    }
    get dateTo() {
        return new Date((this._from + this._duration) * this._denominator);
    }
    get duration() {
        return this._duration;
    }
    get effort() {
        return this._effort;
    }
    set effort(value) {
        if (value > this._step) {
            let v = this.getModulo(value);
            this._effort = v;
            this.calcDuration();
        }
    }
    set denominator(value) {
        if (value > 0) {
            this.from *= this._denominator;
            this.from /= value;
            this._denominator = value;
        }
    }
    set from(value) {
        let f = Math.trunc(value / this._denominator);
        f = this.getModulo(f);
        this._from = f;
        this.calcDuration();
    }
    get from() {
        return this._from;
    }
    get to() {
        let to = this._from + this._duration;
        return to;
    }
    set to(value) {
        let v = Math.trunc(value / this._denominator);
        v = this.getModulo(v);
        if (v > 0 && v > this._from) {
            this._duration = v - this._from;
            this.calcEffort();
        }
    }
    set calendar(value) {
        if (value instanceof Calendar) {
            this._calendar = value;
        }
    }
    set dateFrom(value) {
        let dt = value;
        if (!value.includes('T'))
            dt += 'T00:00:00';
        let date = new Date(dt);
        if (date.toString() != 'Invalid Date') {
            this.from = date.getTime();
        }
        else
            console.log(value + ' - Invalid Date');
    }
    calcDuration() {
        let duration = this._effort;
        if (this._calendar != null) {
            let effort = 0;
            let sum = 0;
            let denom = this._denominator;
            let reference = this._reference;
            let step = this._step;
            while (effort < this._effort) {
                let cursor = this._from + sum;
                let increment = step;
                var e = 0;
                let dt = new Date(cursor * denom);
                //check rules
                let capacity = this._calendar.getCapacity(cursor, dt.getDay());
                if (capacity > 0) {
                    increment = (reference / capacity) * step;
                    e = step;
                }
                effort += e;
                sum += increment;
            }
            duration = sum;
        }
        this._duration = duration;
    }
    calcEffort() {
        let effort = this._duration;
        if (this._calendar != null) {
            let duration = 0;
            effort = 0;
            let denom = this._denominator;
            let reference = this._reference;
            let step = this._step;
            while (duration < this._duration) {
                let cursor = this._from + duration;
                let e = 0;
                let dt = new Date(cursor * denom);
                //check rules
                let capacity = this._calendar.getCapacity(cursor, dt.getDay());
                if (capacity > 0) {
                    e = ((capacity * step) / reference);
                }
                effort += e;
                duration += step;
            }
        }
        this._effort = Math.round(effort);
    }
    getModulo(value) {
        let v = value;
        let r = value % this._step;
        if ((r) > (this._step / 2))
            v = v - r + this._step;
        else
            v -= r;
        return v;
    }
}
module.exports = { CalendarItem, Calendar, SchedulerItem };
//# sourceMappingURL=calendar.js.map