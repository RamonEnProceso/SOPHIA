from pathlib import Path

def load_sophia_identity():
    
    path = Path(__file__).parent / "identity.md"
    
    with open(path, 'r', encoding="utf-8") as file:
        content = file.read()
    return content

def dload_sophia_dialect():
    
    path = Path(__file__).parent / "dialect.md"
    
    with open(path, 'r', encoding="utf-8") as file:
        content = file.read()
    return content