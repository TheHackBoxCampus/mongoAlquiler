import conx from "../config/db.js";

const availablesCars = async (req, res) => {
    const db = await conx();
    const s = await db.collection("sucursal");

    // ? Mostrar la cantidad total de automóviles "disponibles" en cada sucursal.
    let CA = await s.aggregate([
        {
          $lookup: {
            from: "sucursal_automovil",
            localField: "_id",
            foreignField: "sucursal_id",
            as: "sucursal",
          },
        },
        {
          $unwind: "$sucursal",
        },
        {
          $group: {
            _id: "$nombre",
            Cantidad: { $sum: "$sucursal.cantidad_disponible" },
          },
        },
      ]).toArray();
    res.status(200).send(CA);
}

export default availablesCars; 