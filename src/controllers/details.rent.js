import conx from "../config/db.js";

const detailsRent = async (req, res) => {
    try {
        let db = await conx(); 
        let id = req.params.id; 
    
        if(isNaN(id)) throw "Parametro no es un entero!"
        else {
            let collection = await db.collection("alquiler");
            let CA = await collection.aggregate([
                {
                  $match: { _id: Number(id)}, // * Id especifico
                },
                {
                  $project: {
                    _id: 0,
                    fecha_inicio: 1,
                    fecha_fin: 1,
                    estado: 1,
                    costo_total: 1,
                  },
                },
              ]).toArray(); 
            res.status(200).send(CA)
        }
    }catch (err) {
        res.status(500).send({status: 500, message: err})
    }
}

export default detailsRent; 