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
        'brand_brand-provider':
          'src/lib/components/brand/brand-provider/brand-provider.tsx',
        brand_logo: 'src/lib/components/brand/logo/logo.tsx',
        brand_tagline: 'src/lib/components/brand/tagline/tagline.tsx',
        'buttons_github-button':
          'src/lib/components/buttons/github-button/github-button.tsx',
        'buttons_theme-toggle-button':
          'src/lib/components/buttons/theme-toggle-button/theme-toggle-button.tsx',
        'footer_regular-footer':
          'src/lib/components/footer/regular-footer/regular-footer.tsx',
        'footer_under-construction-footer':
          'src/lib/components/footer/under-construction-footer/under-construction-footer.tsx',
        footer_sections_about:
          'src/lib/components/footer/sections/about/about.tsx',
        footer_sections_contact:
          'src/lib/components/footer/sections/contact/contact.tsx',
        footer_sections_legal:
          'src/lib/components/footer/sections/legal/legal.tsx',
        footer_sections_social:
          'src/lib/components/footer/sections/social/social.tsx',
        'nav_desktop-top-navbar':
          'src/lib/components/nav/desktop-top-navbar/desktop-top-navbar.tsx',
        'nav_mobile-nav-drawer':
          'src/lib/components/nav/mobile-nav-drawer/mobile-nav-drawer.tsx',
        'nav_nav-menu': 'src/lib/components/nav/nav-menu/nav-menu.tsx',
        'nav_nav-provider':
          'src/lib/components/nav/nav-provider/nav-provider.tsx',
        'nav_nav-toolbar': 'src/lib/components/nav/nav-toolbar/nav-toolbar.tsx',
        'placeholders_under-construction':
          'src/lib/components/placeholders/under-construction/under-construction.tsx',
        'shell-provider':
          'src/lib/components/shell-provider/shell-provider.tsx',
        'social_social-icon':
          'src/lib/components/social/social-icon/social-icon.tsx',
        'theme-provider':
          'src/lib/components/theme-provider/theme-provider.tsx',
      },
      name: 'react-shell',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@spwntch/ui',
        '@spwntch/typography',
        '@spwntch/components',
        'lucide-react',
        'next-themes',
        'next/navigation',
        'react',
        'react/jsx-runtime',
      ],
    },
  },
});
