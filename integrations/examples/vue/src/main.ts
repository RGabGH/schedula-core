import { createApp } from 'vue';
import App from './App.vue';

// SchedulaCore styles, resolved through the package "exports" map.
import 'schedula-core/css';
import 'schedula-core/css/popup';
import 'schedula-core/css/themes';

createApp(App).mount('#app');
