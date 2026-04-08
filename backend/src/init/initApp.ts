import initCollection from "./initCollection";

const initApp =  async () => {
    try{
        const collection  = await initCollection();
        
        return { collection }
    }catch(err){
        console.log(err)
        console.log("Algo salió mal al cargar la collection")
        throw err
    }
}

export default initApp