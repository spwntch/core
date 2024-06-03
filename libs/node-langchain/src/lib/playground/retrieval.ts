import { ChatPromptTemplate } from '@langchain/core/prompts';
import { embeddings, openai } from '../openai';

import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';
import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

export const retrieveDadJoke = async (): Promise<unknown> => {
  /**
   * SETUP
   */

  const prompt = ChatPromptTemplate.fromMessages([
    [
      'system',
      `
     Return a radnomly selected joke about space-ships from your knowledge base: {context}
     Always adda divider line (*-------LOL--------*)  below the joke, so that it is easier to read.
     `,
    ],
  ]);

  const loader = new CheerioWebBaseLoader(
    'https://icanhazdadjoke.com/search?term=space%20ship'
  );

  const spliter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 50,
  });

  const getRetriever = async (docs: any[]) => {
    const store = await MemoryVectorStore.fromDocuments(docs, embeddings);
    return store.asRetriever();
  };

  /**
   * CHAIN
   */
  const promptChain = await createStuffDocumentsChain({
    llm: openai,
    prompt,
  });

  const docs = await loader.load();
  const splitDocs = await spliter.splitDocuments(docs);

  const retrievalChain = await createRetrievalChain({
    combineDocsChain: promptChain,
    retriever: await getRetriever(splitDocs),
  });

  return await retrievalChain.invoke({
    input: 'null',
  });
};
