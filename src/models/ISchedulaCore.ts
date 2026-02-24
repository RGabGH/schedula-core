import { SchedulaCalendar } from "./SchedulaCalendar.js";
import { SchedulaSettings } from "./SchedulaSettings.js";

export interface ISchedulaCore {
    data: any;
    settings: SchedulaSettings;
    headerHeight: number;
    calendar: SchedulaCalendar | null;
    setData(data: any): void;
    setView(num: number): void;
    setStyle(style: string): void;
}
