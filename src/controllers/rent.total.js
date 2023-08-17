import conx from "../config/db.js";

const rentTotal = async (req, res) => {
    let db = await conx(); 
    let collection = await db.collection("alquiler");
    let consult = await collection.aggregate([
        {
            $group: {
                _id: null,
                total_alquileres: {$sum: 1}
            }
        },
        {
            $project: {
                _id: 0,
                total_alquileres: 1
            }
        }   
    ]).toArray();
    res.status(200).send(consult)
}

export default rentTotal; 