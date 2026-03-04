import { ISchedulaPlugin } from './ISchedulaPlugin.js';

/**
 * Interface for the Drag & Drop plugin (PRO feature).
 * Handles interactive moving, resizing, dropping of items,
 * item click/hover, and the built-in popup.
 */
export interface IDragDropPlugin extends ISchedulaPlugin {
    /** Called on SVG mousemove when an action (moving/sizing) is active */
    onMouseMove(event: MouseEvent): void;

    /** Called on SVG mouseup to finalize move/resize and persist changes */
    onMouseUp(event: MouseEvent): void;

    /** Called when the user presses mousedown on an item rectangle */
    onItemMouseDown(event: MouseEvent, data: any): void;

    /** Called when the user releases the mouse on an item */
    onItemMouseUp(event: MouseEvent, data: any): void;

    /** Called on item click (after distinguishing from drag) */
    onItemClick(event: MouseEvent, element: any): void;

    /** Called when a task/item is dragged from an external element and dropped onto the grid */
    onDrop(event: DragEvent): void;

    /** Called when mouse enters an item element */
    onItemOver(event: MouseEvent, item: any): void;

    /** Called when mouse leaves an item element */
    onItemOut(event: MouseEvent, item: any): void;

    /** Called when Escape key is pressed to cancel the current action */
    onEscape(): void;
}
