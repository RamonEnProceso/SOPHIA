from fastapi import FastAPI
from routers.status import router as status_router

app = FastAPI()

@app.get("/")
def read_root():
    return {"status":"online"}

app.include_router(status_router)