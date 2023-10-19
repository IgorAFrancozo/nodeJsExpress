import {Estabelecimento} from "../models/Estabelecimento.js";

class EstabelecimentoController {

    static async listarEstabelecimentos(req, res) {
        try {
            const listaEstabelecimentos = await Estabelecimento.find({});
            res.status(200).json(listaEstabelecimentos);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        }
    }

    static async listarEstabelecimentoPorId(req, res) {
        try {
            const id = req.params.id;
            const estabelecimentoEncontrado = await Estabelecimento.findById(id);
            res.status(200).json(estabelecimentoEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição do estabelecimento`});
        }
    }

    static async cadastrarEstabelecimento(req, res) {
        try {
            const novoEstabelecimento = await Estabelecimento.create(req.body);
            res.status(201).json({message: "Criado com sucesso", estabelecimento: novoEstabelecimento});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar estabelecimento`});
        }
    }

    static async atualizarEstabelecimentoPorId(req, res) {
        try {
            const id = req.params.id;
            await Estabelecimento.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Estabelecimento atualizado com sucesso"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição do estabelecimento`});
        }
    }

    static async deletarEstabelecimento(req, res){
        try {
            const id = req.params.id;
            await Estabelecimento.findByIdAndDelete(id);
            res.status(204).json({message: "Estabelecimento deletado com sucesso"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na exclusão do estabelecimento`});
        }
    }
}

export default EstabelecimentoController;