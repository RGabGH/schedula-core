# schedula-core-angular

Official **Angular** wrapper for [SchedulaCore](https://www.npmjs.com/package/schedula-core) — a fast, lightweight Gantt chart & resource scheduler component.

```bash
npm install schedula-core schedula-core-angular
```

`@angular/core`, `@angular/common` and `schedula-core` are peer dependencies.

## Setup

Add the core styles globally (e.g. in `angular.json` `styles[]` or a global `styles.css`):

```css
@import 'schedula-core/css';
@import 'schedula-core/css/popup';
/* optional */ @import 'schedula-core/css/themes';
```

## Usage (standalone component)

```ts
import { Component } from '@angular/core';
import { SchedulaGanttComponent } from 'schedula-core-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SchedulaGanttComponent],
  template: `<schedula-gantt [data]="data" theme="theme-dark" [view]="30"></schedula-gantt>`,
})
export class AppComponent {
  data = {
    Resources: [
      { Id: '1', Name: 'Alice', Items: [
        { Id: 't1', Text: 'Design', Offset: 0, Width: 2880, Color1: '#2043D9' },
      ]},
    ],
  };
}
```

## Inputs

| Input | Type | Maps to |
|---|---|---|
| `data` | `{ Resources: [...] }` | constructor / `setData()` |
| `settings` | `SchedulaSettings` \| object | constructor (re-init on change) |
| `view` | `number` | `setView()` |
| `gStyle` | `'rect' \| 'round-rect' \| 'arrow' \| 'circle'` | `setStyle()` |
| `theme` | `string` | re-init |
| `locale` | `string` | re-init |
| `filter` | `string` | `filterItems()` |
| `editMode` | `boolean` | `enableEditMode()` / `disableEditMode()` |

## Outputs

| Output | Payload | Notes |
|---|---|---|
| `ready` | `core` | fired after `init()` |
| `itemChanged` | `{ item, element? }` | requires a `NotificationPlugin` in `settings.plugins` |
| `itemAdded` / `itemDeleted` | `item` | requires a `NotificationPlugin` |

## Imperative access

```ts
@ViewChild(SchedulaGanttComponent) gantt!: SchedulaGanttComponent;
// later:
this.gantt.getInstance()?.setView(60);
```

## Build

```bash
npm install
npm run build   # ng-packagr → dist/ (Angular Package Format)
```

MIT © Raffaele Gabrielli
