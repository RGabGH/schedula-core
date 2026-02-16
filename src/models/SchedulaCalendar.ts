
export class SchedulaCalendarItem {

    private _duration: number = 1440;
    private _denominator: number = 60000;
    private _capacity: number = 0;
    private _step: number = 60;
    private _from: number;
    private _type: string = '';
    private _day: number = -1;
    private _orderIndex: number = 1000;

    constructor() {

        var now = new Date();
        var date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        this._from = Math.trunc(date.getTime() / this._denominator);
        this.type = 'event';
    }


    get capacity() {
        return this._capacity;
    }
    set capacity(val: number) {
        this._capacity = val;
    }
    get day() {
        return this._day;
    }
    set day(val: number) {
        if ((val >= -1) && (val <= 6)) this._day = val;

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

    set duration(value: number) {
        var duration = value;
        duration = this.getModulo(duration);
        if (duration > 0) {

            this._duration = duration;
        }
    }
    set from(value: number) {
        let f = Math.trunc(value / this._denominator);
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
    set to(value: number) {

        let v = Math.trunc(value / this._denominator);

        v = this.getModulo(v);

        if (v > 0 && v > this._from) {
            this._duration = v - this._from;

        }

    }
    set dateFrom(value: string) {
        let dt = value;
        if (!value.includes('T'))
            dt += 'T00:00:00';
        let date = new Date(dt);


        if (date.toString() != 'Invalid Date') {
            this.from = date.getTime();
        }
        else
            console.log(value + ' - Invalid Date')
    }
    private getModulo(value: number) {
        let v = value;
        let r = value % this._step;
        if ((r) > (this._step / 2)) v = v - r + this._step; else v -= r;
        return v;
    }

}

export class SchedulaCalendar {
    private _items: SchedulaCalendarItem[] = [];
    private _capacity: number = 0;
    private _denominator: number = 60000;
    private _reference: number = 1440;
    private _step: number = 15;

    newItem() {

        let item = new SchedulaCalendarItem();
        this._items.push(item);
        return item
    }
    addItem(item) {

        if (item instanceof SchedulaCalendarItem) {
            this._items.push(item);
            return item;
        }
        else return null;

    }
    get items() {
        return this._items;
    }

    get itemCount() {
        return this.items.length
    }

    public calcDuration(item: any) {

        let duration = 0;
        let effort = 0;
        let sum = 0;

        let denom = this._denominator;
        let reference = this._reference;
        let step = this._step;
        let minutes = 0;
        let hours = 0;
        let dayMinTot = 0;

        while (effort < item.Effort) {
            let cursor = item.From + sum;
            let e = 0;
            let dt = new Date(cursor * denom);
            //check rules
            let capacity = this.getCapacity(cursor, dt.getUTCDay());
            minutes = dt.getUTCMinutes();
            hours = dt.getUTCHours();
            dayMinTot = (hours * 60) + minutes;

            if (capacity > 0) {
                //  e=(capacity/reference)*step;  
                if (dayMinTot >= capacity) e = 0;
                else e = step;
            }
            effort += e;
            effort = Math.round(effort * 1000) / 1000;
            sum += step;

        }

        duration = sum;
        if (duration < step) duration = step;

        return duration;
    }

    public calcEffort(item: any) {


        let duration = item.Width;

        let d = 0;
        let effort = 0;

        let denom = this._denominator;
        let reference = this._reference;
        let step = this._step;
        let minutes = 0;
        let hours = 0;
        let dayMinTot = 0;

        while (d < duration) {
            let cursor = item.From + d;
            let e = 0;

            let dt = new Date(cursor * denom);
            minutes = dt.getUTCMinutes();
            hours = dt.getUTCHours();
            dayMinTot = (hours * 60) + minutes;
            //check rules
            let capacity = this.getCapacity(cursor, dt.getUTCDay());

            if (capacity > 0) {
                if (dayMinTot >= capacity) e = 0;
                else e = step;
                //e=(capacity/reference)*step;  


            }
            effort += e;
            effort = Math.ceil(effort * 100) / 100;
            d += step;


        }




        return effort;
    }

    public optimazeStart(item: any) {

        let sum = 0;
        let denom = this._denominator;
        let reference = this._reference;
        let step = this._step;
        let capacity = 0;
        let go = true;
        console.log('optimization start');
        while (go && sum < (reference * 20)) {
            let cursor = item.From + sum;
            let dt = new Date(cursor * denom);
            let minutes = dt.getUTCMinutes();
            let hours = dt.getUTCHours();
            let dayMinTot = (hours * 60) + minutes;
            // console.log(dayMinTot);
            // console.log(cursor+ ' '+denom);
            capacity = this.getCapacity(cursor, dt.getUTCDay());

            if ((capacity == 0) || (dayMinTot >= capacity)) {
                sum += step;
                go = true;
            } else go = false;

            //e=(capacity/reference)*step;  




        }



        return item.From + sum;
    }
    public getCapacity(instant, day) {

        let capacity = this._capacity;

        let dayRuleItem = this.items.filter(item =>
            (item.type == 'rule' && item.day == day) && (item.from <= instant) && (item.to > instant)
        )[0];

        capacity = dayRuleItem ? dayRuleItem.capacity : capacity;

        if (dayRuleItem == undefined) {

            let capacityRuleItem = this.items.filter(item =>
                (item.type == 'rule' && item.day == -1) && (item.from <= instant) && (item.to > instant)
            )[0];
            capacity = capacityRuleItem ? capacityRuleItem.capacity : capacity;
        }
        let calendarItem = this.items.filter(item =>
            (item.type == 'calendar' && item.day == -1) && (item.from <= instant) && (item.to > instant)
        )[0];

        capacity = calendarItem ? calendarItem.capacity : capacity;

        return capacity;
    }
    get reference() {
        return this._reference;
    }
}

export class CalendarMousePos {
    x: number = 0;
    y: number = 0;
    timeOffset: number = 0;
    resourceIndex: number = 0;
    date: Date = new Date();
}
