import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  joinPathFragments,
  Tree,
} from '@nx/devkit';
import { Linter, lintProjectGenerator } from '@nx/eslint';
import * as path from 'path';
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
    targets: {},
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await addLinter(tree, projectRoot, options);
  await formatFiles(tree);
}

async function addLinter(
  tree: Tree,
  projectRoot: string,
  options: CreateLibraryGeneratorSchema
) {
  return await lintProjectGenerator(tree, {
    project: options.name,
    linter: Linter.EsLint,
    skipFormat: true,
    tsConfigPaths: [joinPathFragments(projectRoot, 'tsconfig.json')],
    eslintFilePatterns: [`${projectRoot}/**/*.{ts,tsx`],
  });
}

export default createLibraryGenerator;
