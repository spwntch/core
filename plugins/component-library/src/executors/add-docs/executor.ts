import { PromiseExecutor } from '@nx/devkit';
import { AddDocsExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<AddDocsExecutorSchema> = async (options) => {
  const resolvedOptions = {
    ...options,
    project: '${projectRoot}',
  };

  console.log('Executor ran for AddDocs', resolvedOptions);

  return {
    success: true,
  };
};

export default runExecutor;
