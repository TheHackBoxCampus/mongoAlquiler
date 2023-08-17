import conx from "../config/db.js";

const searchAllClients = async (req, res) => {
    let db = await conx(); 
    let documentClients = await db.collection("cliente");
    let consultClients = await documentClients.find().toArray(); 
    res.status(200).send(consultClients)
}

export default searchAllClients; 