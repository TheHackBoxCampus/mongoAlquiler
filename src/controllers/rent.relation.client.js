import conx from "../config/db.js";

const rentAndClient = async (req, res) => {
    const db = await conx();
    const s = await db.collection("cliente");

    // ? Obtener todos los automóviles disponibles para alquiler
    let CA = await s.aggregate([
        {
          $lookup: {
            from: "alquiler",
            localField: "_id",
            foreignField: "ID_cliente",
            as: "alquiler_cliente",
          },
        },
        {
          $project: {
            _id: 0,
            nombre: 1,
            DNI: 1,
            email: 1,
            "alquiler_cliente.estado": 1,
            "alquiler_cliente.fecha_inicio": 1,
            "alquiler_cliente.fecha_fin": 1,
            "alquiler_cliente.costo_total": 1,
          },
        },
        {
          $match: {
            "alquiler_cliente.estado": { $eq: "realizado" },
          },
        },
      ]).toArray(); 
    res.status(200).send(CA);
}

export default rentAndClient; 