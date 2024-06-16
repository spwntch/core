/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react-blocks',

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
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: {
        index: 'src/index.ts',
        'content-block': 'src/lib/components/content-block/content-block.tsx',
        'image-content-block': 'src/lib/components/image-content-block/image-content-block.tsx',
        'split-image-content-block': 'src/lib/components/split-image-content-block/split-image-content-block.tsx',
        'multi-panel-block': 'src/lib/components/multi-panel-block/multi-panel-block.tsx',
      },
      name: 'react-blocks',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@spwntch/ui',
        '@spwntch/typography',
        '@spwntch/components',
        'lucide-react',
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
    },
  },
});
