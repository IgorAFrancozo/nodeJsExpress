import mongoose from "mongoose";
import Categorias from "./enum/categorias.js";

const produtoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    descricao: {type: String, required: true},
    marca: {type: String, required: true},
    preco: {type: Number, required: true},
    categoria: {type: String, enum: Object.values(Categorias), required: true}
}, {versionKey: false});

const Produto = mongoose.model("produtos", produtoSchema);

export default Produto;