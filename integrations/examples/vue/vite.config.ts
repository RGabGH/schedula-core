import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: { port: 5174 },
  optimizeDeps: { include: ['schedula-core', 'schedula-core-vue'] },
});
