import express  from "express";
import 'dotenv/config'
import Anthropic from "@anthropic-ai/sdk";

const app = express();
app.use(express.json())

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.post("/chat", async (req,res) =>{
   
    const { message } = req.body;

    if (!message){
        return res.status(400).json({ error: "El mensaje es obligatorio" });
    }

    try{

        const response = await client.messages.create({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 1024,
            messages: [{ role: "user", content: message }]
        })

        return res.json(response.content[0])

    }catch(error){

        console.error(error);
        res.status(500).json({error:"Algo salió mal"})

    }

})




app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000")
})

