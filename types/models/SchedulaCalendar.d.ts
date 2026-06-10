/**
 * SchedulaCore PRO
 *
 * @file    src/models/SchedulaCalendar.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
export declare class SchedulaCalendarItem {
    private _duration;
    private _denominator;
    private _capacity;
    private _step;
    private _from;
    private _type;
    private _day;
    private _orderIndex;
    resourceId: string | null;
    constructor();
    get capacity(): number;
    set capacity(val: number);
    get day(): number;
    set day(val: number);
    get dateFrom(): string;
    get dateTo(): Date;
    get duration(): number;
    set duration(value: number);
    set denominator(value: number);
    set from(value: number);
    get from(): number;
    get to(): number;
    set to(value: number);
    set type(value: string);
    get type(): string;
    get orderIndex(): number;
    set dateFrom(value: string);
    private getModulo;
}
export declare class SchedulaCalendar {
    private _items;
    private _capacity;
    private _denominator;
    private _reference;
    private _step;
    newItem(): SchedulaCalendarItem;
    addItem(item: SchedulaCalendarItem): SchedulaCalendarItem | null;
    get items(): SchedulaCalendarItem[];
    get itemCount(): number;
    get reference(): number;
    /**
     * Returns capacity in minutes for the given instant and day-of-week.
     * If resourceId is provided, per-resource rules take precedence over global rules.
     * Filter: item.resourceId == resourceId || item.resourceId == null
     */
    getCapacity(instant: number, day: number, resourceId?: string): number;
    calcDuration(item: any): number;
    calcEffort(item: any): number;
    optimazeStart(item: any): number;
}
export declare class CalendarMousePos {
    x: number;
    y: number;
    timeOffset: number;
    resourceIndex: number;
    date: Date;
}
