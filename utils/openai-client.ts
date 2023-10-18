import { OpenAI } from 'langchain/llms';

if (!process.env.OPENAI_API_KEY) {
  thro