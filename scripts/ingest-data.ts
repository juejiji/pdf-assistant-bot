
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { PineconeStore } from 'langchain/vectorstores';
import { pinecone } from '@/utils/pinecone-client';
import { PDFLoader } from 'langchain/document_loaders';
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from '@/config/pinecone';

/* Name of directory to retrieve files from. You can change this as required */
const filePath = 'docs/MorseVsFrederick.pdf';

export const run = async () => {
  try {
    /*load raw docs from the pdf file in the directory */
    const loader = new PDFLoader(filePath);
    // const loader = new PDFLoader(filePath);
    const rawDocs = await loader.load();