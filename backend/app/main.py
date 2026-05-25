from fastapi import FastAPI
from app.routers.status import router as status_router
from app.routers.chat import router as chat_router

app = FastAPI()

@app.get("/")
def read_root():
    return {"status":"online"}


app.include_router(status_router)
app.include_router(chat_router)