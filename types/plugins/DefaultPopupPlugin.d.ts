/**
 * SchedulaCore PRO
 *
 * @file    src/plugins/DefaultPopupPlugin.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
import { ISchedulaPlugin } from '../models/ISchedulaPlugin.js';
import { ITaskPopup } from '../models/ITaskPopup.js';
/**
 * DefaultPopupPlugin — the single built-in popup for both Core and PRO.
 *
 * Features:
 * - Branded header (customise via `brandColor`)
 * - General tab: Text, Description, From/To (read-only), Color picker, Completion %, Reference
 * - Data tab: custom key/value pairs from `item.data` (read-only rows)
 * - Draggable popup
 * - Live refresh during drag/resize (via `refreshItem`)
 *
 * PRO customers who need a fully custom popup can implement `ITaskPopup` and
 * assign it to `settings.popupProvider` together with a valid `settings.licenseKey`.
 */
export declare class DefaultPopupPlugin implements ISchedulaPlugin, ITaskPopup {
    readonly name = "defaultpopup";
    private _core;
    private _currentItem;
    /**
     * Custom brand color used in the popup header. Override as needed.
     */
    brandColor: string;
    init(core: any): void;
    destroy(): void;
    onItemClick(event: MouseEvent, element: any): void;
    show(item: any, event: MouseEvent, scheduler: any): void;
    refreshItem(item: any): void;
    hide(): void;
    private _ensurePopup;
    private _populatePopup;
    private _applyColor;
    private _wireSpinButtons;
    private _shakePopup;
    private _resolveInterferences;
    private _makePopupDraggable;
}
