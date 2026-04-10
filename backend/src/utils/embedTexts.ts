import { Ollama } from "ollama";

const ollama = new Ollama();

const embedTexts = async (texts: string[]): Promise<number[][]> => {
    const embeddings: number[][] = [];

    for (const text of texts) {
        const res = await ollama.embeddings({
            model: "nomic-embed-text",
            prompt: text,
        });
        embeddings.push(res.embedding);
    }

  return embeddings;
}

export default embedTexts;