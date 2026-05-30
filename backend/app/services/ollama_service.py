import httpx
import os
from dotenv import load_dotenv
from app.ai.sophia_identity import load_sophia_identity
from app.services.memory_service import load_memory

load_dotenv()
ollama_host = os.getenv("OLLAMA_HOST")

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
        response = await client.post(ollama_host, json=prompt)
        data = response.json()
    
    return data["response"]