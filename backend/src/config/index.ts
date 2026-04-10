import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  ollama: {
    baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
    embeddingModel: process.env.EMBEDDING_MODEL || 'nomic-embed-text',
    chatModel: process.env.CHAT_MODEL || 'qwen3.5:9b',
  },
  chromadb: {
    host: process.env.CHROMADB_HOST || 'localhost',
    port: process.env.CHROMADB_PORT || 8000,
  },
  knowledgeDir: process.env.KNOWLEDGE_DIR || 'src/ai/knowledge',
};