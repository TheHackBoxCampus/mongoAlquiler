import conx from "../config/db.js";

const bookingEarring = async (req, res) => {
    const db = await conx();
    const s = await db.collection("reserva");

    // ? Obtener todos los automóviles disponibles para alquiler
    let CA = await s.aggregate([
        {
          $match: { Estado: "pendiente" }, // * <- Estado pendiente
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
          $unwind: "$clienteR",
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
          $unwind: "$automovilR",
        },
        {
          $project: {
            _id: 0,
            Estado: 1,
            clienteR: { nombre: 1, apellido: 1, email: 1 },
            automovilR: { Anio: 1, modelo: 1, marca: 1 },
          },
        },
      ]).toArray();
      res.status(200).send(CA); 
}

export default bookingEarring; 