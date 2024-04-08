import {
  addProjectConfiguration,
  generateFiles,
  Tree
} from '@nx/devkit';
import * as path from 'path';
import { ShellGeneratorSchema } from './schema';

export async function shellGenerator(
  tree: Tree,
  options: ShellGeneratorSchema
) {
  const projectRoot = `libs/shell`;
  addProjectConfiguration(tree, 'shell', {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
}

export default shellGenerator;
