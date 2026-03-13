/**
 * SchedulaCore PRO
 *
 * @file    public/src/models/ITaskPopup.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
/**
 * Interface for a custom task popup provider.
 * Implement this interface and assign an instance to `SchedulaSettings.popupProvider`
 * to replace the built-in task popup with your own.
 *
 * @example
 * ```typescript
 * class MyPopup implements ITaskPopup {
 *     show(item: any, event: MouseEvent, scheduler: any) {
 *         // show your custom popup with item data
 *     }
 *     hide() {
 *         // hide your custom popup
 *     }
 * }
 * const settings = new SchedulaSettings();
 * settings.popupProvider = new MyPopup();
 * ```
 */
export interface ITaskPopup {
    /**
     * Called when a task item is clicked.
     * @param item     The task data object (the full item from the scheduler data)
     * @param event    The original MouseEvent that triggered the click
     * @param scheduler  The SchedulaCore instance, useful for calling `scheduler.init()` after edits
     */
    show(item: any, event: MouseEvent, scheduler: any): void;

    /**
     * Called to hide/close the popup (e.g. on Escape or external close triggers).
     */
    hide(): void;

    /**
     * Called when the item is modified externally (e.g. dragged or resized).
     * Provides a chance for the popup to update its UI with the live data.
     * @param item The updated task data object
     */
    refreshItem?(item: any): void;
}
