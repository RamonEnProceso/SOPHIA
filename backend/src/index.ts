import express  from "express";
import 'dotenv/config'
import systemPrompt from "./ai/sophia.identity";
import initApp from "./init/initApp";

const initServer = async () => {

    try{
        const {collection} = await initApp()

    const app = express();
    app.use(express.json())

    app.get("/",(req,res)=>{
        res.send("Hola Mundo")
    })

    app.post("/chat", async (req,res) =>{
    
        const { prompt } = req.body;

        if (!prompt){
            return res.status(400).json({ error: "El mensaje es obligatorio" });
        }

        try{

            const {Ollama} = await import("ollama");
            const ollama = new Ollama()

            const queryEmbedding = await ollama.embeddings({
                model: "nomic-embed-text",
                prompt: prompt,
            });

            const relevant = await collection.query({
                queryEmbeddings: [queryEmbedding.embedding],
                nResults: 3,
            });

            const context = relevant.documents[0].join("\n\n");

            const response = await fetch("http://localhost:11434/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "qwen3.5:9b",
                    messages: [{ role: "system", content: systemPrompt },
                            { role: "user",   content: `
Usá SOLO esta información para responder. No agregues nada que no esté aquí:

${context}

Pregunta: ${prompt}
`.trim()}],
                    think: false,
                    stream: false,
                }),
            });

            const data = await response.json();

            res.json({
                reply: data.message.content,
            });


        }catch(error){

            console.error(error);
            res.status(500).json({error:"Algo salió mal"})

        }

    })




    app.listen(3000, ()=>{

        console.log("Servidor corriendo en puerto 3000")
    })
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }

}

initServer();