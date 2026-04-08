import { ChromaClient } from "chromadb";
import path from "path";
import fs from "fs";
import jsonToChunks from "../logic/jsonToChunks";
import embedTexts from "../logic/embedTexts";
import getJsonFiles from "../logic/getJsonFiles";

const chroma = new ChromaClient();

const initCollection = async () => {

    try {
        await chroma.deleteCollection({ name: "mi_coleccion" });
    } catch (_) {}

    const collection = await chroma.getOrCreateCollection({
        name: "mi_coleccion",
        embeddingFunction: undefined,
    });

    const knowledgeDir = path.resolve("src/ai/knowledge");
    const allFiles = getJsonFiles(knowledgeDir);
    console.log(`🗂️ ${allFiles.length} archivos encontrados`);

    let allChunks: string[] = [];

    for (const file of allFiles) {
        const chunks = jsonToChunks(file);
        console.log(`📄 ${path.basename(file)}: ${chunks.length} chunks`);
        allChunks = [...allChunks, ...chunks];
    }

    console.log(`📦 Total: ${allChunks.length} chunks`);

    const embeddings = await embedTexts(allChunks);
    console.log("🔢 Embeddings generados");

    await collection.add({
        ids: allChunks.map((_, i) => `chunk_${i}`),
        embeddings,
        documents: allChunks,
    });

    console.log("✅ Índice creado");
    return collection;
};

export default initCollection;