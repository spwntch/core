import { OpenAI } from '@langchain/openai';

const openai = new OpenAI({
    modelName: 'gpt-4o',
    temperature: 0.5,
    maxTokens: 1000,
});

export const ping = async () => await openai.invoke('ping');

ping();

export default openai;
