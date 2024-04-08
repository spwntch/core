import {
  addProjectConfiguration,
  generateFiles,
  Tree,
  updateJson
} from '@nx/devkit';
import * as path from 'path';
import { GettingStartedDocsGeneratorSchema } from './schema';

export async function gettingStartedDocsGenerator(
  tree: Tree,
  options: GettingStartedDocsGeneratorSchema
) {
  const projectRoot = `apps/getting-started-docs`;
  addProjectConfiguration(tree, 'getting-started-docs', {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}`,
    targets: {},
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
}

export default gettingStartedDocsGenerator;
