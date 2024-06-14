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
        'carousels_logo-carousel':
          'src/lib/components/carousels/logo-carousel/logo-carousel.tsx',
        'containers_content-container':
          'src/lib/components/containers/content-container/content-container.tsx',
        'containers_image-container':
          'src/lib/components/containers/image-container/image-container.tsx',
        'content_announcement':
          'src/lib/components/content/announcement/announcement.tsx',
        'content_content-children':
          'src/lib/components/content/content-children/content-children.tsx',
        'content_header':
          'src/lib/components/content/header/header.tsx',
        'content_list':
          'src/lib/components/content/list/list.tsx',
        'content_paragraphs':
          'src/lib/components/content/paragraphs/paragraphs.tsx',
        'content_tags':
          'src/lib/components/content/tags/tags.tsx',
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
