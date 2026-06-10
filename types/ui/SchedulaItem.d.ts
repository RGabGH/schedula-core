/**
 * SchedulaCore PRO
 *
 * @file    src/ui/SchedulaItem.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
import { ISchedulaCore } from "../models/ISchedulaCore.js";
import { SchedulaCalendar } from "../models/SchedulaCalendar.js";
export declare class SchedulaItemData {
    From: number;
    Effort: number;
    Duration: number;
    ControlBit: boolean;
}
export declare class SchedulaItem {
    Duration: number;
    ControlBit: boolean;
    private _element;
    private _settings;
    private _resource;
    private _scheduler;
    private _width;
    private _height;
    private _from;
    private _to;
    private _offset;
    private _effort;
    private _data;
    private _x;
    private _y;
    private _w;
    private _calendar;
    private _id;
    constructor(scheduler: ISchedulaCore, itemData: any, calendar?: SchedulaCalendar);
    get Id(): string;
    /** Resource Id string used by SchedulaCalendar.getCapacity for per-resource rules */
    get ResourceId(): string | undefined;
    get Resource(): number;
    set Resource(value: number);
    get From(): number;
    set From(value: number);
    get Offset(): number;
    set Offset(value: number);
    get To(): number;
    get Width(): number;
    set Width(value: number);
    get W(): number;
    set W(value: number);
    get X(): number;
    set X(value: number);
    get Y(): number;
    set Y(value: number);
    get Effort(): number;
    set Effort(value: number);
    private moveTo;
    private moveAnimatedTo;
    private setWidth;
    private setAnimatedWidth;
    private getModulo;
    private calcFrom;
    private calcOffset;
    private convertOffsetToX;
    private convertXToOffset;
    private convertWToTicks;
    checkInterference(): boolean;
}
