import express  from "express";

const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.post("/chat",(req,res)=>{
    res.json(req.body)
})

app.listen(3000, ()=>{
    console.log("Servidor corriendo en puerto 3000")
})

