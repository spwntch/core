/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css';


export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react-shell',

  plugins: [
    react(),
    nxViteTsPaths(),
    libInjectCss(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  build: {
    outDir: './dist',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: {index:'src/index.ts'},
      name: 'react-shell',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@spwntch/ui',
        '@spwntch/typography',
        '@spwntch/components',
        'next-themes',
        'react',
        'react/jsx-runtime',
      ],
    },
  },
});
