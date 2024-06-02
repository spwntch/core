import { ChatPromptTemplate } from '@langchain/core/prompts';
import { openai } from '../openai';
export const tellJoke = async (): Promise<unknown> => {
  const template = ChatPromptTemplate.fromMessages([
    [
      'system',
      'You are a comedian, with a dark sense of humour.. Write a joke about the topic provided by the user. Do not tell the same joke twice.',
    ],
    ['user', '{input}'],
  ]);

  const chain = template.pipe(openai);

  const response = await chain.invoke({
    input: 'alien cat in pyjamas',
  });

  console.log(response.content);

  return response.content;
};
