# Changelog

All notable changes to SchedulaCore are documented here.
Features marked **(PRO)** require a commercial license key.

---

## [1.2.0] — 2026-04-19

### Added
- **`onItemResizing` notification hook** **(PRO)** — fires on every mousemove during a resize operation,
  passing item data, current width in minutes (snapped to `gridStep`), and SVG element.
  Enables live feedback (e.g. duration tooltip) via `window.SchedulaHandlers.onItemResizing`.
- **`enableEditMode()` / `disableEditMode()`** **(PRO)** — toggle move and resize interactivity
  at runtime without a full redraw. Adds/removes resize handles and `draggable` class on all
  rendered items. Logs a warning if called without a valid PRO license key.

---

## [1.1.0] — 2026-03-29

### Added
- **Incremental update API** **(PRO)** — new public methods for real-time data updates without full refresh:
  - `addItem(resourceId, item)` — add a single item and render it
  - `deleteItem(resourceId, itemId)` — remove from data model and DOM
  - `updateItem(resourceId, itemId, changes)` — partial merge and re-render
  - `transferItem(itemId, fromResourceId, toResourceId, changes?)` — move item between resources
  - `mergeData({added[], updated[], removed[]})` — bulk operations in one pass
- `drawBoxElements` setting — allows disabling per-cell background rects for scenarios where
  capacity visualization is not needed (e.g. hotel mode). Reduces DOM nodes by ~90%.
- `popupProvider` **(PRO)** — custom popup template support, enabling domain-specific popup plugins.
- Viewport culling — items outside the visible time range are skipped during rendering.
- `locale` setting — BCP 47 locale tag for date formatting in the header (e.g. `'it-IT'`, `'en-US'`).

### Changed
- `DefaultPopupPlugin` — effort and duration spin buttons now enforce `gridStep` as minimum value.
  Manually typed values below `gridStep` are clamped on save.
- `DefaultPopupPlugin` is now registered automatically if no custom popup is provided.
  No need to add it to `settings.plugins`.

### Fixed
- **Performance regression on view change** — event listeners were accumulating on every `setView()`
  call (800+ per refresh). Replaced per-element listeners with event delegation on both background
  grid and item container. Added one-time binding flags on splitBar and shifters.
- **Rendering performance** — `drawBackGroud` and `drawItems` now use `DocumentFragment` for batch
  DOM insertion instead of per-element append.
- Removed stray `console.log` calls in `drawBackGroud` loop and `shift()` method.
- Fixed double-append bug on vertical grid lines in `drawBackGroud`.
- Holiday calendar edge case fix.
- `setView()` bug fix — view change now redraws correctly.

---

## [1.0.1] — 2026-03-12

### Changed
- `NotificationPlugin` — all event callbacks and logging moved out of the plugin into an external
  `notification-handlers.js` file. Users customize behaviour by editing that file only; the plugin
  itself emits nothing to the console and is fully obfuscated.
- Added `window.SchedulaHandlers` dispatch pattern: the plugin resolves each callback by checking
  `window.SchedulaHandlers` first, then falls back to instance methods for backward compatibility.
- `notification-plugin` is now renamed to `.min.js` and obfuscated like all other bundles.
- Build script updated to copy `notification-handlers.js` to both `dist/js/` and `public/js/`.

---

## [1.0.0] — 2026-03-10

First public release on GitHub (MIT core + PRO bundle).

### Added
- Plugin architecture (`ISchedulaPlugin`) — modular, extensible design
- `DefaultPopupPlugin` — built-in task detail popup (General / Data tabs)
- `NotificationPlugin` — event callbacks via `window.SchedulaHandlers`
- `ContextMenuPlugin` **(PRO)** — fully customizable right-click menus via `ContextMenuConfig`
- `EventsPlugin` **(PRO)** — milestones and events on the timeline
- `IconsPlugin` **(PRO)** — SVG icon rendering on resources and items
- IIFE bundle — drop-in `<script>` tag, no build step required
- TypeScript source with full type declarations
- Free MIT bundle (`schedula-core.min.js`) + obfuscated PRO bundle (`schedula-core-pro.min.js`)
- GitHub Pages live demo

---

## [0.9.0] — 2025-11-14

### Added
- Per-resource calendars **(PRO)** — each resource can have its own working schedule
- Calendar exceptions **(PRO)** — specific days override the base calendar (holidays, shutdowns)
- `CalendarPlugin` **(PRO)** integration with `DragDropPlugin` — drag respects working hours
- `Effort` field on items — net working minutes; `Width` calculated automatically from calendar

---

## [0.8.0] — 2025-07-03

### Added
- `DragDropPlugin` **(PRO)** — drag items across resources and time slots
- `LinksPlugin` **(PRO)** — dependency arrows drawn between tasks (FS relationships)
- Resize handles **(PRO)** — items resizable by dragging the right edge
- `gridStep` setting — snap-to-grid in minutes

### Fixed
- Link arrows redrawn correctly after drag operations

---

## [0.7.0] — 2025-03-21

### Added
- `CalendarPlugin` **(PRO)** — working day rules, non-working day highlighting
- `hilightSunday` setting — visual highlight for weekends
- Calendar-aware duration: effort vs elapsed time distinction introduced

---

## [0.6.0] — 2024-11-08

### Added
- Completion percentage (`Completion`) displayed as fill inside items
- Color picker in popup — `Color1` editable directly from UI
- Custom data fields (`data` object) shown in popup **Data** tab
- Draggable popup — user can reposition anywhere on screen

### Changed
- Popup redesigned with tabbed layout (General / Data)

---

## [0.5.0] — 2024-09-17

### Added
- `DefaultPopupPlugin` — click any item to open detail popup
- Item description field (`Description`)
- Resource grouping — `Group` field on resources
- Group filter buttons — toggle visibility by group
- Text search (`filterItems`) — filter resources and items by keyword

---

## [0.4.0] — 2024-07-22

### Added
- Multiple item styles: `rect`, `round-rect`, `arrow`, `circle`
- `setStyle()` method — switch shape at runtime
- Themes: `theme-dark`, `theme-blue`, `theme-soft`
- CSS variable-based theming for easy customization

---

## [0.3.0] — 2024-05-06

### Added
- CSS transition animations on item render and update
- `animation` setting to toggle transitions
- `setView(n)` — dynamic zoom, changes visible day range
- `setData(data)` — replace dataset at runtime without page reload

---

## [0.2.0] — 2024-03-19

### Added
- Progress bar rendering inside items (completion fill)
- Item text label rendering with overflow clipping
- `resourceHeight` and `resourceWidth` settings
- Horizontal scroll on the timeline grid

### Changed
- Rendering engine moved from absolute positioning to SVG-based layout for precision

---

## [0.1.0] — 2024-01-11

### Added
- Initial SVG template infrastructure — timeline grid, resource rows, item shapes
- Core rendering loop: `init()`, `refresh()`
- `SchedulaCore` constructor with `elementId`, `data`, `settings`
- `SchedulaSettings` configuration object
- `Offset` and `Width` fields for item positioning (minutes from reference date)
- Basic `Resources` / `Items` data model
