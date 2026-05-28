from fastapi import APIRouter
from app.models.message import Message
from app.services.ollama_service import send_ollama

from app.services.memory_service import load_memory, save_memory

router = APIRouter()

@router.post("/chat")
async def send_chat(message: Message):
    user_msg = message.text
    
    response = await send_ollama(user_msg)
    
    response_obj = {
        "user_message": user_msg,
        "sophia_response": response
    }
    
    save_memory(load_memory(),response_obj)
    
    return response_obj 