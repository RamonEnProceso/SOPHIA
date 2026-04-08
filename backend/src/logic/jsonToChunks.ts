import fs from "fs";

interface KnowledgeItem {
    id: string;
    type?: string;        
    category?: string;    
    content: string;
    tags: string[];
    importance: number;
    confidence?: number;
    intensity?: number | null;
}


interface KnowledgeFile {
    domain: string;
    description: string;
    items: KnowledgeItem[];
}

const jsonToChunks = (path: string): string[] => {

    const raw = fs.readFileSync(path, "utf-8");
    const data: KnowledgeFile = JSON.parse(raw);

    return data.items.map((item) => {
        return [
            `tipo: ${item.type ?? item.category ?? "general"}`, 
            `contenido: ${item.content}`,
            `tags: ${item.tags.join(", ")}`,
            `importancia: ${item.importance}`,
            item.confidence ? `confianza: ${item.confidence}` : null,
        ]
        .filter(Boolean)
        .join("\n");
    });
};

export default jsonToChunks;