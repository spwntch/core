import { ChatOpenAI } from '@langchain/openai';

const openai = new ChatOpenAI({
  modelName: 'gpt-4o',
  temperature: 0.5,
  maxTokens: 1000,
});

export default openai;
