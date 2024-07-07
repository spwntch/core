import { generateFiles, Tree } from '@nx/devkit';
import { Linter } from '@nx/eslint';
import { libraryGenerator } from '@nx/react';
import { join } from 'path';

export const generateReactLibrary = async (
  tree: Tree,
  projectRoot: string,
  options: {
    name: string;
    directory: string;
    publishable: boolean;
    [key: string]: unknown;
  }
): Promise<void> => {
  await libraryGenerator(tree, {
    name: options.name,
    directory: options.directory,
    bundler: 'vite',
    compiler: 'babel',
    publishable: options.publishable,
    importPath: `@/${options.name}`,
    linter: Linter.EsLint,
    style: 'css',
  });

  return generateFiles(tree, join(__dirname, 'files'), projectRoot, options);
};
