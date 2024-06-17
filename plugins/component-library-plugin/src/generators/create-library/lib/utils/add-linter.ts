import { Tree, joinPathFragments } from '@nx/devkit';
import { CreateLibraryGeneratorSchema } from '../../schema';
import { Linter, lintProjectGenerator } from '@nx/eslint';

export async function addLinter(
  tree: Tree,
  projectRoot: string,
  options: CreateLibraryGeneratorSchema
) {
  return await lintProjectGenerator(tree, {
    project: options.name,
    linter: Linter.EsLint,
    skipFormat: true,
    tsConfigPaths: [joinPathFragments(projectRoot, 'tsconfig.json')],
    eslintFilePatterns: [`${projectRoot}/**/*.{ts,tsx`],
  });
}
