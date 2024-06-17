import { AddDocsExecutorSchema } from './schema';
import executor from './executor';

const options: AddDocsExecutorSchema = {};

describe('AddDocs Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
