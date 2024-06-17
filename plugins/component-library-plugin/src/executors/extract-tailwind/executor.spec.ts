import { ExtractTailwindExecutorSchema } from './schema';
import executor from './executor';

const options: ExtractTailwindExecutorSchema = {};

describe('ExtractTailwind Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
