/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react-components',
  plugins: [
    react(),
    nxViteTsPaths(),
    libInjectCss(),

    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      exclude: ['**/storybook/*', '**/*.stories.tsx', '**/*.specs.ts'],
    }),
  ],
  build: {
    outDir: './dist',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: {
        index: 'src/index.ts',
        'carousels_logo-carousel':'src/lib/components/carousels/logo-carousel/logo-carousel.tsx'
      },
      name: 'react-components',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@spwntch/ui',
        '@spwntch/typography',
        'embla-carousel-autoplay',
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
    },
  },
});
