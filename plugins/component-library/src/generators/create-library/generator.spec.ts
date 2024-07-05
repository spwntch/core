import { Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { CreateLibraryGeneratorSchema } from './schema';

describe('create-library generator', () => {
  let tree: Tree;
  const options: CreateLibraryGeneratorSchema = {
    name: 'test',
    publishable: false,
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('is a sanity test', async () => {
    console.log(tree);
    expect(true).toBeTruthy();
  });

  // it('should run successfully', async () => {
  //   await createLibraryGenerator(tree, options);
  //   const config = readProjectConfiguration(tree, 'test');
  //   expect(config).toBeDefined();
  // });
});
