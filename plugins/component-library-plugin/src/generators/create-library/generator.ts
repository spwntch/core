import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { CreateLibraryGeneratorSchema } from './schema';

export async function createLibraryGenerator(
  tree: Tree,
  options: CreateLibraryGeneratorSchema
) {
  const projectRoot = `${options.directory}/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default createLibraryGenerator;
