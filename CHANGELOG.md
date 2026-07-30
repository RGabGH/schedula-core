# Changelog

All notable changes to SchedulaCore are documented here.
Features marked **(PRO)** require a commercial license key.

---

## [1.8.2] — 2026-07-18

### Added
- **Selectable grid cells** — new `canSelectBoxElements` setting (default `false`): when enabled, clicking a grid cell toggles the `selected` class on its `rect.box-element`, styled by the new `.box-element.selected` CSS rule. The selection is kept as data, so it survives redraws (view changes, resize, filters). Read it back with `getSelectedBoxElements()`, which returns one entry per selected cell as `{ resourceId, date }` (resource + day), and deselect everything with `clearSelectedBoxElements()`. Every selection change — single toggle or full clear — dispatches a `schedulabox:selection` DOM event (`detail: { resourceId, date, selected, selection }`; `resourceId`/`date` are `null` on a clear). The `gridMouseClick` callback keeps firing regardless of the setting.
- **Event bar fill direction** — new `eventFillDirection` setting controlling how proportional event bars (`Percent`) fill their cell: `'sxdx'` left→right, `'dxsx'` right→left, `'updown'` top→bottom, `'downup'` bottom→top (histogram style). `null` (default) keeps the legacy left→right fill. Events without `Percent` always fill the whole cell.
- **Public shift API + position/end-of-data notification** — the horizontal shift is now driveable and observable, for infinite-scroll-style data loading. New methods `shiftBy(units)` (relative, `+` = forward in time), `shiftToUnit(index)`, `shiftToDate(date)`, `shiftToStart()`, `shiftToEnd()` and `getShiftInfo()`. On every position change and after every redraw the scheduler fires a `schedulashift` DOM event and `NotificationPlugin.onShiftChanged(info)`, coalesced to one notification per burst. The payload reports position (`pos`/`minpos`/`maxpos`), the visible window in **dates** (`firstVisibleDate`/`lastVisibleDate`) and loaded range (`firstLoadedDate`/`lastLoadedDate`), and edge flags — notably `nearEnd`, which fires *before* the clamped edge so the consumer can pre-load in time (threshold configurable via the new `shiftPreloadThreshold` setting, default = one viewport), plus `nextShiftReachesEnd`, `unitsToEnd`, `scrollable` and `direction`.

---

## [1.8.1] — 2026-07-18

### Fixed
- **Antivirus false positive on the PRO bundle** (`JS:Trojan.Formbook`) — removed `control-flow-flattening` and `dead-code-injection` from the PRO obfuscation step. Those inject randomized junk and malware-like control flow that heuristic AV engines flag; string-array obfuscation is kept, so the commercial code stays protected. PRO bundle is also ~56% smaller.
- **Repository URL in the MIT bundle banner** — corrected the placeholder `github.com/tuonome/...` to `github.com/RGabGH/schedula-core`.

### Changed
- **MIT bundles shipped minified, not obfuscated** — `schedula-core.min.js` and `notification-plugin.min.js` are now only minified (esbuild `--minify`). Obfuscation gave the open-source (MIT) bundles no real protection while its patterns caused antivirus false positives; the published package is also much smaller (core `~476 KB → ~114 KB`).

---

## [1.8.0] — 2026-07-18

### Added
- **Proportional event bars** — `EventsPlugin.drawEvents` now honours `event.Percent` (0-100): the marker width is `Percent / 100 × timeWidth`, i.e. the fraction of the day/column the bar fills (clamped to `[0,100]`; falls back to a full column when absent). Enables occupancy-style bars (e.g. green `<70` / yellow `<90` / red `≥90` via `event.Color`).

### Fixed
- **Event markers drawn over the day row instead of their own strip** — the Y position was computed as `monthBoxHeight + timeElementHeight`, which collided with the day row. Events are now placed in the reserved info band just above the day row (`headerHeight − timeElementHeight − infoElementHeight`), correct whether or not the weeks band is shown.
- **Event markers not rendered when the template has no `#scheduler-events` group** — `drawEvents` returned early if the group was missing. It now creates the group on demand (inserted after `#scheduler-header`, outside the vertical-scroll group so it stays fixed), so events render without any template change.

---

## [1.7.0] — 2026-07-16

### Added
- **Context menu on resources** — `ContextMenuPlugin` now supports a fourth context, `resource`, triggered by right-clicking a resource in the sidebar (its row, name, image or icons). New public `resourceMenuItems` array (default: *Edit resource*, *Add task*, *Delete resource*). `delete-resource` is handled internally (removes the resource from the data set and redraws); every resource action also dispatches a `schedularesource:action` DOM event (`detail: { action, label, resourceId, resource }`) and fires `NotificationPlugin.onMenuAction(id, resource, ctx)`, so consumers can implement `edit-resource`, `add-task` or custom actions. Resource rows are now tagged with `class="resource-row"` and `data-res` so the whole row is a reliable right-click target.

---

## [1.6.1] — 2026-07-16

### Fixed
- **Elements pushed outside the component when resizing the window with `verticalScroll` enabled.** With vertical scroll on, the SVG height is pinned to the viewport, so — unlike the legacy (auto-height) mode — it can no longer scale responsively with its width. `resized()` only refreshed the drag/scroll `ratio`, leaving a stale `viewBox` width; the default `preserveAspectRatio` then scaled and offset the content past the component edges. On resize (vertical scroll on), the component now redraws to recompute the width-dependent geometry (`timeWidth`, `viewBox`), preserving the vertical scroll offset and the horizontal shift, with redraws coalesced via `requestAnimationFrame`. Legacy mode (`verticalScroll` off) is unchanged.

---

## [1.6.0] — 2026-07-04

