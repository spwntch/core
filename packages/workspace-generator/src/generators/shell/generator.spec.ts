import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { shellGenerator } from './generator';
import { ShellGeneratorSchema } from './schema';

describe('shell generator', () => {
  let tree: Tree;
  const options: ShellGeneratorSchema = { };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await shellGenerator(tree, options);
    // const config = readProjectConfiguration(tree, 'test');
    // expect(config).toBeDefined();
  });
});
