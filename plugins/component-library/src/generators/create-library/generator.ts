import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  readJson,
  Tree,
} from '@nx/devkit';
import { join } from 'path';
import { addLinter } from './lib/add-linter';
import { CreateLibraryGeneratorSchema } from './schema';
import { libraryGenerator } from '@nx/react';
import { Linter } from '@nx/eslint';

export async function createLibraryGenerator(
  tree: Tree,
  options: CreateLibraryGeneratorSchema
) {
  const resolvedOptions = {
    ...options,
    name: names(options.name).fileName,
    scope: readJson(tree, 'package.json').name,
    directory: options.directory || (options.publishable ? 'packages' : 'libs'),
  };
  const projectRoot = `${resolvedOptions.directory}/${resolvedOptions.name}`;

  // addProjectConfiguration(tree, resolvedOptions.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {
  //     'extract-tailwind': {
  //       executor: '@spwntch/component-library:extract-tailwind',
  //       options: {},
  //     },
  //     'add-docs': {
  //       executor: '@spwntch/component-library:add-docs',
  //       options: {},
  //     },
  //   },
  // });

  // await addLinter(tree, projectRoot, resolvedOptions);

  await libraryGenerator(tree, {
    name: options.name,
    directory: options.directory,
    bundler: 'vite',
    compiler: 'babel',
    publishable: options.publishable,
    importPath: `@/${resolvedOptions.name}`,
    component: true,
    linter: Linter.EsLint,
    style: 'css',
  });
  // generateFiles(tree, join(__dirname, 'files'), projectRoot, resolvedOptions);
  // await formatFiles(tree);
}

export default createLibraryGenerator;
