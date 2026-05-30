from pathlib import Path
from app.models.chat import chat
from app.repositories.messages_repository import insert_message
import json

path = Path(__file__).resolve().parent.parent.parent / ".." / "data" / "history.json"

def load_memory():
    
    try:
        with open(path, 'r', encoding="utf-8") as file:
            content = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        content = []
    
    return content

def save_memory(memory, new_chat: chat):
    
    memory.append(new_chat)
    
    insert_message(1, new_chat["user_message"], new_chat["sophia_response"])
    
    with open(path, 'w', encoding="utf-8") as file:
        json.dump(memory, file, ensure_ascii=False, indent=4)
    
    return
