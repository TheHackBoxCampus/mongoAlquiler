import conx from "../config/db.js";

const clientSpecific = async (req, res) => {
    try {
        let db = await conx(); 
        let id = req.params.id; 
    
        if(isNaN(id)) throw "Parametro no es un entero!"
        else {
            let collection = await db.collection("cliente");
            let CA = await collection.find({ DNI: id }).toArray(); 
            res.status(200).send(CA)
        }
    }catch (err) {
        res.status(500).send({status: 500, message: err})
    }
}

export default clientSpecific; 