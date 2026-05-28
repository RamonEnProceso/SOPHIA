from pathlib import Path
import json

path = Path(__file__).resolve().parent.parent.parent / "data" / "history.json"

def load_memory():
    
    try:
        with open(path, 'r', encoding="utf-8") as file:
            content = json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        content = []
    
    return content

def save_memory(memory, new_chat):
    
    memory.append(new_chat)
    
    with open(path, 'w', encoding="utf-8") as file:
        json.dump(memory, file, ensure_ascii=False, indent=4)
    
    return


def append_new(new):
    return load_memory().append(new)