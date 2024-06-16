/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react-mdx',
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
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      name: 'react-mdx',
      formats: ['es'],
      entry: {
        index: 'src/index.ts',
        article: 'src/lib/components/article/article.tsx',
        'article-card': 'src/lib/components/article-card/article-card.tsx',
        'article-grid': 'src/lib/components/article-grid/article-grid.tsx',
        'article-header': 'src/lib/components/article-header/article-header.tsx',
        'article-mdx': 'src/lib/components/article-mdx/article-mdx.tsx',
        'flatten-toc-tree': 'src/lib/utils/flatten-toc-tree.ts',
      },
    },
    rollupOptions: {
      external: [
        '@spwntch/ui',
        '@spwntch/typography',
        '@spwntch/components',
        '@spwntch/blocks',
        'lucide-react',
        'react',
        'react/jsx-runtime',
        'rehype-toc',
      ],
    },
  },
});
