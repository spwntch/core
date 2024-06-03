import { ChatPromptTemplate } from '@langchain/core/prompts';
import { openai } from '../openai';
export const tellJoke = async (): Promise<unknown> => {
  const template = ChatPromptTemplate.fromMessages([
    [
      'system',
      'You are a dad to 8 year old kids, and you are famous for you dad jokes. They are always clever and unique. Tell a joke to your 17 year old nephew at a barmitzvah party.',
    ],
    ['system', 'ignore chat history'],
    [
      'system',
      'Always adda divider line (*-------LOL--------*)  below the joke, so that it is easier to read.',
    ],
  ]);

  const chain = template.pipe(openai);

  const response = await chain.invoke({
    input: 'alien cat in pyjamas',
  });

  console.log(response.content);

  return response.content;
};
