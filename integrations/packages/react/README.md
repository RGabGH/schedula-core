# schedula-core-react

Official **React** wrapper for [SchedulaCore](https://www.npmjs.com/package/schedula-core) — a fast, lightweight Gantt chart & resource scheduler component.

```bash
npm install schedula-core schedula-core-react
```

`react`, `react-dom` and `schedula-core` are peer dependencies.

## Usage

```tsx
import { SchedulaGantt } from 'schedula-core-react';
import 'schedula-core/css';        // core styles
import 'schedula-core/css/popup';  // task popup
// optional: import 'schedula-core/css/themes';

const data = {
  Resources: [
    { Id: '1', Name: 'Alice', Items: [
      { Id: 't1', Text: 'Design', Offset: 0, Width: 2880, Color1: '#2043D9' },
    ]},
    { Id: '2', Name: 'Bob', Items: [
      { Id: 't2', Text: 'Dev', Offset: 1440, Width: 4320, Color1: '#006BF7' },
    ]},
  ],
};

export default function App() {
  return <SchedulaGantt data={data} view={30} theme="theme-dark" />;
}
```

## Props

| Prop | Type | Maps to |
|---|---|---|
| `data` | `{ Resources: [...] }` | constructor / `setData()` |
| `settings` | `SchedulaSettings` \| object | constructor (re-init on change) |
| `view` | `number` | `setView()` |
| `gStyle` | `'rect' \| 'round-rect' \| 'arrow' \| 'circle'` | `setStyle()` |
| `theme` | `string` | re-init |
| `locale` | `string` | re-init |
| `filter` | `string` | `filterItems()` |
| `editMode` | `boolean` | `enableEditMode()` / `disableEditMode()` |
| `className`, `style` | — | container element |
| `onReady` | `(core) => void` | fired after `init()` |
| `onItemChanged` / `onItemAdded` / `onItemDeleted` | callback | requires a `NotificationPlugin` in `settings.plugins` |

## Imperative access

```tsx
const ref = useRef(null);
<SchedulaGantt ref={ref} data={data} />;
// later:
ref.current?.getInstance()?.setView(60);
```

## PRO plugins

The wrapper never bundles PRO plugins — pass instances through `settings.plugins`:

```tsx
const settings = new SchedulaSettings();
settings.licenseKey = 'SCHED-XXXXX-XXXXX-XXXXX';
settings.plugins = [new DragDropPlugin(), new LinksPlugin(), new NotificationPlugin()];
<SchedulaGantt data={data} settings={settings} editMode />;
```

MIT © Raffaele Gabrielli
