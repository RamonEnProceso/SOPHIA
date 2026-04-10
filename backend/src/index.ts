import express from 'express';
import 'dotenv/config';
import { config } from './config';
import { initApp } from './bootstrap/initApp';
import { setupChatRoutes } from './routes/chatRoutes';
import { ChatController } from './controllers/chatController';
import { ChatService } from './services/chatService';
import { OllamaAdapter } from './ai/adapters/ollamaAdapter';
import { errorHandler } from './middlewares/errorHandler';

const initServer = async () => {
  try {
    const { knowledgeRepo } = await initApp();

    const app = express();
    app.use(express.json());

    // Dependency Injection
    const ollamaAdapter = new OllamaAdapter();
    const chatService = new ChatService(ollamaAdapter, ollamaAdapter, knowledgeRepo);
    const chatController = new ChatController(chatService);

    // Rutas
    app.use('/api/v1', setupChatRoutes(chatController));

    // Health check
    app.get('/health', (req, res) => res.send('OK'));

    // Error handling
    app.use(errorHandler);

    app.listen(config.port, () => {
      console.log(`Servidor corriendo en puerto ${config.port}`);
    });
  } catch (err) {
    console.error('Error al iniciar servidor:', err);
    process.exit(1);
  }
};

initServer();