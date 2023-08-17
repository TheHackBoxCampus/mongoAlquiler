import conx from "../config/db.js";

const bookingSpecificClient = async (req, res) => {
    try {
        let db = await conx(); 
        let nm = req.params.nombre; 
    
        if(!/^[a-z A-Z]+$/.test(nm)) throw "EL nombre no cumple con los requisitos"
        else {
            let collection = await db.collection("reserva");
            let CA = await collection.aggregate([
                {
                  $lookup: {
                    from: "cliente",
                    localField: "ID_cliente",
                    foreignField: "_id",
                    as: "cliente_r",
                  },
                },
                {
                  $unwind: "$cliente_r",
                },
                {
                  $project: {
                    Estado: 1,
                    fecha_inicio: 1,
                    cliente_r: { nombre: 1, apellido: 1, DNI: 1 },
                  },
                },
                {
                  $match: {
                    "cliente_r.nombre": nm, // cliente especifico
                    Estado: "Realizado",
                  },
                },
              ]).toArray(); 
            res.status(200).send(CA)
        }
    }catch (err) {
        res.status(500).send({status: 500, message: err})
    }
}

export default bookingSpecificClient; 