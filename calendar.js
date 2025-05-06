"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerItem = exports.Calendar = exports.CalendarItem = void 0;
var CalendarItem = /** @class */ (function () {
    function CalendarItem() {
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
    Object.defineProperty(CalendarItem.prototype, "capacity", {
        get: function () {
            return this._capacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (val) {
            if ((val >= -1) && (val <= 6))
                this._day = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "dateFrom", {
        get: function () {
            return new Date(this._from * this._denominator).toString();
        },
        set: function (value) {
            var dt = value;
            if (!value.includes('T'))
                dt += 'T00:00:00';
            var date = new Date(dt);
            if (date.toString() != 'Invalid Date') {
                this.from = date.getTime();
            }
            else
                console.log(value + ' - Invalid Date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "dateTo", {
        get: function () {
            return new Date((this._from + this._duration) * this._denominator);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (value) {
            var duration = value;
            duration = this.getModulo(duration);
            if (duration > 0) {
                this._duration = duration;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "denominator", {
        set: function (value) {
            this.from *= this._denominator;
            this.from /= value;
            this._capacity *= this._denominator;
            this._capacity /= value;
            this._denominator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            var f = Math.trunc(value / this._denominator);
            f = this.getModulo(f);
            this._from = f;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "to", {
        get: function () {
            return this._from + this._duration;
        },
        set: function (value) {
            var v = Math.trunc(value / this._denominator);
            v = this.getModulo(v);
            if (v > 0 && v > this._from) {
                this._duration = v - this._from;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalendarItem.prototype, "orderIndex", {
        get: function () {
            return this._orderIndex;
        },
        enumerable: false,
        configurable: true
    });
    CalendarItem.prototype.getModulo = function (value) {
        var v = value;
        var r = value % this._step;
        if ((r) > (this._step / 2))
            v = v - r + this._step;
        else
            v -= r;
        return v;
    };
    return CalendarItem;
}());
exports.CalendarItem = CalendarItem;
var Calendar = /** @class */ (function () {
    function Calendar() {
        this._items = [];
        this._capacity = 1440;
    }
    Calendar.prototype.newItem = function () {
        var item = new CalendarItem();
        this._items.push(item);
        return item;
    };
    Calendar.prototype.addItem = function (item) {
        if (item instanceof CalendarItem) {
            this._items.push(item);
            return item;
        }
        else
            return null;
    };
    Object.defineProperty(Calendar.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calendar.prototype, "itemCount", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Calendar.prototype.getCapacity = function (instant, day) {
        var capacity = this._capacity;
        var dayRuleItem = this.items.filter(function (item) {
            return (item.type == 'rule' && item.day == day) && (item.from <= instant) && (item.to > instant);
        })[0];
        capacity = dayRuleItem ? dayRuleItem.capacity : capacity;
        if (dayRuleItem == undefined) {
            var capacityRuleItem = this.items.filter(function (item) {
                return (item.type == 'rule' && item.day == -1) && (item.from <= instant) && (item.to > instant);
            })[0];
            capacity = capacityRuleItem ? capacityRuleItem.capacity : capacity;
        }
        var calendarItem = this.items.filter(function (item) {
            return (item.type == 'calendar' && item.day == -1) && (item.from <= instant) && (item.to > instant);
        })[0];
        capacity = calendarItem ? calendarItem.capacity : capacity;
        return capacity;
    };
    return Calendar;
}());
exports.Calendar = Calendar;
var SchedulerItem = /** @class */ (function () {
    function SchedulerItem() {
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
    Object.defineProperty(SchedulerItem.prototype, "dateFrom", {
        get: function () {
            return new Date(this._from * this._denominator).toString();
        },
        set: function (value) {
            var dt = value;
            if (!value.includes('T'))
                dt += 'T00:00:00';
            var date = new Date(dt);
            if (date.toString() != 'Invalid Date') {
                this.from = date.getTime();
            }
            else
                console.log(value + ' - Invalid Date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem.prototype, "dateTo", {
        get: function () {
            return new Date((this._from + this._duration) * this._denominator);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem.prototype, "effort", {
        get: function () {
            return this._effort;
        },
        set: function (value) {
            if (value > this._step) {
                var v = this.getModulo(value);
                this._effort = v;
                this.calcDuration();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem.prototype, "denominator", {
        set: function (value) {
            if (value > 0) {
                this.from *= this._denominator;
                this.from /= value;
                this._denominator = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (value) {
            var f = Math.trunc(value / this._denominator);
            f = this.getModulo(f);
            this._from = f;
            this.calcDuration();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem.prototype, "to", {
        get: function () {
            var to = this._from + this._duration;
            return to;
        },
        set: function (value) {
            var v = Math.trunc(value / this._denominator);
            v = this.getModulo(v);
            if (v > 0 && v > this._from) {
                this._duration = v - this._from;
                this.calcEffort();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SchedulerItem.prototype, "calendar", {
        set: function (value) {
            if (value instanceof Calendar) {
                this._calendar = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    SchedulerItem.prototype.calcDuration = function () {
        var duration = this._effort;
        if (this._calendar != null) {
            var effort = 0;
            var sum = 0;
            var denom = this._denominator;
            var reference = this._reference;
            var step = this._step;
            while (effort < this._effort) {
                var cursor = this._from + sum;
                var increment = step;
                var e = 0;
                var dt = new Date(cursor * denom);
                //check rules
                var capacity = this._calendar.getCapacity(cursor, dt.getDay());
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
    };
    SchedulerItem.prototype.calcEffort = function () {
        var effort = this._duration;
        if (this._calendar != null) {
            var duration = 0;
            effort = 0;
            var denom = this._denominator;
            var reference = this._reference;
            var step = this._step;
            while (duration < this._duration) {
                var cursor = this._from + duration;
                var e = 0;
                var dt = new Date(cursor * denom);
                //check rules
                var capacity = this._calendar.getCapacity(cursor, dt.getDay());
                if (capacity > 0) {
                    e = ((capacity * step) / reference);
                }
                effort += e;
                duration += step;
            }
        }
        this._effort = Math.round(effort);
    };
    SchedulerItem.prototype.getModulo = function (value) {
        var v = value;
        var r = value % this._step;
        if ((r) > (this._step / 2))
            v = v - r + this._step;
        else
            v -= r;
        return v;
    };
    return SchedulerItem;
}());
exports.SchedulerItem = SchedulerItem;
module.exports = { CalendarItem: CalendarItem, Calendar: Calendar, SchedulerItem: SchedulerItem };
