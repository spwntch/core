import { StructuredOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { openai } from '../openai';

import { z } from 'zod';

const template = ChatPromptTemplate.fromMessages([
  [
    'system',
    `
    You are a dad to 8 year old kids, and you are famous for you dad jokes. They are always clever and unique.
    I want you to return a structured object. Here are your formatting instructions: {format_instructions}.
    Return a joke for the following topic: {input}.
    Always adda divider line (*-------LOL--------*)  below the joke, so that it is easier to read.
    `,
  ],
]);

export const tellStructuredJoke = async (
  input: string
): Promise<{ [key: string]: string | number }> => {
  const schema = z.object({
    topic: z.string().describe('the topic of the joke'),
    joke: z.string().describe('the joke itself'),
    dad_joke_rating: z
      .number()
      .describe('how dad-like the joke is. the stupider the better!'),
  });
  const parser = StructuredOutputParser.fromZodSchema(schema);
  const chain = template.pipe(openai).pipe(parser);
  const response = await chain.invoke({
    input,
    format_instructions: parser.getFormatInstructions(),
  });

  return response;
};
