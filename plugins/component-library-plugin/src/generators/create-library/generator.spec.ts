import { Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';


describe('create-library generator', () => {
  let tree: Tree;
  // const options: CreateLibraryGeneratorSchema = {
  //   name: 'test',
  // };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('is a sanity test', async () => {
    console.log(tree)
    expect(true).toBeTruthy();
  });

  // it('should run successfully', async () => {
  // await createLibraryGenerator(tree, options);
  // const config = readProjectConfiguration(tree, 'test');
  // expect(config).toBeDefined();
  // });
});
