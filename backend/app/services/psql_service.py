from dotenv import load_dotenv
import psycopg
import os

load_dotenv()

def get_connection ():
    
    try:
        conn = psycopg.connect(
            host=os.getenv("POSTGRES_HOST"),
            port=os.getenv("POSTGRES_PORT"),
            dbname=os.getenv("POSTGRES_DB"),
            user=os.getenv("POSTGRES_USER"),
            password =os.getenv("POSTGRES_PASSWORD")
        )
    
        return conn
    except KeyError:
        print("No se encontraron los valores correspondientes en el .env")
    
