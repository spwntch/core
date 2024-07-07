import { formatFiles, names, readJson, Tree } from '@nx/devkit';
import { CreateLibraryGeneratorSchema } from './schema';
import { addProjectTargets, generateReactLibrary } from '../../lib/utils';

export async function createLibraryGenerator(
  tree: Tree,
  options: CreateLibraryGeneratorSchema
) {
  console.log('__dirname', __dirname);

  const generatorDir = __dirname;
  const scope = readJson(tree, 'package.json').name;
  const directory = options.publishable ? 'packages' : 'libs';
  const name = names(options.name).fileName;
  const className = names(options.name).className;
  const version = readJson(tree, 'package.json').version;

  const resolvedOptions = {
    ...options,
    generatorDir,
    directory,
    scope,
    name,
    className,
    version,
  };

  const projectRoot = `${resolvedOptions.directory}/${resolvedOptions.name}`;

  await generateReactLibrary(tree, projectRoot, resolvedOptions);
  addProjectTargets(tree, projectRoot, resolvedOptions);

  await formatFiles(tree);
}

export default createLibraryGenerator;
