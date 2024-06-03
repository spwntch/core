import { StructuredOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { openai, embeddings } from '../openai';

import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

import { z } from 'zod';

const template = ChatPromptTemplate.fromMessages([
  [
    'system',
    `
    Return a radnomly selected joke about space-ships from your knowledge base: {context}
    Always adda divider line (*-------LOL--------*)  below the joke, so that it is easier to read.
    `,
  ],
]);

export const retrieveDadJoke = async (): Promise<unknown> => {
  //   const schema = z.object({
  //     topic: z.string().describe('the topic of the joke'),
  //     joke: z.string().describe('the joke itself'),
  //     dad_joke_rating: z
  //       .number()
  //       .describe('how dad-like the joke is. the stupider the better!'),
  //   });
  //   const parser = StructuredOutputParser.fromZodSchema(schema);
  // const chain = template.pipe(openai).pipe(parser);

  const chain = await createStuffDocumentsChain({
    llm: openai,
    prompt: template,
  });

  const loader = new CheerioWebBaseLoader(
    'https://icanhazdadjoke.com/search?term=space%20ship'
  );
  const docs = await loader.load();

  const spliter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 50,
  });
  const splitDocs = await spliter.splitDocuments(docs);

  const store = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);
  const retriever = store.asRetriever();
  const retrievalChain = await createRetrievalChain({
    combineDocsChain: chain,
    retriever,
  });

  //   chain.pipe(parser);

  const response = await retrievalChain.invoke({
    input: 'null',
  });

  return response;
};
