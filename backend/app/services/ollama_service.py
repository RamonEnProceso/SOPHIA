import httpx
from app.ai.sophia_identity import load_sophia_identity

async def send_ollama(text: str, system: str = ""):
    
    system = load_sophia_identity()
    
    prompt = {
            "model": "qwen3.5:9b",
            "prompt": text,
            "system": system,
            "stream": False,
            "think": False
        }
    
    async with httpx.AsyncClient(timeout=180.0) as client:
        response = await client.post("http://localhost:11434/api/generate", json=prompt)
        data = response.json()
    return data["response"]