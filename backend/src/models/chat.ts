export interface ChatRequest {
  prompt: string;
}

export interface ChatResponse {
  reply: string;
}

export interface KnowledgeItem {
  id: string;
  type?: string;
  category?: string;
  content: string;
  tags: string[];
  importance: number;
  confidence?: number;
  intensity?: number | null;
}

export interface KnowledgeFile {
  domain: string;
  description: string;
  items: KnowledgeItem[];
}