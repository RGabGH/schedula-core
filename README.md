# SchedulaCore

A fast, lightweight Gantt/scheduler component for the web. No framework dependencies — works with vanilla JavaScript or any frontend stack.

## Features

- **Resource-based Gantt view** — rows are resources, columns are time
- **Multiple item styles** — `rect`, `round-rect`, `arrow`, `circle`
- **Built-in themes** — Default, Dark, Blue, Soft
- **Calendar-aware scheduling** — effort vs duration distinction, non-working days, custom calendars
- **Resource grouping and filtering** — multi-group toggle, text search
- **Task popup** — click any item to view/edit text, description, color, completion %, custom data fields
- **Draggable popup** — reposition the popup anywhere on screen
- **Plugin architecture** — extend via `ISchedulaPlugin`
- **IIFE bundle** — drop a single `<script>` tag, no build step needed

### PRO features (commercial license)

| Feature | Free | PRO |
|---------|------|-----|
| Drag & drop items | | ✓ |
| Resize items | | ✓ |
| Dependency links | | ✓ |
| Calendar exceptions | | ✓ |
| Context menus (customizable) | | ✓ |
| Notification callbacks | | ✓ |
| Events / milestones | | ✓ |
| Custom popup provider | | ✓ |

---

## Quick start

Download the bundle from [`dist-free/js/schedula-core.min.js`](dist-free/js/schedula-core.min.js) and include it in your page.

```html
<link rel="stylesheet" href="css/schedula-core.css">
<link rel="stylesheet" href="css/scheduler-themes.css">

<div id="scheduler"></div>

<script src="js/schedula-core.min.js"></script>
<script>
    var settings = new SchedulaSettings();
    settings.date = new Date();
    settings.plugins = [new DefaultPopupPlugin()];

    var scheduler = new SchedulaCore("scheduler", myData, settings);
    scheduler.init();
    scheduler.refresh();
</script>
```

---

## Data format

```js
var myData = {
    Resources: [
        {
            Id: "r1",
            Name: "Alice",
            Group: 1,
            Items: [
                {
                    Id: "t1",
                    Text: "Design phase",
                    Description: "UI/UX review",
                    Offset: 1440,    // minutes from settings.date
                    Width: 2880,     // duration in minutes
                    Effort: 960,     // working minutes (calendar-aware)
                    Color1: "#2531B1",
                    Completion: 50
                }
            ]
        }
    ]
};
```

> **`Offset`** — start position in minutes from the `settings.date` reference date.
> **`Width`** — total duration in minutes (includes non-working time).
> **`Effort`** — net working minutes. When a calendar is active, SchedulaCore calculates `Width` from `Effort` automatically.

Items can also carry custom data displayed in the popup **Data** tab:

```js
{
    Id: "t1",
    Text: "Task with custom fields",
    data: {
        "Project": "Alpha",
        "Priority": "High"
    }
}
```

---

## API

### Constructor

```js
var scheduler = new SchedulaCore(elementId, data, settings);
```

| Param | Type | Description |
|-------|------|-------------|
| `elementId` | `string` | ID of the container `<div>` |
| `data` | `object` | Resources and tasks |
| `settings` | `SchedulaSettings` | Optional configuration |

### Methods

| Method | Description |
|--------|-------------|
| `scheduler.init()` | Build the component (call once after construction) |
| `scheduler.refresh()` | Redraw (call after data changes) |
| `scheduler.setData(data)` | Replace all data and redraw |
| `scheduler.setView(n)` | Set visible time units (e.g. `30` = 30-day window) |
| `scheduler.setStyle(style)` | Item shape: `"rect"`, `"round-rect"`, `"arrow"`, `"circle"` |
| `scheduler.filterItems(text)` | Filter items by text (empty string = clear filter) |

---

## Settings

```js
var settings = new SchedulaSettings();

settings.date           = new Date();        // reference start date
settings.canMoveItems   = true;              // allow item movement (PRO: DragDropPlugin)
settings.canResizeItems = false;             // allow item resize (PRO: DragDropPlugin)
settings.drawLinks      = false;             // show dependency links (PRO: LinksPlugin)
settings.gridStep       = 1440;             // snap grid in minutes (1440 = 1 day)
settings.gStyle         = 'round-rect';     // item shape
settings.resourceHeight = 48;               // row height in px
settings.resourceWidth  = 200;              // sidebar width in px
settings.hilightSunday  = true;             // highlight Sundays
settings.animation      = true;             // CSS transitions

settings.plugins        = [new DefaultPopupPlugin()];  // plugin list
settings.licenseKey     = 'YOUR-PRO-KEY';  // PRO only
```

---

## Plugins

Plugins implement `ISchedulaPlugin` and are registered via `settings.plugins`.

```ts
interface ISchedulaPlugin {
    readonly name: string;
    init(core: ISchedulaCore): void;
    destroy(): void;
}
```

**Free:**
- `DefaultPopupPlugin` — tabbed popup with General and Data tabs, draggable, color picker

**PRO (commercial license required):**
- `DragDropPlugin` — drag items across resources and time
- `CalendarPlugin` — working day rules, per-resource calendars, exceptions
- `LinksPlugin` — dependency arrows between tasks
- `EventsPlugin` — milestones and events on the timeline
- `ContextMenuPlugin` — right-click menus (customizable via `ContextMenuConfig`)
- `NotificationPlugin` — callbacks: `onItemChanged`, `onItemAdded`, `onItemDeleted`, `onCalendarChanged`

---

## Themes

Add a class to the scheduler container (or `document.body`) to switch theme:

```js
document.getElementById('scheduler').classList.add('theme-dark');
// or: 'theme-blue', 'theme-soft'
```

---

## Browser support

ES2015+ (Chrome, Firefox, Edge, Safari). IE not supported.

---

## Used in production

SchedulaCore powers real-world scheduling applications across different industries:

| Product | Industry | Notes |
|---------|----------|-------|
| **OVERCORE** | Hotel & hospitality | Booking and room scheduling software |
| **MECCANICA H7** | Manufacturing | Production scheduling for mechanical workshops |
| **[SCHEDULA Planner](https://www.schedulaplanner.com/)** | Manufacturing / ERP | Production planning with ERP integration |

---

## Contact & PRO license

For PRO license inquiries, custom integrations, or support:

📧 **[gabriraf@gmail.com](mailto:gabriraf@gmail.com)**

---

## License

MIT — see [LICENSE](LICENSE).
PRO plugins are distributed under a separate commercial license.
