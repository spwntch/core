import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { gettingStartedDocsGenerator } from './generator';
import { GettingStartedDocsGeneratorSchema } from './schema';

describe('getting-started-docs generator', () => {
  let tree: Tree;
  const options: GettingStartedDocsGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await gettingStartedDocsGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
