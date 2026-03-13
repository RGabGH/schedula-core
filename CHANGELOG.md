# Changelog

All notable changes to SchedulaCore are documented here.

---

## [1.0.0] — 2026-03-10

First public release on GitHub (MIT core + PRO bundle).

### Added
- Plugin architecture (`ISchedulaPlugin`) — modular, extensible design
- `ContextMenuPlugin` — fully customizable right-click menus via `ContextMenuConfig`
- `NotificationPlugin` — event callbacks: `onItemChanged`, `onItemAdded`, `onItemDeleted`, `onCalendarChanged`
- `EventsPlugin` — milestones and events on the timeline
- IIFE bundle — drop-in `<script>` tag, no build step required
- TypeScript source with full type declarations
- Free MIT bundle (`schedula-core.min.js`) + obfuscated PRO bundle (`schedula-core-pro.min.js`)
- GitHub Pages live demo

---

## [0.9.0] — 2025-11-14

### Added
- Per-resource calendars — each resource can have its own working schedule
- Calendar exceptions — specific days override the base calendar (holidays, shutdowns)
- `CalendarPlugin` integration with `DragDropPlugin` — drag respects working hours
- `Effort` field on items — net working minutes; `Width` calculated automatically from calendar

---

## [0.8.0] — 2025-07-03

### Added
- `DragDropPlugin` — drag items across resources and time slots
- `LinksPlugin` — dependency arrows drawn between tasks (FS relationships)
- Resize handles — items resizable by dragging the right edge
- `gridStep` setting — snap-to-grid in minutes

### Fixed
- Link arrows redrawn correctly after drag operations

---

## [0.7.0] — 2025-03-21

### Added
- `CalendarPlugin` — working day rules, non-working day highlighting
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
- CSS variable–based theming for easy customization

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
