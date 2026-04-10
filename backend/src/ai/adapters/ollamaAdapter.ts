import { Ollama } from 'ollama';
import { IEmbeddingProvider, IAIProvider } from '../../models/ai';
import { config } from '../../config';
import systemPrompt from '../sophia.identity'; // Mover a ai/

export class OllamaAdapter implements IEmbeddingProvider, IAIProvider {
  private ollama: Ollama;

  constructor() {
    this.ollama = new Ollama({ host: config.ollama.baseUrl });
  }

  async generateEmbedding(text: string): Promise<number[]> {
    const res = await this.ollama.embeddings({
      model: config.ollama.embeddingModel,
      prompt: text,
    });
    return res.embedding;
  }

  async generateResponse(prompt: string, context: string): Promise<string> {
    const response = await fetch(`${config.ollama.baseUrl}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: config.ollama.chatModel,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `
Usá SOLO esta información para responder. No agregues nada que no esté aquí:

${context}

Pregunta: ${prompt}
`.trim() },
        ],
        think: false,
        stream: false,
      }),
    });
    const data = await response.json();
    return data.message.content;
  }
}