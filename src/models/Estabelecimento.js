import mongoose from "mongoose";

const estabelecimentoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    telefone: {type: Number, required: true},
    horarioDeAtendimento: {type: String, required: true},
    cidade: {type: String, required: true},
    estado: {type: String, required: true},
    cnpj: {type: Number, required: true},
    logradouro: {type: String, required: true}
}, {versionKey: false});

const Estabelecimento = mongoose.model("estabelecimentos", estabelecimentoSchema);

export {Estabelecimento, estabelecimentoSchema};