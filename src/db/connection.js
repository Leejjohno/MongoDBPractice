require("dotenv").config();
const { MongoClient } = require ("mongodb")

const client = new MongoClient(process.env.MONGO_URI);

exports.connection = async () => {
    try {
        await client.connect();
        const db = client.db("Movies");
        return db.collection("Movie");
    } catch (error) {
        console.log(error);
    }
}

// ---------Don't Touch This Stuff. It Works.-----------------------