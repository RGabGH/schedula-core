# SchedulaCore — Framework Integration Guide

SchedulaCore ships as an IIFE bundle (no build step required). It exposes globals on `window` — making it easy to integrate with any framework.

**Required files:**

```
schedula-core.css          <!-- core styles -->
popup.css                  <!-- task popup styles -->
scheduler-themes.css       <!-- optional: themes (dark, blue, soft) -->
schedula-core.min.js       <!-- free bundle -->
schedula-core-pro.min.js   <!-- PRO bundle (alternative) -->
```

---

## Table of Contents

- [Installation](#installation)
- [Vanilla JavaScript](#vanilla-javascript)
- [React](#react)
- [Angular](#angular)
- [Vue 3](#vue-3)
- [Blazor (Server / WASM)](#blazor)
- [Next.js](#nextjs)
- [Nuxt 3](#nuxt-3)
- [Svelte](#svelte)
- [TypeScript Declarations](#typescript-declarations)

---

## Installation

### npm

```bash
npm install schedula-core
```

### Script tag

```html
<link rel="stylesheet" href="schedula-core.css">
<link rel="stylesheet" href="popup.css">
<script src="schedula-core-pro.min.js"></script>
```

### CDN (jsDelivr)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/schedula-core@1.1.1/dist/css/schedula-core.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/schedula-core@1.1.1/dist/css/popup.css">
<script src="https://cdn.jsdelivr.net/npm/schedula-core@1.1.1/dist/js/schedula-core.min.js"></script>
```

> For PRO, replace `schedula-core.min.js` with `schedula-core-pro.min.js`.

---

## Vanilla JavaScript

```html
<link rel="stylesheet" href="schedula-core.css">
<link rel="stylesheet" href="popup.css">
<div id="scheduler"></div>
<script src="schedula-core-pro.min.js"></script>

<script>
  var data = {
    Resources: [
      { Id: "1", Name: "Alice", Items: [
        { Id: "t1", Text: "Design", Offset: 0, Width: 2880, Color1: "#2043D9" }
      ]},
      { Id: "2", Name: "Bob", Items: [
        { Id: "t2", Text: "Dev", Offset: 1440, Width: 4320, Color1: "#006BF7" }
      ]}
    ]
  };

  var settings = new SchedulaSettings();
  settings.date = new Date();

  var scheduler = new SchedulaCore("scheduler", data, settings);
  scheduler.init();
</script>
```

---

## React

SchedulaCore manipulates the DOM directly, so we use a `ref` for the container and initialize in `useEffect`.

### Basic Component

```jsx
// SchedulaGantt.jsx
import { useEffect, useRef } from 'react';

export default function SchedulaGantt({ data, settings }) {
  const containerRef = useRef(null);
  const schedulerRef = useRef(null);

  useEffect(() => {
    // Load CSS (or add <link> tags in index.html)
    const loadCSS = (href) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    };
    loadCSS('/schedula-core.css');
    loadCSS('/popup.css');
  }, []);

  useEffect(() => {
    if (!containerRef.current || !window.SchedulaCore) return;

    const s = settings || new window.SchedulaSettings();
    if (!settings) s.date = new Date();

    schedulerRef.current = new window.SchedulaCore(
      containerRef.current.id,
      data,
      s
    );
    schedulerRef.current.init();

    return () => {
      // Cleanup: clear the container
      if (containerRef.current) containerRef.current.innerHTML = '';
      schedulerRef.current = null;
    };
  }, [data, settings]);

  return <div id="schedula-gantt" ref={containerRef} />;
}
```

### Usage

```jsx
// App.jsx
import SchedulaGantt from './SchedulaGantt';

const data = {
  Resources: [
    { Id: "1", Name: "Alice", Items: [
      { Id: "t1", Text: "Design phase", Offset: 0, Width: 2880, Color1: "#2043D9" }
    ]},
    { Id: "2", Name: "Bob", Items: [
      { Id: "t2", Text: "Development", Offset: 1440, Width: 4320, Color1: "#006BF7" }
    ]}
  ]
};

function App() {
  return <SchedulaGantt data={data} />;
}
```

> **Note:** Add `<script src="/schedula-core-pro.min.js"></script>` in your `public/index.html` (or load it dynamically).

### PRO with Plugins

```jsx
useEffect(() => {
  if (!window.SchedulaCore) return;

  const s = new window.SchedulaSettings();
  s.date = new Date();
  s.licenseKey = 'SCHED-XXXXX-XXXXX-XXXXX';
  s.canMoveItems = true;
  s.canResizeItems = true;
  s.drawLinks = true;
  s.plugins = [
    new window.CalendarPlugin(),
    new window.DragDropPlugin(),
    new window.LinksPlugin(),
    new window.EventsPlugin(),
    new window.ContextMenuPlugin(),
    new window.NotificationPlugin()
  ];

  schedulerRef.current = new window.SchedulaCore('schedula-gantt', data, s);
  schedulerRef.current.init();
}, [data]);
```

### Updating Data

```jsx
// Call setData() when data changes externally
useEffect(() => {
  if (schedulerRef.current) {
    schedulerRef.current.setData(data);
  }
}, [data]);
```

---

## Angular

### Component

```typescript
// schedula-gantt.component.ts
import { Component, Input, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

declare var SchedulaCore: any;
declare var SchedulaSettings: any;

@Component({
  selector: 'app-schedula-gantt',
  template: '<div [id]="elementId"></div>',
  standalone: true
})
export class SchedulaGanttComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() data: any;
  @Input() settings: any;

  elementId = 'schedula-gantt';
  private scheduler: any = null;

  ngAfterViewInit(): void {
    this.initScheduler();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && !changes['data'].firstChange && this.scheduler) {
      this.scheduler.setData(this.data);
    }
  }

  ngOnDestroy(): void {
    const el = document.getElementById(this.elementId);
    if (el) el.innerHTML = '';
    this.scheduler = null;
  }

  private initScheduler(): void {
    const s = this.settings || new SchedulaSettings();
    if (!this.settings) s.date = new Date();

    this.scheduler = new SchedulaCore(this.elementId, this.data, s);
    this.scheduler.init();
  }
}
```

### Setup (angular.json)

Add the scripts and styles to `angular.json`:

```json
{
  "architect": {
    "build": {
      "options": {
        "styles": [
          "node_modules/schedula-core/dist/css/schedula-core.css",
          "node_modules/schedula-core/dist/css/popup.css"
        ],
        "scripts": [
          "node_modules/schedula-core/dist/js/schedula-core-pro.min.js"
        ]
      }
    }
  }
}
```

### Usage

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { SchedulaGanttComponent } from './schedula-gantt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SchedulaGanttComponent],
  template: '<app-schedula-gantt [data]="schedulerData" />'
})
export class AppComponent {
  schedulerData = {
    Resources: [
      { Id: '1', Name: 'Alice', Items: [
        { Id: 't1', Text: 'Design phase', Offset: 0, Width: 2880, Color1: '#2043D9' }
      ]},
      { Id: '2', Name: 'Bob', Items: [
        { Id: 't2', Text: 'Development', Offset: 1440, Width: 4320, Color1: '#006BF7' }
      ]}
    ]
  };
}
```

### PRO with Plugins

```typescript
declare var CalendarPlugin: any;
declare var DragDropPlugin: any;
declare var LinksPlugin: any;
declare var EventsPlugin: any;
declare var ContextMenuPlugin: any;
declare var NotificationPlugin: any;

private initScheduler(): void {
  const s = new SchedulaSettings();
  s.date = new Date();
  s.licenseKey = 'SCHED-XXXXX-XXXXX-XXXXX';
  s.canMoveItems = true;
  s.canResizeItems = true;
  s.drawLinks = true;
  s.plugins = [
    new CalendarPlugin(),
    new DragDropPlugin(),
    new LinksPlugin(),
    new EventsPlugin(),
    new ContextMenuPlugin(),
    new NotificationPlugin()
  ];

  this.scheduler = new SchedulaCore(this.elementId, this.data, s);
  this.scheduler.init();
}
```

---

## Vue 3

### Composable Component

```vue
<!-- SchedulaGantt.vue -->
<template>
  <div :id="elementId"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = defineProps({
  data: { type: Object, required: true },
  settings: { type: Object, default: null }
});

const elementId = 'schedula-gantt';
const scheduler = ref(null);

onMounted(() => {
  const s = props.settings || new window.SchedulaSettings();
  if (!props.settings) s.date = new Date();

  scheduler.value = new window.SchedulaCore(elementId, props.data, s);
  scheduler.value.init();
});

watch(() => props.data, (newData) => {
  if (scheduler.value) {
    scheduler.value.setData(newData);
  }
}, { deep: true });

onUnmounted(() => {
  const el = document.getElementById(elementId);
  if (el) el.innerHTML = '';
  scheduler.value = null;
});
</script>
```

### Setup (index.html)

```html
<link rel="stylesheet" href="/schedula-core.css">
<link rel="stylesheet" href="/popup.css">
<script src="/schedula-core-pro.min.js"></script>
```

Or copy the files into `public/` and reference them from there.

### Usage

```vue
<!-- App.vue -->
<template>
  <SchedulaGantt :data="schedulerData" />
</template>

<script setup>
import { reactive } from 'vue';
import SchedulaGantt from './components/SchedulaGantt.vue';

const schedulerData = reactive({
  Resources: [
    { Id: '1', Name: 'Alice', Items: [
      { Id: 't1', Text: 'Design phase', Offset: 0, Width: 2880, Color1: '#2043D9' }
    ]},
    { Id: '2', Name: 'Bob', Items: [
      { Id: 't2', Text: 'Development', Offset: 1440, Width: 4320, Color1: '#006BF7' }
    ]}
  ]
});
</script>
```

### PRO with Plugins

```javascript
onMounted(() => {
  const s = new window.SchedulaSettings();
  s.date = new Date();
  s.licenseKey = 'SCHED-XXXXX-XXXXX-XXXXX';
  s.canMoveItems = true;
  s.canResizeItems = true;
  s.drawLinks = true;
  s.plugins = [
    new window.CalendarPlugin(),
    new window.DragDropPlugin(),
    new window.LinksPlugin(),
    new window.EventsPlugin(),
    new window.ContextMenuPlugin(),
    new window.NotificationPlugin()
  ];

  scheduler.value = new window.SchedulaCore(elementId, props.data, s);
  scheduler.value.init();
});
```

---

## Blazor

SchedulaCore integrates with Blazor (Server or WebAssembly) via JavaScript interop.

### 1. Add scripts to `_Host.cshtml` or `index.html`

```html
<link rel="stylesheet" href="css/schedula-core.css">
<link rel="stylesheet" href="css/popup.css">
<script src="js/schedula-core-pro.min.js"></script>
<script src="js/schedula-interop.js"></script>
```

### 2. Create the JS interop bridge (`wwwroot/js/schedula-interop.js`)

```javascript
window.schedulaInterop = {
  instance: null,

  init: function (elementId, data, options) {
    var s = new SchedulaSettings();
    s.date = new Date(options.date);
    s.timeUnitsView = options.timeUnitsView || 30;
    s.gStyle = options.gStyle || 'round-rect';
    s.theme = options.theme || '';
    s.locale = options.locale || 'en-US';

    if (options.licenseKey) {
      s.licenseKey = options.licenseKey;
      s.canMoveItems = options.canMoveItems || false;
      s.canResizeItems = options.canResizeItems || false;
      s.drawLinks = options.drawLinks || false;
      s.plugins = [
        new CalendarPlugin(),
        new DragDropPlugin(),
        new LinksPlugin(),
        new EventsPlugin(),
        new ContextMenuPlugin(),
        new NotificationPlugin()
      ];
    }

    this.instance = new SchedulaCore(elementId, data, s);
    this.instance.init();
  },

  setData: function (data) {
    if (this.instance) this.instance.setData(data);
  },

  setView: function (days) {
    if (this.instance) this.instance.setView(days);
  },

  setStyle: function (style) {
    if (this.instance) this.instance.setStyle(style);
  },

  filterItems: function (text) {
    if (this.instance) this.instance.filterItems(text);
  },

  enableEditMode: function () {
    if (this.instance) this.instance.enableEditMode();
  },

  disableEditMode: function () {
    if (this.instance) this.instance.disableEditMode();
  },

  dispose: function () {
    var el = document.getElementById('scheduler');
    if (el) el.innerHTML = '';
    this.instance = null;
  }
};
```

### 3. Blazor component

```razor
@* SchedulaGantt.razor *@
@inject IJSRuntime JSRuntime
@implements IAsyncDisposable

<div id="scheduler"></div>

@code {
    [Parameter] public object Data { get; set; }
    [Parameter] public string LicenseKey { get; set; }
    [Parameter] public string Theme { get; set; } = "";
    [Parameter] public string Locale { get; set; } = "en-US";

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        if (firstRender)
        {
            var options = new
            {
                date = DateTime.Today.ToString("o"),
                timeUnitsView = 30,
                gStyle = "round-rect",
                theme = Theme,
                locale = Locale,
                licenseKey = LicenseKey,
                canMoveItems = !string.IsNullOrEmpty(LicenseKey),
                canResizeItems = !string.IsNullOrEmpty(LicenseKey),
                drawLinks = !string.IsNullOrEmpty(LicenseKey)
            };

            await JSRuntime.InvokeVoidAsync("schedulaInterop.init", "scheduler", Data, options);
        }
    }

    public async Task SetDataAsync(object data)
    {
        await JSRuntime.InvokeVoidAsync("schedulaInterop.setData", data);
    }

    public async Task SetViewAsync(int days)
    {
        await JSRuntime.InvokeVoidAsync("schedulaInterop.setView", days);
    }

    public async ValueTask DisposeAsync()
    {
        await JSRuntime.InvokeVoidAsync("schedulaInterop.dispose");
    }
}
```

### Usage

```razor
@* Index.razor *@
<SchedulaGantt Data="@schedulerData" LicenseKey="SCHED-XXXXX-XXXXX-XXXXX" Theme="theme-dark" />

@code {
    private object schedulerData = new
    {
        Resources = new[]
        {
            new {
                Id = "1", Name = "Alice",
                Items = new[] {
                    new { Id = "t1", Text = "Design phase", Offset = 0, Width = 2880, Color1 = "#2043D9" }
                }
            },
            new {
                Id = "2", Name = "Bob",
                Items = new[] {
                    new { Id = "t2", Text = "Development", Offset = 1440, Width = 4320, Color1 = "#006BF7" }
                }
            }
        }
    };
}
```

### Notification Callbacks (Blazor ← JS)

To receive events (item moved, resized, etc.) in Blazor:

```javascript
// In schedula-interop.js — add to init():
var notif = new NotificationPlugin();
notif.onItemChanged = function (item, resourceId) {
  dotNetRef.invokeMethodAsync('OnItemChanged', JSON.stringify(item), resourceId);
};
s.plugins.push(notif);
```

```csharp
// In Blazor component
[JSInvokable]
public void OnItemChanged(string itemJson, string resourceId)
{
    var item = JsonSerializer.Deserialize<SchedulaItem>(itemJson);
    // Handle the change (save to DB, update state, etc.)
}
```

---

## Next.js

SchedulaCore requires the DOM, so it must be loaded client-side only.

### Dynamic Import Component

```tsx
// components/SchedulaGantt.tsx
'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    SchedulaCore: any;
    SchedulaSettings: any;
  }
}

interface Props {
  data: any;
  settings?: any;
}

export default function SchedulaGantt({ data, settings }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const schedulerRef = useRef<any>(null);

  useEffect(() => {
    // Dynamically load the script (runs only in browser)
    const script = document.createElement('script');
    script.src = '/schedula-core-pro.min.js';
    script.onload = () => {
      if (!containerRef.current) return;

      const s = settings || new window.SchedulaSettings();
      if (!settings) s.date = new Date();

      schedulerRef.current = new window.SchedulaCore(
        containerRef.current.id,
        data,
        s
      );
      schedulerRef.current.init();
    };
    document.body.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
      schedulerRef.current = null;
      document.body.removeChild(script);
    };
  }, [data, settings]);

  return <div id="schedula-gantt" ref={containerRef} />;
}
```

### Usage in a Page

```tsx
// app/page.tsx
import dynamic from 'next/dynamic';

const SchedulaGantt = dynamic(() => import('../components/SchedulaGantt'), {
  ssr: false // Disable SSR — SchedulaCore needs the DOM
});

const data = {
  Resources: [
    { Id: '1', Name: 'Alice', Items: [
      { Id: 't1', Text: 'Design phase', Offset: 0, Width: 2880, Color1: '#2043D9' }
    ]}
  ]
};

export default function Page() {
  return <SchedulaGantt data={data} />;
}
```

> Place CSS files in `public/` and add `<link>` tags in `app/layout.tsx` or import them globally.

---

## Nuxt 3

### Client-Only Plugin

```typescript
// plugins/schedula.client.ts
export default defineNuxtPlugin(() => {
  // Load CSS
  useHead({
    link: [
      { rel: 'stylesheet', href: '/schedula-core.css' },
      { rel: 'stylesheet', href: '/popup.css' }
    ],
    script: [
      { src: '/schedula-core-pro.min.js' }
    ]
  });
});
```

### Component

```vue
<!-- components/SchedulaGantt.vue -->
<template>
  <div :id="elementId"></div>
</template>

<script setup>
const props = defineProps({
  data: { type: Object, required: true }
});

const elementId = 'schedula-gantt';
let scheduler = null;

onMounted(() => {
  // Wait for the script to load
  const check = setInterval(() => {
    if (window.SchedulaCore) {
      clearInterval(check);

      const s = new window.SchedulaSettings();
      s.date = new Date();

      scheduler = new window.SchedulaCore(elementId, props.data, s);
      scheduler.init();
    }
  }, 50);
});

watch(() => props.data, (newData) => {
  if (scheduler) scheduler.setData(newData);
}, { deep: true });

onUnmounted(() => {
  const el = document.getElementById(elementId);
  if (el) el.innerHTML = '';
  scheduler = null;
});
</script>
```

### Usage

```vue
<template>
  <ClientOnly>
    <SchedulaGantt :data="schedulerData" />
  </ClientOnly>
</template>
```

> Place `schedula-core-pro.min.js` and CSS files in your `public/` folder.

---

## Svelte

```svelte
<!-- SchedulaGantt.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  export let data;
  export let settings = null;

  let container;
  let scheduler = null;

  onMount(() => {
    const s = settings || new window.SchedulaSettings();
    if (!settings) s.date = new Date();

    scheduler = new window.SchedulaCore(container.id, data, s);
    scheduler.init();
  });

  onDestroy(() => {
    if (container) container.innerHTML = '';
    scheduler = null;
  });

  // Reactive update
  $: if (scheduler && data) {
    scheduler.setData(data);
  }
</script>

<div id="schedula-gantt" bind:this={container}></div>
```

### SvelteKit (SSR)

In SvelteKit, load the script only in the browser:

```svelte
<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';

  export let data;
  let container;
  let scheduler = null;

  onMount(async () => {
    if (!browser) return;

    // Dynamic script load
    await new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = '/schedula-core-pro.min.js';
      script.onload = resolve;
      document.head.appendChild(script);
    });

    const s = new window.SchedulaSettings();
    s.date = new Date();

    scheduler = new window.SchedulaCore(container.id, data, s);
    scheduler.init();
  });

  onDestroy(() => {
    if (container) container.innerHTML = '';
  });
</script>

<div id="schedula-gantt" bind:this={container}></div>
```

---

## TypeScript Declarations

If you use TypeScript and load SchedulaCore via `<script>` tag, add these declarations to avoid type errors:

```typescript
// schedula-core.d.ts
declare class SchedulaCore {
  constructor(elementId: string, data: any, settings: SchedulaSettings);
  init(): void;
  refresh(): void;
  setData(data: any): void;
  setView(timeUnits: number): void;
  setStyle(style: 'rect' | 'round-rect' | 'arrow' | 'circle'): void;
  filterItems(text: string): void;
  enableEditMode(): void;
  disableEditMode(): void;
  addItem(resourceId: string, item: any): void;
  deleteItem(resourceId: string, itemId: string): void;
  updateItem(resourceId: string, itemId: string, changes: any): void;
  transferItem(itemId: string, fromResourceId: string, toResourceId: string, changes?: any): void;
  mergeData(delta: any): void;
}

declare class SchedulaSettings {
  date: Date;
  timeUnitsView: number;
  timeUnitVal: number;
  gridStep: number;
  gStyle: string;
  resourceHeight: number;
  resourceWidth: number;
  theme: string;
  locale: string;
  hilightSunday: boolean;
  animation: boolean;
  canMoveItems: boolean;
  canResizeItems: boolean;
  drawLinks: boolean;
  enablePopup: boolean;
  plugins: any[];
  licenseKey: string;
}

declare class CalendarPlugin { constructor(); }
declare class DragDropPlugin { constructor(); }
declare class LinksPlugin { constructor(); }
declare class EventsPlugin { constructor(); }
declare class ContextMenuPlugin { constructor(); }
declare class NotificationPlugin {
  constructor();
  onItemChanged: (item: any, resourceId: string) => void;
  onItemAdded: (item: any, resourceId: string) => void;
  onItemDeleted: (item: any, resourceId: string) => void;
  onCalendarChanged: () => void;
}
declare class IconsPlugin { constructor(); }
declare class DefaultPopupPlugin { constructor(); }
```

Add this file to your project and reference it in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["./schedula-core"]
  }
}
```

---

## Common Patterns

### Reactive Data Updates

All frameworks follow the same pattern — call `setData()` when your data changes:

```javascript
scheduler.setData(newData);
```

For incremental updates (PRO):

```javascript
scheduler.addItem('resource1', { Id: 't99', Text: 'New task', Offset: 0, Width: 1440, Color1: '#00AA55' });
scheduler.updateItem('resource1', 't1', { Text: 'Updated title', Completion: 75 });
scheduler.deleteItem('resource1', 't2');
scheduler.transferItem('t3', 'resource1', 'resource2');
```

### Theme Switching

```javascript
settings.theme = 'theme-dark'; // 'theme-blue', 'theme-soft', or ''
scheduler.refresh();
```

### Edit Mode Toggle

```javascript
scheduler.enableEditMode();   // users can drag and resize items
scheduler.disableEditMode();  // items are locked
```
