/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react-ui',

  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
    }),
    // libInjectCss(),
  ],

  build: {
    outDir: './dist',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: 'src/index.ts',
      name: 'react-ui',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      // input: Object.fromEntries(
      //   glob
      //     .sync('src/**/*.{ts,tsx}')
      //     .map((file) => [
      //       relative('src', file.slice(0, file.length - extname(file).length)),
      //       fileURLToPath(new URL(file, import.meta.url)),
      //     ])
      // ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
    },
  },
});
