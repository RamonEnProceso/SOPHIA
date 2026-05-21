from fastapi import APIRouter

router = APIRouter()

@router.get("/status")
def read_status():
    return {
            "status": "online", 
            "service": "SOPHIA API", 
            "version": "0.0.1",
            "author": "El Vueltero - Ramón",
            "creation_date": "21/05/2026"
            }