### Added
- **Vertical scrolling with a fixed header** — new `verticalScroll` setting (default `false`, so existing behaviour is unchanged). When enabled, the resource rows and items scroll vertically (mouse wheel) inside a capped viewport while the calendar/month/day header and the resource-column header stay fixed. Companion settings: `height` (viewport height in px; `0` = use the container's bounded CSS height) and `verticalScrollStep` (wheel-delta multiplier).
- **67 new hospitality/booking icons** in `icons.js` (Font Awesome Free *Solid*), e.g. `bed`, `key`, `right-to-bracket`/`right-from-bracket` (check-in/out), `bell-concierge`, `utensils`, `wifi`, `car`, `square-parking`, `plane`, `suitcase-rolling`, `person-swimming`, `dumbbell`, `wheelchair`, `elevator`, `dog`/`paw`, `euro-sign`, `cash-register`, `location-dot`, `phone`, `ban-smoking`, `triangle-exclamation`. Total icons: 164 → 231.
- **`icon_demo.html`** — reference gallery that lists every available icon with its name, reading dynamically from `icons.js` (adding/removing icons there updates the page). Includes name filter, colour/background toggles, and click-to-copy of the icon name.

### Changed
- **Shifter buttons moved inside the component** — the horizontal navigation arrows now render inside the SVG in the header band, vertically centered: the back (`<`) button over the resource column near the left margin, the forward (`>`) button at the right edge of the calendar. Previously they were viewport-fixed overlays.

### Fixed
- **Resource sidebar hidden behind its background** — the resource rows are now painted on top of the opaque `.sb-rbg` background (its CSS `fill: lightgray` overrides the inline transparent fill), so the resource list is always visible.

---

## [1.5.1] — 2026-07-03

### Fixed
- **Regression from 1.5.0: month boxes collapsed to one-day width.** The 1.5.0 timezone fix in `drawMonths` also converted the days-in-month calculation from UTC to local getters, but that calculation relied on a UTC quirk (`new Date(y, m+1, 1).getUTCDate()` returned the last day of the current month only in positive-offset timezones). Under local getters it returned `1`, so every month box spanned a single day. Replaced it with the timezone-safe idiom `new Date(y, m+1, 0).getDate()`, which correctly yields the number of days in the month.

---

## [1.5.0] — 2026-07-03

### Added
- **`canClickDays` / `canClickWeeks` / `canClickMonths` settings** — control whether clicking a day, week or month cell in the header switches the view (redraw). When a flag is `false` the matching cells are no longer clickable and lose both their hover highlight and pointer cursor. All default to `true`, so existing behaviour is unchanged. The external `timeMouseClick` callback still fires for day cells regardless of `canClickDays`.

### Fixed
- **Timezone off-by-one in the month header** — `drawMonths` read UTC date getters (`getUTCDate`/`getUTCMonth`) while the day labels used local getters. In positive-offset timezones (e.g. Europe/Rome) the month box shifted one cell to the right after the first redraw, once `processData` re-normalized the base date to local midnight. Month boxes now use local getters, consistent with the day labels.

---

## [1.4.1] — 2026-06-11

### Changed
- **README** — intro now highlights the official React / Vue / Angular wrappers up front, with npm version badges for each package. Docs-only release (no code changes from 1.4.0).

---

## [1.4.0] — 2026-06-11

### Added
- **Official framework wrappers** — three thin, typed, MIT-licensed component packages published alongside the core:
  - [`schedula-core-react`](https://www.npmjs.com/package/schedula-core-react) (React 17+)
  - [`schedula-core-vue`](https://www.npmjs.com/package/schedula-core-vue) (Vue 3)
  - [`schedula-core-angular`](https://www.npmjs.com/package/schedula-core-angular) (Angular 16+)

  All expose the same declarative surface (`data`, `settings`, `view`, `gStyle`, `theme`, `locale`, `filter`, `editMode` + item events + imperative `getInstance()`). `schedula-core` and the framework are peer dependencies, so each wrapper works with both the Free and PRO editions.
- **Runnable demo apps** for React, Vue and Angular (Free edition) under `integrations/examples/`.
- **`exports` map** in `package.json` — clean subpath imports: `import 'schedula-core/css'`, `'schedula-core/css/popup'`, `'schedula-core/css/themes'`, `'schedula-core/data'`, plus conditional `import`/`require`/`types` resolution for modern bundlers.
- **PRO ESM build** (`schedula-core-pro.esm.js`) — lets bundler-based projects `import` PRO plugins instead of relying on the `<script>` global.

### Changed
- `INTEGRATION.md` now leads with the official wrappers for React/Vue/Angular; the manual DOM snippets are kept as a fallback. CDN examples pinned to `@1.4.0`.

---

## [1.3.1] — 2026-06-11

### Changed
- Pricing simplified: removed the standalone "Source Code" tier. PRO is now Single Project / Unlimited Projects / OEM.
- Commercial license (LICENSE-PRO) aligned to the pricing tiers, with a limitation-of-liability clause.

---

## [1.3.0] — 2026-06-10

### Added
- **Published on npm** — install with `npm install schedula-core`.
- **ESM module build** — ships an ES module (`schedula-core.esm.js`) next to the IIFE bundle, so it can be imported in bundler-based projects: `import { SchedulaCore } from 'schedula-core'`.
- **TypeScript type declarations** — bundled `.d.ts` files enable full type-checking and editor autocompletion.
- **Standalone offline demo** — `package-demo.html` runs the free build with no server or build step (double-click to open).

### Changed
- Global `window` assignments are now guarded with a `typeof window` check, so the bundle is safe to import in non-browser (SSR/Node) environments.

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
- Gro