import { ChatOpenAI } from '@langchain/openai';

const openai = new ChatOpenAI({
  apiKey: process.env['NEXT_PUBLIC_OPENAI_API_KEY'],
  modelName: 'gpt-4o',
  temperature: 0.5,
  maxTokens: 1000,
});

export default openai;


