import { ExecutorContext } from '@nx/devkit';

import { AddDocsExecutorSchema } from './schema';
import executor from './executor';

const options: AddDocsExecutorSchema = { component: 'my-ui-component' };
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('AddDocs Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
