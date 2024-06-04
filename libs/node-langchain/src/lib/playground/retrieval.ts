"use server";

import { ChatPromptTemplate } from '@langchain/core/prompts';
import { embeddings, openai } from '../openai';

import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';
import { CheerioWebBaseLoader } from '@langchain/community/document_loaders/web/cheerio';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';

export const retrieveAnswerFromPage = async (
  input: string
): Promise<unknown> => {
  /**
   * SETUP
   */

  const prompt = ChatPromptTemplate.fromMessages([
    [
      'system',
      `
     Aanswer the users question: {input}.
     Draw answers from from your knowledge base: {context}
     Always add a divider line (*---------------*)  below your answer, so that it is easier to read.
     `,
    ],
  ]);

  const loader = new CheerioWebBaseLoader(
    'https://www.interactrdt.com'
  );

  const spliter = new RecursiveCharacterTextSplitter({
    chunkSize: 300,
    chunkOverlap: 50,
  });

  const getRetriever = async (docs: any[]) => {
    const store = await MemoryVectorStore.fromDocuments(docs, embeddings);
    return store.asRetriever({k:10});
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

  return await retrievalChain.invoke({ input });
};
