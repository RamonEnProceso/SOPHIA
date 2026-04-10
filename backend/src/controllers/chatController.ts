import { Request, Response } from 'express';
import { ChatService } from '../services/chatService';
import { ChatRequest } from '../models/chat';

export class ChatController {
  constructor(private chatService: ChatService) {}

  async handleChat(req: Request, res: Response): Promise<void> {
    const { prompt }: ChatRequest = req.body;

    if (!prompt || typeof prompt !== 'string') {
      res.status(400).json({ error: 'Prompt requerido y debe ser string' });
      return;
    }

    try {
      const reply = await this.chatService.processChat(prompt);
      res.json({ reply });
    } catch (error) {
      console.error('Error en chat:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}