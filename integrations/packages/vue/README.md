# schedula-core-vue

Official **Vue 3** wrapper for [SchedulaCore](https://www.npmjs.com/package/schedula-core) — a fast, lightweight Gantt chart & resource scheduler component.

```bash
npm install schedula-core schedula-core-vue
```

`vue` and `schedula-core` are peer dependencies.

## Usage

```vue
<script setup>
import { SchedulaGantt } from 'schedula-core-vue';
import 'schedula-core/css';
import 'schedula-core/css/popup';

const data = {
  Resources: [
    { Id: '1', Name: 'Alice', Items: [
      { Id: 't1', Text: 'Design', Offset: 0, Width: 2880, Color1: '#2043D9' },
    ]},
  ],
};
</script>

<template>
  <SchedulaGantt :data="data" :view="30" theme="theme-dark" />
</template>
```

## Props

| Prop | Type | Maps to |
|---|---|---|
| `data` | `{ Resources: [...] }` | constructor / `setData()` |
| `settings` | `SchedulaSettings` \| object | constructor (re-init on change) |
| `view` | `Number` | `setView()` |
| `gStyle` | `'rect' \| 'round-rect' \| 'arrow' \| 'circle'` | `setStyle()` |
| `theme` | `String` | re-init |
| `locale` | `String` | re-init |
| `filter` | `String` | `filterItems()` |
| `editMode` | `Boolean` | `enableEditMode()` / `disableEditMode()` |

## Events

| Event | Payload | Notes |
|---|---|---|
| `ready` | `(core)` | fired after `init()` |
| `item-changed` / `item-added` / `item-deleted` | `(item, …)` | requires a `NotificationPlugin` in `settings.plugins` |

## Imperative access

```vue
<SchedulaGantt ref="gantt" :data="data" />
```
```js
gantt.value.getInstance()?.setView(60);
```

MIT © Raffaele Gabrielli
