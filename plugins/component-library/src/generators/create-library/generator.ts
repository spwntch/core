import { formatFiles, names, readJson, Tree } from '@nx/devkit';
import { generateReactLibrary } from '../../lib/utils';
import { CreateLibraryGeneratorSchema } from './schema';

export async function createLibraryGenerator(
  tree: Tree,
  options: CreateLibraryGeneratorSchema
) {
  console.log('__dirname', __dirname);
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
  // addProjectTargets(tree, projectRoot, resolvedOptions);

  await formatFiles(tree);
}

export default createLibraryGenerator;
