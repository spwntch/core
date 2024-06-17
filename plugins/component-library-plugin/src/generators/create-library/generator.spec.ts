import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { createLibraryGenerator } from './generator';
import { CreateLibraryGeneratorSchema } from './schema';

describe('create-library generator', () => {
  let tree: Tree;
  const options: CreateLibraryGeneratorSchema = {
    directory: 'libs',
    name: 'test',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await createLibraryGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
