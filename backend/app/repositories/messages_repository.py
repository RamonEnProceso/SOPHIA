from app.services.psql_service import get_connection
import psycopg

def get_messages():
    
    conn = get_connection()
    
    try:
        with conn.cursor() as curs:
            curs.execute("SELECT * FROM messages")
            rows = curs.fetchall()
        return rows
    
    except (Exception, psycopg.Error) as err:
        print(err)
        
    finally:
        conn.close()

def insert_message(
    user_id,
    user_message,
    sophia_response 
):
    conn = get_connection()
    
    try:
        with conn.cursor() as curs:
            curs.execute(
                "INSERT INTO messages (user_id, user_message, sophia_response) VALUES (%s, %s, %s)",
                (user_id,user_message,sophia_response)
            )
        conn.commit()
    
    except (Exception, psycopg.Error) as err:
        print(err)
        
    finally:
        conn.close()
        
def delete_message(id):
    conn = get_connection()
    
    try:
        with conn.cursor() as curs:
            curs.execute("DELETE FROM messages WHERE id = %s",(id,))
        conn.commit()
    
    except (Exception, psycopg.Error) as err:
        print(err)
        
    finally:
        conn.close()

if __name__ == "__main__":
    print(get_messages())