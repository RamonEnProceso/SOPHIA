export interface IEmbeddingProvider {
  generateEmbedding(text: string): Promise<number[]>;
}

export interface IAIProvider {
  generateResponse(prompt: string, context: string): Promise<string>;
}