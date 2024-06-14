/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react-typography',
  plugins: [
    react(),
    nxViteTsPaths(),
    libInjectCss(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      exclude: ['**/*.stories.tsx', '**/*.specs.ts'],
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
        h1: 'src/lib/components/h1/h1.tsx',
        h2: 'src/lib/components/h2/h2.tsx',
        h3: 'src/lib/components/h3/h3.tsx',
        h4: 'src/lib/components/h4/h4.tsx',
        lead: 'src/lib/components/lead/lead.tsx',
        large: 'src/lib/components/large/large.tsx',
        p: 'src/lib/components/p/p.tsx',
        muted: 'src/lib/components/muted/muted.tsx',
        small: 'src/lib/components/small/small.tsx',
        blockquote: 'src/lib/components/blockquote/blockquote.tsx',
        'inline-code': 'src/lib/components/inline-code/inline-code.tsx',
        'ol': 'src/lib/components/lists/ol.tsx',
        'ul': 'src/lib/components/lists/ul.tsx',
        'li': 'src/lib/components/lists/li.tsx',
        'table': 'src/lib/components/table/table.tsx',
        'thead': 'src/lib/components/table/thead.tsx',
        'tbody': 'src/lib/components/table/tbody.tsx',
        'th': 'src/lib/components/table/th.tsx',
        'tr': 'src/lib/components/table/tr.tsx',
        'td': 'src/lib/components/table/td.tsx',
      },
      name: 'react-typography',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['@spwntch/ui', 'react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
