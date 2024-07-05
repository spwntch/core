import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree
} from '@nx/devkit';
import { Linter } from '@nx/eslint';
import { libraryGenerator } from '@nx/react';
import { CreateLibraryGeneratorSchema } from './schema';
import { join } from 'path';
import { addLinter } from './lib/add-linter';

export async function createLibraryGenerator(
  tree: Tree,
  options: CreateLibraryGeneratorSchema
) {
  options.directory =
    options.directory || (options.publishable ? 'packages' : 'libs');
  const projectRoot = `${options.directory}/${options.name}`;

  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {
      'extract-tailwind': {
        executor: '@spwntch/component-library-plugin:extract-tailwind',
        options: {},
      },
      'add-docs': {
        executor: '@spwntch/component-library-plugin:add-docs',
        options: {},
      },
    },
  });

  await addLinter(tree, projectRoot, options);
  
  // await libraryGenerator(tree, {
  //   name: options.name,
  //   directory: options.directory,
  //   bundler: 'vite',
  //   compiler: 'babel',
  //   component: true,
  //   linter: Linter.EsLint,
  //   style: 'tailwind',
  // });
  generateFiles(tree, join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default createLibraryGenerator;
