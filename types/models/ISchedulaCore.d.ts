/**
 * SchedulaCore PRO
 *
 * @file    src/models/ISchedulaCore.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
import { SchedulaCalendar } from "./SchedulaCalendar.js";
import { SchedulaSettings } from "./SchedulaSettings.js";
import { ISchedulaPlugin } from "./ISchedulaPlugin.js";
export interface ISchedulaCore {
    data: any;
    settings: SchedulaSettings;
    headerHeight: number;
    calendar: SchedulaCalendar | null;
    setData(data: any): void;
    setView(num: number): void;
    setStyle(style: string): void;
    registerPlugin(plugin: ISchedulaPlugin): void;
    getPlugin<T extends ISchedulaPlugin>(name: string): T | null;
    getCalendarForResource(resourceId: string): SchedulaCalendar | null;
}
