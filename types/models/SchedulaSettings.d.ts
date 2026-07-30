/**
 * SchedulaCore PRO
 *
 * @file    src/models/SchedulaSettings.ts
 * @version 1.0.1
 * @author  RGab <gabriraf@gmail.com>
 */
import { ITaskPopup } from './ITaskPopup.js';
import { ISchedulaPlugin } from './ISchedulaPlugin.js';
export declare class SchedulaSettings {
    splitBarToggleButtons: boolean;
    resHeaderText: string;
    footerHeight: number;
    storeData: boolean;
    animation: boolean;
    canMoveItems: boolean;
    canResizeItems: boolean;
    viewWeeks: boolean;
    viewInfoElements: boolean;
    viewInfo: boolean;
    checkInterferences: boolean;
    shiftItems: boolean;
    calcEffort: boolean;
    optimizeStart: boolean;
    roundRectRadius: number;
    resourceHeight: number;
    resourceWidth: number;
    resourceImages: boolean;
    resourceChange: boolean;
    resCollapsedWidth: number;
    splitBarinitPos: number;
    infoElementSize: number;
    resRoundRect: number;
    resPadding: number;
    roundRect: number;
    progressBarPattern: boolean;
    resUnitsView: number;
    timeUnitsView: number;
    timeUnitVal: number;
    gridStep: number;
    gridOffset: number;
    timeUnitsCount: number;
    timeWidth: number;
    timeElementHeight: number;
    monthBoxHeight: number;
    weekBoxHeight: number;
    infoElementHeight: number;
    viewMonthLogo: boolean;
    logoTitle: string;
    splitterWidth: number;
    sidebarMaxWidth: number;
    sidebarMinWidth: number;
    date: Date;
    groupFilter: number;
    hilightSunday: boolean;
    /**
     * Enables vertical scrolling of resource rows/items with a fixed header.
     * When false (default) the component keeps the legacy behaviour: the SVG grows
     * to its full content height and scrolling is handled natively by the page.
     * When true, the viewport is capped (see `height`) and the rows/items scroll
     * vertically via the mouse wheel while the header stays fixed.
     */
    verticalScroll: boolean;
    /**
     * Visible height (in px) of the scheduler viewport, used only when
     * `verticalScroll` is true. When the total content (header + resources) is
     * taller than this value, the rows/items scroll vertically.
     * 0 (default) = auto: use the container's bounded CSS height as the viewport.
     */
    height: number;
    /** Multiplier applied to the mouse-wheel delta when scrolling vertically. */
    verticalScrollStep: number;
    /**
     * If true, clicking a day cell in the header switches to Day view (redraw).
     * When false, day cells are neither clickable nor highlighted on hover.
     * Note: the external `timeMouseClick` callback still fires regardless of this setting.
     */
    canClickDays: boolean;
    /**
     * If true, clicking a week box in the header switches to Week view (redraw).
     * When false, week boxes are neither clickable nor highlighted on hover.
     */
    canClickWeeks: boolean;
    /**
     * If true, clicking a month box in the header switches to Month view (redraw).
     * When false, month boxes are neither clickable nor highlighted on hover.
     */
    canClickMonths: boolean;
    logo: string;
    dropEnable: boolean;
    itemsLinks: boolean;
    drawLinks: boolean;
    linkSpline: boolean;
    itemsPadding: number;
    itemsText: boolean;
    itemTextOffestX: number;
    itemTextOffestY: number;
    itemTextFont: string;
    itemTextSize: string;
    gStyle: string;
    arrowSize: number;
    perfectMatch: boolean;
    viewYear: boolean;
    viewShifters: boolean;
    shifterStep: number;
    /**
     * How many time units from the edge of the loaded range `nearStart` / `nearEnd` turn on
     * in the shift notification (`schedulashift` event / `onShiftChanged`). Use it to tune
     * when the consumer should pre-load the next data window.
     * `null` (default) = one full viewport (`timeUnitsView`).
     * Note: `nearEnd` fires *before* the edge on purpose — the shift is clamped at the end,
     * so waiting for `atEnd` means the user is already stuck against the wall.
     */
    shiftPreloadThreshold: number | null;
    viewEvents: boolean;
    viewEventExtended: boolean;
    canMoveEvents: boolean;
    viewStars: boolean;
    /**
     * Fill direction of proportional event bars (events carrying `Percent`, 0-100):
     *   'sxdx'   — left to right (horizontal, legacy behaviour)
     *   'dxsx'   — right to left (horizontal, anchored to the right edge)
     *   'updown' — top to bottom (vertical, anchored to the top of the strip)
     *   'downup' — bottom to top (vertical, anchored to the bottom of the strip)
     * `null` (default) keeps the legacy left-to-right fill. Events without `Percent`
     * always fill the whole cell, whatever the direction.
     */
    eventFillDirection: 'sxdx' | 'dxsx' | 'updown' | 'downup' | null;
    progressBar: boolean;
    progressBarAnimation: boolean;
    drawBoxElements: boolean;
    /**
     * Enables click-to-select on grid cells (`rect.box-element`). When true, clicking a
     * cell toggles the `selected` CSS class on it (style it via `.box-element.selected`)
     * and the selection is preserved across redraws. Read it back with
     * `getSelectedBoxElements()` — each entry carries the resource Id and the day.
     * Default `false`, so existing behaviour is unchanged; the `gridMouseClick`
     * callback still fires regardless of this setting.
     */
    canSelectBoxElements: boolean;
    theme: string;
    template: string;
    /**
     * BCP 47 locale tag used for date formatting in the header (e.g. 'en-US', 'it-IT').
     * Defaults to undefined, which uses the browser's locale.
     */
    locale: string | undefined;
    /**
     * PRO license key. Required to enable custom popup providers (popupProvider).
     * Free/open-source users cannot inject a custom popup — the built-in DefaultPopupPlugin
     * is always used when no valid licenseKey is present.
     */
    licenseKey?: string;
    /**
     * Optional custom popup provider for task items.
     * Requires a valid licenseKey — ignored silently for free users.
     * The provider must implement the `ITaskPopup` interface.
     */
    popupProvider?: ITaskPopup;
    /**
     * List of plugins to register with the core at init() time.
     * Each plugin must implement `ISchedulaPlugin`.
     * PRO plugins (DragDropPlugin, LinksPlugin, EventsPlugin) go here.
     *
     * @example
     * ```typescript
     * settings.plugins = [new DragDropPlugin(), new LinksPlugin()];
     * ```
     */
    plugins: ISchedulaPlugin[];
    /**
     * If true, enables popup functionality when clicking on an item.
     * The actual popup shown depends on the registered plugins or popupProvider.
     */
    enablePopup: boolean;
}
