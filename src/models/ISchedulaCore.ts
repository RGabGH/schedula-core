import { SchedulaCalendar } from "./SchedulaCalendar.js";
import { SchedulaSettings } from "./SchedulaSettings.js";

export interface ISchedulaCore {
    data: any;
    settings: SchedulaSettings;
    headerHeight: number;
    calendar: SchedulaCalendar | null;
}
