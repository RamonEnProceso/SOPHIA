import { Request, Response, NextFunction } from 'express';

export const validateChatRequest = (req: Request, res: Response, next: NextFunction) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt requerido' });
  }
  next();
};