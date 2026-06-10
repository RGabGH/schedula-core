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
    viewEvents: boolean;
    viewEventExtended: boolean;
    canMoveEvents: boolean;
    viewStars: boolean;
    progressBar: boolean;
    progressBarAnimation: boolean;
    drawBoxElements: boolean;
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
