import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PresetGeneratorSchema } from './schema';

import gettingStartedDocsGenerator from '../getting-started-docs/generator';
import { spinner } from '@clack/prompts';

export async function presetGenerator(
  tree: Tree,
  options: PresetGeneratorSchema
) {
  const installation = spinner();
  installation.start('Adding awesomeness to your workspace...');

  const { name, addDocs } = options;

  if (addDocs) {
    gettingStartedDocsGenerator(tree, { name });
  }

  const projectRoot = `.`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);

  addDependenciesToPackageJson(
    tree,
    {
      '@spwntch/components': 'latest',
      '@spwntch/shell': 'latest',
      next: '14.0.4',
      react: '18.2.0',
      'react-dom': '18.2.0',
      tslib: '^2.3.0',
    },
    {
      '@nx/eslint': '18.2.1',
      '@nx/eslint-plugin': '18.2.1',
      '@nx/jest': '18.2.1',
      '@nx/js': '18.2.1',
      '@nx/next': '18.2.1',
      '@nx/react': '18.2.1',
      '@nx/workspace': '18.2.1',
      '@swc-node/register': '~1.8.0',
      '@swc/core': '~1.3.85',
      '@swc/helpers': '~0.5.2',
      '@types/jest': '^29.4.0',
      '@types/node': '18.16.9',
      '@types/react': '18.2.33',
      '@types/react-dom': '18.2.14',
      '@typescript-eslint/eslint-plugin': '^7.3.0',
      '@typescript-eslint/parser': '^7.3.0',
      autoprefixer: '10.4.13',
      'babel-jest': '^29.4.1',
      eslint: '~8.57.0',
      'eslint-config-next': '14.0.4',
      'eslint-config-prettier': '^9.0.0',
      'eslint-plugin-import': '2.27.5',
      'eslint-plugin-jsx-a11y': '6.7.1',
      'eslint-plugin-react': '7.32.2',
      'eslint-plugin-react-hooks': '4.6.0',
      jest: '^29.4.1',
      'jest-environment-jsdom': '^29.4.1',
      nx: '18.2.1',
      postcss: '8.4.21',
      prettier: '^2.6.2',
      tailwindcss: '3.2.7',
      'ts-jest': '^29.1.0',
      'ts-node': '10.9.1',
      typescript: '~5.4.2',
    }
  );

  return installation.stop('Done');
}

export default presetGenerator;
