import { ISchedulaPlugin } from './ISchedulaPlugin.js';

/**
 * Interface for the Events plugin (PRO feature).
 * Handles rendering of calendar events and info units in the header area.
 */
export interface IEventsPlugin extends ISchedulaPlugin {
    /** Render calendar event markers in the events layer */
    drawEvents(): void;

    /** Render info unit bars in the info layer */
    drawInfoUnits(): void;

    /** Returns the sum of effort for items in a grid box (used for mouseover) */
    getSum(box: SVGSVGElement): number;
}
