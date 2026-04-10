import { KnowledgeRepository } from '../repositories/knowledgeRepository';

export const initApp = async () => {
  const knowledgeRepo = new KnowledgeRepository();
  await knowledgeRepo.initCollection();
  return { knowledgeRepo };
};