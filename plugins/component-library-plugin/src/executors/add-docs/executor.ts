import { AddDocsExecutorSchema } from './schema';

export default async function runExecutor(options: AddDocsExecutorSchema) {
  console.log('Executor ran for AddDocs', options);
  return {
    success: true,
  };
}
