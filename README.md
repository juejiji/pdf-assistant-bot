
# PDF Assistant Bot using GPT-4 & LangChain

Leverage the capabilities of GPT-4 API to construct a chatbot for managing Large PDF files (an example with 56 pages is incorporated).

The technologies utilized in this project include LangChain, Pinecone, Typescript, Openai, and Next.js. LangChain facilitates the development of scalable AI/LLM applications and chatbots whereas Pinecone serves as the vectorstore for storing embeddings and your PDF in text for future retrieval of similar documents.

For guidance, you can refer to the [Tutorial video](https://www.youtube.com/watch?v=ih9PBGVVOO4)

You're welcome to [Get in touch via twitter if you have questions](https://twitter.com/mayowaoshin)

The visual guide of this repository and tutorial can be found in the `visual guide` folder.

In case you face any issues, kindly refer to the troubleshooting section available further down this page.

## Development

Please follow the steps below:

1. Clone the repository

```
git clone [github https url]
```

2. Install packages

```
pnpm install
```

3. Set up your `.env` file

- Use `.env.example` as a guide to create `.env`
  The contents in your `.env` file should look like this:

```
OPENAI_API_KEY=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=
```

- Retrieve API keys from [openai](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) and [pinecone](https://pinecone.io/).

4. Replace the `PINECONE_INDEX_NAME` and `PINECONE_NAME_SPACE` in the `config` folder with your own details from your Pinecone dashboard.

5. Adjust the `QA_PROMPT` in `utils/makechain.ts` for your own usecase. Change `modelName` in `new OpenAIChat` to a different API model if you don't have access to `gpt-4`. Refer to [the OpenAI docs](https://platform.openai.com/docs/models/model-endpoint-compatibility) for a list of supported `modelName`s. For instance, you could use `gpt-3.5-turbo` if you do not have access to `gpt-4`.

## Convert your PDF to embeddings

Follow the instructions mentioned below:

1. Replace the pdf in the `docs` folder with your own document.

2. Replace `filePath` in `scripts/ingest-data.ts` with `docs/{yourdocname}.pdf`

3. Run the `pnpm run ingest` command to 'ingest' and embed your documents

4. Cross-verify from your Pinecone dashboard that your namespace and vectors have been added.

## Run the app

Once you have confirmed that the embeddings and content have been successfully added to Pinecone, you can run `pnpm run dev` to start the local development setup. Then, go ahead and type your query in the chat interface.

## Troubleshooting

Refer to the `issues` and `discussions` section of this repository for any solutions.

**General errors**

- Ensure that you're running the recent Node version.
- Confirm that you're using the compatible versions of LangChain and Pinecone.
- Check if you've added all your valid API keys in the `.env` file.
- If you change `modelName` in `OpenAIChat`, ensure that the correct name of the alternative model is `gpt-3.5-turbo`
- Keep replenishing API requests to Pinecone to reset the index deletion counter for inactive users using the Starter(free) plan.

**Pinecone errors**

- Make sure your Pinecone dashboard `environment` and `index` match the details in your `config` folder.
- Ensure that the vector dimensions are set to `1536`.
- Switch the Pinecone environment to `us-east1-gcp` in case of any issues with the existing one.

If all these actions fail to resolve the problem, delete `node_modules`, restart your system, then run `pnpm install` again.

## Credit

The frontend of this project is inspired by [langchain-chat-nextjs](https://github.com/zahidkhawaja/langchain-chat-nextjs).
