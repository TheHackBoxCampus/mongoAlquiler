import conx from "../config/db.js";

const betweenDate = async (req, res) => {
    const db = await conx();
    const collection = await db.collection("alquiler");

    let CA = await collection.aggregate([
        {
            $match: {
                fecha_inicio: {
                    $gte: new Date('2023-07-05'),
                    $lt: new Date('2023-07-10')
                }
            }
        },
        {
            $project: {
                _id: 0,
                fecha_inicio: 1,
                fecha_fin: 1,
                costo_total: 1,
                estado: 1
            }
        }
    ]).toArray(); 
    res.status(200).send(CA);
}

export default betweenDate; 