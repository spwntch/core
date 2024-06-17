import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { addLinter } from './lib/utils/add-linter';
import { CreateLibraryGeneratorSchema } from './schema';

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

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await addLinter(tree, projectRoot, options);
  await formatFiles(tree);
}

export default createLibraryGenerator;
