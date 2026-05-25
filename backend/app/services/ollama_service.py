import httpx

async def send_ollama(text: str):
    prompt = {
            "model": "qwen3.5:9b",
            "prompt": text,
            "stream": False,
            "think": False
        }
    
    async with httpx.AsyncClient(timeout=180.0) as client:
        response = await client.post("http://localhost:11434/api/generate", json=prompt)
        data = response.json()
    return data["response"]