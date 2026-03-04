
import { ITaskPopup } from './ITaskPopup.js';
import { ISchedulaPlugin } from './ISchedulaPlugin.js';

export class SchedulaSettings {

    splitBarToggleButtons = true;
    resHeaderText = "";
    footerHeight = 0;
    storeData = true;
    animation = true;
    canMoveItems = true;
    canResizeItems = true;
    viewWeeks = true;
    viewInfoElements = false;
    viewInfo = true;
    checkInterferences = true;
    shiftItems = true;
    calcEffort = true;
    optimizeStart = true;
    roundRectRadius = 2;
    resourceHeight = 48;
    resourceWidth = 200;
    resourceImages = true;
    resourceChange = true;
    resCollapsedWidth = 1000;
    splitBarinitPos = 300;
    infoElementSize = 15;
    resRoundRect = 2;
    resPadding = 2;
    roundRect = 5;
    progressBarPattern = true;


    resUnitsView = 0;
    timeUnitsView = 30; //number of time units shown in a screen
    timeUnitVal = 1440;  //number of minutes in time unit
    gridStep = 1440;
    gridOffset = 0;   //grid step in minutes
    timeUnitsCount = 90; //number of time units view
    timeWidth = 144;    //graphic width of time unit
    timeElementHeight = 15;

    monthBoxHeight = 50;
    weekBoxHeight = 15;
    infoElementHeight = 15;
    viewMonthLogo = true;
    logoTitle = "";
    splitterWidth = 10;
    sidebarMaxWidth = 350;
    sidebarMinWidth = 40;
    date = new Date('2023-09-21');

    groupFilter = 0;
    hilightSunday = true;

    logo = "";

    dropEnable = true;

    itemsLinks = false;
    drawLinks = false;
    linkSpline = true;


    itemsPadding = 3;
    itemsText = true;
    itemTextOffestX = 50;
    itemTextOffestY = 40;
    itemTextFont = "Arial";
    itemTextSize = '30%';
    gStyle = "round-rect";
    arrowSize = 6;
    perfectMatch = false;

    viewYear = true;
    viewShifters = true;
    shifterStep = 10;
    viewEvents = true;
    viewEventExtended = true;
    canMoveEvents = true;
    viewStars = false;

    progressBar = true;
    progressBarAnimation = true;

    icons = "";
    theme = "";
    template = "";
    months = ["Gennaio", "Febbraio", "Marzo",
        "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre",
        "Ottobre", "Novembre", "Dicembre"
    ];

    /**
     * Optional custom popup provider for task items.
     * When set, overrides the built-in popup entirely.
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
    plugins: ISchedulaPlugin[] = [];

}
