import { formatFiles, generateFiles, Tree } from '@nx/devkit';
import * as path from 'path';
import { AddComponentGeneratorSchema } from './schema';

export async function addComponentGenerator(
  tree: Tree,
  options: AddComponentGeneratorSchema
) {
  const srcRoot = `${options.projectRoot}/src`;
  console.log('srcRoot', srcRoot);

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    options.projectRoot,
    options
  );
  await formatFiles(tree);
}

export default addComponentGenerator;
