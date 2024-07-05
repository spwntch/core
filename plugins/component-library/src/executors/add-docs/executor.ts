import { PromiseExecutor } from '@nx/devkit';
import { AddDocsExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<AddDocsExecutorSchema> = async (options) => {
  console.log('Executor ran for AddDocs', options);
  return {
    success: true,
  };
};

export default runExecutor;
