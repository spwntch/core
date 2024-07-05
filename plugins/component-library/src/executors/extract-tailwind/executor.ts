import { PromiseExecutor } from '@nx/devkit';
import { ExtractTailwindExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<ExtractTailwindExecutorSchema> = async (
  options
) => {
  console.log('Executor ran for ExtractTailwind', options);
  return {
    success: true,
  };
};

export default runExecutor;
