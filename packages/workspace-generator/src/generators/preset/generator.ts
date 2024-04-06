import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PresetGeneratorSchema } from './schema';

import { spinner } from '@clack/prompts';

export async function presetGenerator(
  tree: Tree,
  options: PresetGeneratorSchema
) {
  const installation = spinner();
  installation.start('Adding awesomeness to your workspace...');

  // const { name, addDocs } = options;

  // if (addDocs) {
    // gettingStartedDocsGenerator(tree, { name });
  // }

  const projectRoot = `.`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);

  addDependenciesToPackageJson(
    tree,
    {
  //     '@spwntch/components': 'latest',
  //     '@spwntch/shell': 'latest',
      next: '14.0.4',
      react: '18.2.0',
      'react-dom': '18.2.0',
  //     tslib: '^2.3.0',
    },
    {
  //     '@nx/eslint': '18.2.2',
  //     '@nx/eslint-plugin': '18.2.2',
  //     '@nx/jest': '18.2.2',
  //     '@nx/js': '18.2.2',
      '@nx/next': '18.2.3',
  //     '@nx/react': '18.2.2',
  //     '@nx/storybook': '18.2.2',
  //     '@nx/vite': '18.2.2',
  //     '@nx/web': '18.2.2',
      '@nx/workspace': '18.2.3',
  //     '@storybook/addon-essentials': '^8.0.4',
  //     '@storybook/addon-interactions': '^8.0.4',
  //     '@storybook/addon-themes': '^8.0.4',
  //     '@storybook/blocks': '^8.0.4',
  //     '@storybook/core-server': '^8.0.4',
  //     '@storybook/manager-api': '^8.0.4',
  //     '@storybook/react': '^8.0.4',
  //     '@storybook/react-vite': '^8.0.4',
  //     '@storybook/test-runner': '^0.17.0',
  //     '@storybook/theming': '^8.0.4',
  //     '@swc-node/register': '~1.8.0',
  //     '@swc/cli': '~0.1.62',
  //     '@swc/core': '~1.3.85',
  //     '@swc/helpers': '~0.5.2',
  //     '@types/jest': '^29.4.0',
  //     '@types/node': '18.16.9',
  //     '@types/react': '18.2.33',
  //     '@types/react-dom': '18.2.14',
  //     '@typescript-eslint/eslint-plugin': '^7.3.0',
  //     '@typescript-eslint/parser': '^7.3.0',
  //     '@vitejs/plugin-react-swc': '^3.5.0',
  //     '@vitest/ui': '^1.3.1',
  //     autoprefixer: '10.4.13',
  //     'babel-jest': '^29.4.1',
  //     eslint: '~8.57.0',
  //     'eslint-config-next': '14.0.4',
  //     'eslint-config-prettier': '^9.0.0',
  //     'eslint-plugin-import': '2.27.5',
  //     'eslint-plugin-jsx-a11y': '6.7.1',
  //     'eslint-plugin-react': '7.32.2',
  //     'eslint-plugin-react-hooks': '4.6.0',
  //     jest: '^29.4.1',
  //     'jest-environment-jsdom': '^29.4.1',
  //     jsdom: '~22.1.0',
      nx: '18.2.3',
  //     postcss: '8.4.21',
  //     prettier: '^2.6.2',
  //     storybook: '^8.0.4',
  //     tailwindcss: '3.2.7',
  //     'ts-jest': '^29.1.0',
  //     'ts-node': '10.9.1',
  //     typescript: '~5.4.2',
  //     verdaccio: '^5.0.4',
  //     vite: '~5.0.0',
  //     'vite-plugin-dts': '~3.8.1',
  //     vitest: '^1.3.1',
    }
  );

  return installation.stop('Done');
}

export default presetGenerator;
