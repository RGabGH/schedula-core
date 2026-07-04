/**
 * SchedulaCore PRO
 *
 * @file    src/SchedulaCore.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
import { SchedulaSettings } from './models/SchedulaSettings.js';
import { SchedulaCalendar, CalendarMousePos } from './models/SchedulaCalendar.js';
import { ISchedulaCore } from './models/ISchedulaCore.js';
import { mousePos } from './models/SchedulaView.js';
import { ISchedulaPlugin } from './models/ISchedulaPlugin.js';
export declare class SchedulaCore implements ISchedulaCore {
    private scheduler_id;
    headerHeight: number;
    data: any;
    settings: SchedulaSettings;
    private filteredResources;
    private resourceFilteredCount;
    private splitBarPos;
    private calendarMousePos;
    private mpos;
    private schedulerMousePos;
    private action;
    private linkPoint;
    private linkId;
    private element;
    private actionMemoPos;
    private ratio;
    private zoom;
    /** Current vertical scroll offset (<= 0). Applied to #scheduler-vscroll and #scheduler-resources-scroll. */
    private scrollY;
    /** Most-negative allowed scrollY for the current content/viewport (0 = no vertical scroll). */
    private maxScrollY;
    private schedulerSVG;
    private schedulerItems;
    private schedulerContainer;
    private splitBar;
    private template;
    calendar: SchedulaCalendar | null;
    private _clickStart;
    private itemConnPoint1;
    private itemConnPoint2;
    private itemConnPoint3;
    private itemConnPoint4;
    private connLine;
    private currentView;
    /** Plugin registry — maps plugin name to plugin instance */
    private _plugins;
    get schedulerSVGElement(): SVGSVGElement | null;
    get schedulerItemsElement(): HTMLElement | null;
    get schedulerId(): string;
    get currentAction(): string;
    set currentAction(val: string);
    get mousePosition(): mousePos;
    get actionMemoPosition(): mousePos;
    set actionMemoPosition(val: mousePos);
    get calendarPosition(): CalendarMousePos;
    get viewRatio(): number;
    get splitBarElement(): HTMLElement | null;
    get splitBarCurrentPos(): number;
    set splitBarCurrentPos(val: number);
    get currentElement(): any;
    set currentElement(val: any);
    get linkPointPos(): mousePos;
    set linkPointPos(val: mousePos);
    get currentLinkId(): string;
    set currentLinkId(val: string);
    get connPointElements(): {
        p1: SVGCircleElement | null;
        p2: SVGCircleElement | null;
        p3: SVGCircleElement | null;
        p4: SVGCircleElement | null;
        line: SVGLineElement | null;
    };
    set connPointElements(val: {
        p1: SVGCircleElement | null;
        p2: SVGCircleElement | null;
        p3: SVGCircleElement | null;
        p4: SVGCircleElement | null;
        line: SVGLineElement | null;
    });
    constructor(scheduler: string, jsonData: any, settings?: SchedulaSettings);
    /** Plugin names that require a valid PRO license to activate. */
    private static readonly _proPlugins;
    registerPlugin(plugin: ISchedulaPlugin): void;
    getPlugin<T extends ISchedulaPlugin>(name: string): T | null;
    private initCalendar;
    getCalendarForResource(_resourceId: string): SchedulaCalendar | null;
    setData(data: any): void;
    setView(num: number): void;
    setStyle(style: string): void;
    /**
     * Enables edit mode: adds resize handles and draggable class to all rendered items.
     * Call this when the user acquires the edit lock at runtime, so that items
     * rendered with canMoveItems/canResizeItems = false gain interactivity
     * without a full redraw.
     */
    enableEditMode(): void;
    /**
     * Disables edit mode: removes resize handles and draggable class from all rendered items.
     * Call this when the user releases the edit lock.
     */
    disableEditMode(): void;
    toggleCalendarView(): boolean;
    private clearGroupSafe;
    private refresh;
    private eventsSetup;
    init(): void;
    private dropEventManagement;
    private resized;
    private draw;
    private svgMouseUp;
    removeItem(id: string): void;
    private handleMouseMove;
    private escapePressed;
    private getModulo;
    private moveItem;
    private linkItem;
    private resizeItem;
    private splitArea;
    private getTranslateValues;
    private processData;
    private storeData;
    private drawBackGroud;
    filterItems(filter: string): void;
    private drawResBg;
    private initSplitter;
    private drawResources;
    private _itemFragment;
    private drawItems;
    private _findItemData;
    private _ensureItemDelegation;
    /**
     * Refreshes a single item visually without redrawing the whole SVG.
     * @param item The item data object to refresh
     */
    refreshItem(item: any): void;
    /**
     * Add a new item to a resource and render it without full refresh.
     * @param resourceId - The Id of the target resource
     * @param item - The item data object (must have Id, Offset, Width)
     */
    addItem(resourceId: string, item: any): void;
    /**
     * Remove an item from data model and DOM without full refresh.
     * @param resourceId - The Id of the resource containing the item
     * @param itemId - The Id of the item to remove
     */
    deleteItem(resourceId: string, itemId: string): void;
    /**
     * Update an existing item with partial changes and re-render it.
     * @param resourceId - The Id of the resource containing the item
     * @param itemId - The Id of the item to update
     * @param changes - Partial object with fields to merge (e.g. {Offset: 1440, Color1: '#f00'})
     */
    updateItem(resourceId: string, itemId: string, changes: any): void;
    /**
     * Transfer an item from one resource to another without full refresh.
     * @param itemId - The Id of the item to transfer
     * @param fromResourceId - Current resource Id
     * @param toResourceId - Target resource Id
     * @param changes - Optional partial updates (e.g. new Offset)
     */
    transferItem(itemId: string, fromResourceId: string, toResourceId: string, changes?: any): void;
    /**
     * Bulk merge: apply multiple add/update/remove operations in one pass.
     * @param delta - { added?: {resourceId, item}[], updated?: {resourceId, itemId, changes}[], removed?: {resourceId, itemId}[] }
     */
    mergeData(delta: {
        added?: any[];
        updated?: any[];
        removed?: any[];
    }): void;
    private _processItem;
    private _findResourceIndex;
    private _refreshLinks;
    private _notifyPlugins;
    private clearItems;
    drawItem(item: any, resindex: number, mask?: boolean): void;
    private initLinks;
    private drawLinks;
    private clearLinks;
    private hideLinkpoints;
    private showLinkpoints;
    private splitterBarMouseDown;
    /**
     * Creates/updates the clip band applied to #scheduler-vclip so vertically
     * scrolled content is clipped to [headerHeight .. viewport bottom] and never
     * overlaps the fixed header. The band is defined in the (X-shifted, non-Y)
     * coordinate space of #scheduler-vclip, so it stays fixed while the inner
     * #scheduler-vscroll translates in Y.
     */
    private updateVScrollClip;
    /** Applies the current vertical scroll offset to content and resource rows. */
    private applyVScroll;
    /** Mouse-wheel vertical scrolling (header stays fixed). */
    private handleWheel;
    private shift;
    private itemMouseDown;
    private itemMouseUp;
    private itemClick;
    private ensurePopup;
    private makePopupDraggable;
    private itemOver;
    private itemOut;
    private dropOnElement;
    private dragOverElement;
    private linkPointClick;
    private clearAction;
    private resetLinkLine;
    private setAction;
    private drawEvents;
    private drawInfoUnits;
    private getSum;
    private pad;
    private switchViewMode;
    private restoreView;
    private restoreShiftPos;
    private resourceClick;
    private drawMonths;
    private drawWeeks;
    private drawTimeUnits;
    getWeekOfYear(date: Date): number;
    getDayOfYear(date: Date): number;
    getTemplate(): void;
    private drawHeader;
}
