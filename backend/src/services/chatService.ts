import { IEmbeddingProvider } from '../models/ai';
import { IAIProvider } from '../models/ai';
import { KnowledgeRepository } from '../repositories/knowledgeRepository';

export class ChatService {
  constructor(
    private embeddingProvider: IEmbeddingProvider,
    private aiProvider: IAIProvider,
    private knowledgeRepo: KnowledgeRepository
  ) {}

  async processChat(prompt: string): Promise<string> {
    const embedding = await this.embeddingProvider.generateEmbedding(prompt.toLowerCase());
    const context = (await this.knowledgeRepo.queryRelevantDocuments(embedding)).join('\n\n');
    return await this.aiProvider.generateResponse(prompt, context);
  }
}