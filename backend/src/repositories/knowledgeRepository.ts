import { ChromaClient } from 'chromadb';
import { config } from '../config';
import getJsonFiles from '../utils/getJsonFiles';
import jsonToChunks from '../utils/jsonToChunks';
import embedTexts from '../utils/embedTexts';

export class KnowledgeRepository {
  private chroma: ChromaClient;
  private collection: any; // Tipar mejor si ChromaDB lo permite

  constructor() {
    this.chroma = new ChromaClient({ path: `http://${config.chromadb.host}:${config.chromadb.port}` });
  }

  async initCollection(): Promise<void> {
    try {
      await this.chroma.deleteCollection({ name: 'mi_coleccion' });
    } catch {}

    this.collection = await this.chroma.getOrCreateCollection({
      name: 'mi_coleccion',
      embeddingFunction: undefined,
    });

    const allFiles = getJsonFiles(config.knowledgeDir);
    console.log(`🗂️ ${allFiles.length} archivos encontrados`);

    let allChunks: string[] = [];
    for (const file of allFiles) {
      const chunks = jsonToChunks(file);
      console.log(`📄 ${require('path').basename(file)}: ${chunks.length} chunks`);
      allChunks = [...allChunks, ...chunks];
    }

    console.log(`📦 Total: ${allChunks.length} chunks`);
    const embeddings = await embedTexts(allChunks);
    console.log('🔢 Embeddings generados');

    await this.collection.add({
      ids: allChunks.map((_, i) => `chunk_${i}`),
      embeddings,
      documents: allChunks,
    });

    console.log('✅ Índice creado');
  }

  async queryRelevantDocuments(embedding: number[], nResults: number = 5): Promise<string[]> {
    const relevant = await this.collection.query({
      queryEmbeddings: [embedding],
      nResults,
    });
    return relevant.documents[0];
  }
}