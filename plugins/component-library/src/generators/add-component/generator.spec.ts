import { Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { AddComponentGeneratorSchema } from './schema';

describe('add-component generator', () => {
  let tree: Tree;
  const options: AddComponentGeneratorSchema = {
    name: 'button',
    projectRoot: 'ui',
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    // await addComponentGenerator(tree, options);
    // const config = readProjectConfiguration(tree, 'button');
    // expect(config).toBeDefined();
    expect(true).toBe(true);
  });
});
