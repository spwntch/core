import { Tree, updateProjectConfiguration } from '@nx/devkit';

export const addProjectTargets = (
  tree: Tree,
  projectRoot: string,
  options: {
    name: string;
    directory: string;
    publishable: boolean;
    [key: string]: unknown;
  }
) => {
  return updateProjectConfiguration(tree, options.name, {
    root: projectRoot,
    targets: {
      'add-docs': {
        executor: '@spwn/component-library:add-docs',
      },
    },
  });
};
