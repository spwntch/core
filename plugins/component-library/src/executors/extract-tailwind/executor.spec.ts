import { ExecutorContext } from '@nx/devkit';

import { ExtractTailwindExecutorSchema } from './schema';
import executor from './executor';

const options: ExtractTailwindExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('ExtractTailwind Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
