import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONECTION_KEY);
    return mongoose.connection;
}

export default conectaNaDatabase;