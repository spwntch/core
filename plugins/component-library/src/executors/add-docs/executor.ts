import { PromiseExecutor } from '@nx/devkit';
import { AddDocsExecutorSchema } from './schema';
import { getExecutorCwd } from '../../lib/utils';

const runExecutor: PromiseExecutor<AddDocsExecutorSchema> = async (options) => {
  const resolvedOptions = {
    ...options,
    project: getExecutorCwd({
      workspace: { projects: { ui: { root: 'libs/ui' } } },
      projectName: 'ui',
    }),
    component: `src/lib/components/my-ui-component`,
  };

  console.log('Executor ran for AddDocs', resolvedOptions);

  return {
    success: true,
  };
};

export default runExecutor;
