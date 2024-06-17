import { ExtractTailwindExecutorSchema } from './schema';

export default async function runExecutor(
  options: ExtractTailwindExecutorSchema
) {

// create a module.css file
// iterate over react jsd tree and extract tailwind classes


  console.log('Executor ran for ExtractTailwind', options);
  return {
    success: true,
  };
}
