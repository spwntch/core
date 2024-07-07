import { formatFiles, names, readJson, Tree } from '@nx/devkit';
import { addProjectTargets, generateReactLibrary } from '../../lib/utils';
import addComponentGenerator from '../add-component/generator';
import { CreateLibraryGeneratorSchema } from './schema';

export async function createLibraryGenerator(
  tree: Tree,
  options: CreateLibraryGeneratorSchema
) {
  const resolvedOptions = {
    ...options,
    directory: options.publishable ? 'packages' : 'libs',
    scope: readJson(tree, 'package.json').name,
    name: names(options.name).fileName,
    className: names(options.name).className,
    version: readJson(tree, 'package.json').version,
  };

  const projectRoot = `${resolvedOptions.directory}/${resolvedOptions.name}`;

  await generateReactLibrary(tree, projectRoot, resolvedOptions);
  addProjectTargets(tree, projectRoot, resolvedOptions);

  await addComponentGenerator(tree, {
    name: 'button',
    projectRoot,
  });

  await formatFiles(tree);
}

export default createLibraryGenerator;
