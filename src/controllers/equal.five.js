import conx from "../config/db.js";

const equalFive = async (req, res) => {
    const db = await conx();
    const collection = await db.collection("automovil");
    let CA = await collection.aggregate([
        {
            $match: {
                capacidad: {$eq: 5}     
            }
        }
    ]).toArray();
    res.status(200).send(CA);
}

export default equalFive; 