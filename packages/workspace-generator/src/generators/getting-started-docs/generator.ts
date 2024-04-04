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

  updateJson(tree, 'package.json', (json) => {
    json.scripts = json.scripts || {};
    json.scripts.docs = 'npx nx run getting-started-docs:dev --port 3001';
    return json;
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // await formatFiles(tree);
}

export default gettingStartedDocsGenerator;
