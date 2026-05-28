import httpx
from app.ai.sophia_identity import load_sophia_identity
from app.services.memory_service import load_memory

async def send_ollama(text: str, system: str = ""):
    
    system = load_sophia_identity()
    
    historial = str(load_memory()[-5::])
    
    prompt = {
            "model": "qwen3.5:9b",
            "prompt": historial + '{"user_message":'+text+'}',
            "system": system,
            "stream": False,
            "think": False
        }
    
    async with httpx.AsyncClient(timeout=180.0) as client:
        response = await client.post("http://localhost:11434/api/generate", json=prompt)
        data = response.json()
    
    return data["response"]