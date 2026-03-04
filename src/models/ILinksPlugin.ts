import { ISchedulaPlugin } from './ISchedulaPlugin.js';

/**
 * Interface for the Links plugin (PRO feature).
 * Handles creation, rendering and interaction of dependency links between task items.
 */
export interface ILinksPlugin extends ISchedulaPlugin {
    /** Initialize link connection point elements in the SVG */
    initLinks(): void;

    /** Render all link paths based on current data */
    drawLinks(): void;

    /** Remove all rendered link paths from the DOM */
    clearLinks(): void;

    /** Called when user clicks on a link connection point to start/end a link */
    onLinkPointClick(event: MouseEvent): void;

    /** Called during mousemove when action is 'linking' */
    onLinkMouseMove(event: MouseEvent): void;
}
