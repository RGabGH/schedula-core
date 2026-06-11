import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      // Never bundle the framework or the core — they are peer dependencies.
      external: ['vue', 'schedula-core'],
      output: { globals: { vue: 'Vue' } },
    },
    sourcemap: true,
  },
});
