import { formatFiles, generateFiles, names, readJson, Tree } from '@nx/devkit';
import { Linter } from '@nx/eslint';
import { libraryGenerator } from '@nx/react';
import { join } from 'path';
import { CreateLibraryGeneratorSchema } from './schema';
import addComponentGenerator from '../add-component/generator';

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

  await libraryGenerator(tree, {
    name: options.name,
    directory: resolvedOptions.directory,
    bundler: 'vite',
    compiler: 'babel',
    publishable: options.publishable,
    importPath: `@/${resolvedOptions.name}`,
    linter: Linter.EsLint,
    style: 'css',
  });
  generateFiles(tree, join(__dirname, 'files'), projectRoot, resolvedOptions);

  await addComponentGenerator(tree, {
    name: 'button',
    projectRoot,
  });

  await formatFiles(tree);
}

export default createLibraryGenerator;
