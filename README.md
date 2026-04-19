# SchedulaCore

A fast, lightweight Gantt/scheduler component for the web. No framework dependencies — works with vanilla JavaScript or any frontend stack.

![SchedulaCore Blue Theme](images/schedula-core-theme-blue.png)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Free%20Version-38bdf8?style=for-the-badge&logo=github)](https://rgabgh.github.io/schedula-core/)

**[Open live demo](https://rgabgh.github.io/schedula-core/)**

## Features

- **Resource-based Gantt view** — rows are resources, columns are time
- **Multiple item styles** — `rect`, `round-rect`, `arrow`, `circle`
- **Built-in themes** — Default, Dark, Blue, Soft (switchable at runtime)
- **Task popup** — click any item to view/edit (built-in, no configuration needed)
- **Resource grouping and filtering** — multi-group toggle, text search
- **Smooth animations** — animated shifts, transitions and progress bars
- **Event notifications** — intercept every action via `window.SchedulaHandlers`
- **Plugin architecture** — extend via `ISchedulaPlugin`
- **IIFE bundle** — drop a single `<script>` tag, no build step needed

### Free vs PRO

| Feature | Free | PRO |
|---------|------|-----|
| JSON data, themes, animations, popup | ✓ | ✓ |
| Switchable views (zoom) | ✓ | ✓ |
| Event notifications | ✓ | ✓ |
| Customizable settings | ✓ | ✓ |
| Drag & drop items | | ✓ |
| Resize items | | ✓ |
| Edit mode toggle (runtime) | | ✓ |
| Dependency links | | ✓ |
| Calendar exceptions & holidays | | ✓ |
| Context menus (customizable) | | ✓ |
| Events / milestones | | ✓ |
| Resource & item icons | | ✓ |
| Custom popup provider | | ✓ |
| Incremental update API | | ✓ |

---

## Quick start

```html
<link rel="stylesheet" href="css/schedula-core.css">
<div id="scheduler"></div>
<script src="js/schedula-core.min.js"></script>

<script>
    var data = {
        Resources: [
            { Id: "1", Name: "Alice", Items: [
                { Id: "t1", Text: "Design phase", Offset: 0, Width: 2880, Color1: "#2043D9" },
                { Id: "t2", Text: "Development",  Offset: 2880, Width: 4320, Color1: "#006BF7" }
            ]},
            { Id: "2", Name: "Bob", Items: [
                { Id: "t3", Text: "Testing", Offset: 1440, Width: 1440, Color1: "#00AAB5" }
            ]}
        ]
    };

    var settings = new SchedulaSettings();
    settings.date = new Date();

    var scheduler = new SchedulaCore("scheduler", data, settings);
    scheduler.init();
</script>
```

`settings.date` is the reference date for the timeline. Each item's **`Offset`** is the start position in minutes from that date, and **`Width`** is the duration in minutes. The component handles all the rendering — click any item to open the built-in popup.

---

## Data format

### Resources and Items

```js
{
    Resources: [
        {
            Id: "r1",              // unique resource identifier
            Name: "Alice",         // display name
            Group: 1,              // optional: for group filtering
            Items: [ ... ]         // array of scheduled tasks
        }
    ]
}
```

### Item fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Id` | string | yes | Unique identifier |
| `Text` | string | yes | Display title |
| `Offset` | number | yes | Start position (minutes from `settings.date`) |
| `Width` | number | yes | Duration in minutes |
| `Color1` | string | | Hex color (e.g. `"#2043D9"`) |
| `Description` | string | | Second line of text |
| `Completion` | number | | Progress percentage (0-100) |
| `Effort` | number | | Net working minutes (calendar-aware, PRO) |
| `Classes` | string | | CSS classes (space-separated) |
| `Link` | string | | Dependency link to another item's Id (PRO) |
| `Type` | string | | Shape override: `"Arrow"`, `"Circle"`, `"Gantt"` |

> **How positioning works:** `settings.date` is the origin of the timeline (typically today or the start of the planning period). An item with `Offset: 1440` starts 1 day after `settings.date` (1440 minutes = 24 hours). An item with `Width: 2880` lasts 2 days.

---

## API

```js
var scheduler = new SchedulaCore(elementId, data, settings);
scheduler.init();
```

| Method | Description |
|--------|-------------|
| `init()` | Build the component (call once) |
| `refresh()` | Redraw after external data changes |
| `setData(data)` | Replace all data and redraw |
| `setView(n)` | Set visible time units (e.g. `30` = 30-day window) |
| `setStyle(style)` | Item shape: `"rect"`, `"round-rect"`, `"arrow"`, `"circle"` |
| `filterItems(text)` | Filter items by text (empty = clear filter) |

---

## Settings

```js
var settings = new SchedulaSettings();

// Timeline
settings.date           = new Date();    // reference start date
settings.timeUnitsView  = 30;           // visible days
settings.timeUnitVal    = 1440;         // minutes per time unit (1440 = 1 day)
settings.gridStep       = 1440;         // snap grid in minutes

// Appearance
settings.gStyle         = 'round-rect'; // item shape
settings.resourceHeight = 48;           // row height in px
settings.resourceWidth  = 200;          // sidebar width in px
settings.hilightSunday  = true;         // highlight Sundays
settings.animation      = true;         // CSS transitions
settings.locale         = 'en-US';      // date format locale
```

---

## NotificationPlugin

Intercept scheduler events without modifying the component — edit `notification-handlers.js`:

```js
window.SchedulaHandlers = {
    // Return false to cancel the action (veto)
    onBeforeItemChange(item, oldState) { return true; },
    onBeforeItemAdd(item)              { return true; },
    onBeforeItemDelete(item)           { return true; },

    // Post-action hooks
    onItemChanged(item, element) { console.log('changed', item.Id); },
    onItemAdded(item)            { console.log('added', item); },
    onItemDeleted(item)          { console.log('deleted', item.Id); },
    onItemSaved(item)            { console.log('saved', item); },
    onItemResizing(item, widthMinutes, element) { /* PRO: live resize feedback */ },
    onCalendarChanged(rule, action) { console.log(action, rule); },
};
```

Load the plugin before the core bundle:
```html
<script src="js/notification-handlers.js"></script>
<script src="js/schedula-core.min.js"></script>
```

---

## Themes

```js
settings.theme = 'theme-dark';
// or: 'theme-blue', 'theme-soft', '' (default)
```

---

## Browser support

ES2015+ (Chrome, Firefox, Edge, Safari). IE not supported.

---

## Used in production

| Product | Industry | Notes |
|---------|----------|-------|
| **[OVERCORE](https://www.overcore.it/)** | Hotel & hospitality | Booking and room scheduling software |
| **[MECCANICA H7](https://www.meccanicah7.it/)** | Manufacturing | Production scheduling for mechanical workshops |
| **[SCHEDULA Planner](https://www.schedulaplanner.com/)** | Manufacturing / ERP | Production planning with ERP integration |

---

## PRO license

SchedulaCore PRO adds drag & drop, resize, calendar, dependency links, context menus, icons and incremental update API. Per-project licensing — your whole team uses one license, not one per developer.

- **Single Application** — one application, unlimited developers, unlimited deployments
- **OEM** — embed in a product distributed to third parties

Both licenses are perpetual (one-time payment) and include 1 year of updates and support.

Contact for pricing: **[gabriraf@gmail.com](mailto:gabriraf@gmail.com)**

---

## License

MIT — see [LICENSE](LICENSE).
PRO plugins are distributed under a separate commercial license.
