import { Router } from 'express';
import { ChatController } from '../controllers/chatController';

const router = Router();

export const setupChatRoutes = (chatController: ChatController) => {
  router.post('/chat', chatController.handleChat.bind(chatController));
  return router;
};