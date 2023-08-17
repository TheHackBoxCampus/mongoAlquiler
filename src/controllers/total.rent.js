import conx from "../config/db.js";

const totalRent = async (req, res) => {
    try {
        let db = await conx(); 
        let id = req.params.id; 
    
        if(isNaN(id)) throw "Parametro no es un entero!"
        else {
            let collection = await db.collection("alquiler");
            let CA = await collection.aggregate([
                {
                  $match: { _id: Number(id) }, // * ID especifico
                },
                {
                  $lookup: {
                    from: "cliente",
                    localField: "ID_cliente",
                    foreignField: "_id",
                    as: "clienteR",
                  },
                },
                {
                  $lookup: {
                    from: "automovil",
                    localField: "ID_automovil",
                    foreignField: "_id",
                    as: "automovilR",
                  },
                },
                {
                  $unwind: "$clienteR",
                },
                {
                  $project: {
                    _id: 0,
                    costo_total: 1,
                    estado: 1,
                    clienteR: { nombre: 1, apellido: 1 },
                  },
                },
              ]).toArray(); 
            res.status(200).send(CA)
        }
    }catch (err) {
        res.status(500).send({status: 500, message: err})
    }
}

export default totalRent; 