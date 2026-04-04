import express  from "express";
import 'dotenv/config'
import systemPrompt from "./iaPrompt";

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

    const finalPrompt = `
    ${systemPrompt}
    
    Usuario: ${prompt}
    SOPHIA:
    `;

    console.log(finalPrompt);

    try{

        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama3",
                prompt: finalPrompt,
                stream: false,
            }),
        });

        const data = await response.json();

        res.json({
            reply: data.response,
        });


    }catch(error){

        console.error(error);
        res.status(500).json({error:"Algo salió mal"})

    }

})




app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000")
})

