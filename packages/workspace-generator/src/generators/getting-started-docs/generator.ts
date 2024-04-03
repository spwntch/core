import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GettingStartedDocsGeneratorSchema } from './schema';

export async function gettingStartedDocsGenerator(
  tree: Tree,
  options: GettingStartedDocsGeneratorSchema
) {
  const projectRoot = `apps/getting-started-docs`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default gettingStartedDocsGenerator;
