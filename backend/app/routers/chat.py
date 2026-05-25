from fastapi import APIRouter
from app.models.message import Message
from app.services.ollama_service import send_ollama

router = APIRouter()

@router.post("/chat")
async def send_chat(message: Message):
    user_msg = message.text
    
    response = await send_ollama(user_msg)
    
    return {
        "user_message": user_msg,
        "sophia_response": response
    }