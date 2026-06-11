<script setup lang="ts">
import { ref } from 'vue';
import { SchedulaGantt, type SchedulaShape } from 'schedula-core-vue';
import { demoData } from './demo-data';

const theme = ref('');
const gStyle = ref<SchedulaShape>('round-rect');
const view = ref(30);
const filter = ref('');

const THEMES = [
  { value: '', label: 'Light' },
  { value: 'theme-dark', label: 'Dark' },
  { value: 'theme-blue', label: 'Blue' },
  { value: 'theme-soft', label: 'Soft' },
];
const SHAPES: SchedulaShape[] = ['round-rect', 'rect', 'arrow', 'circle'];
</script>

<template>
  <div class="wrap">
    <header>
      <h1>SchedulaCore × Vue</h1>
      <p>Official <code>schedula-core-vue</code> wrapper — Free edition.</p>
    </header>

    <div class="controls">
      <label>
        Theme<br />
        <select v-model="theme">
          <option v-for="t in THEMES" :key="t.value" :value="t.value">{{ t.label }}</option>
        </select>
      </label>
      <label>
        Shape<br />
        <select v-model="gStyle">
          <option v-for="s in SHAPES" :key="s" :value="s">{{ s }}</option>
        </select>
      </label>
      <label>
        Days<br />
        <input type="range" min="7" max="90" v-model.number="view" /> {{ view }}
      </label>
      <label>
        Filter<br />
        <input type="text" placeholder="e.g. Design" v-model="filter" />
      </label>
    </div>

    <div class="gantt">
      <SchedulaGantt
        :data="demoData"
        :theme="theme"
        :gStyle="gStyle"
        :view="view"
        :filter="filter"
        @ready="(core: any) => console.log('SchedulaCore ready', core)"
      />
    </div>
  </div>
</template>

<style scoped>
.wrap { font-family: system-ui, sans-serif; padding: 16px; }
header h1 { font-size: 20px; margin: 0; }
header p { color: #666; margin: 4px 0 0; }
.controls {
  display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-end;
  margin: 12px 0; padding: 12px; background: #f5f5f7; border-radius: 8px;
}
.gantt { border: 1px solid #e3e3e6; border-radius: 8px; overflow: hidden; }
</style>
