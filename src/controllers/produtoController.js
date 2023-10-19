import Produto from "../models/Produto.js";
import {Estabelecimento} from "../models/Estabelecimento.js"
class ProdutoController {

    static async listarProdutos(req, res) {
        try {
            const listaProdutos = await Produto.find({});
            res.status(200).json(listaProdutos);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        }
    }

    static async listarProdutoPorId(req, res) {
        try {
            const id = req.params.id;
            const produtoEncontrado = await Produto.findById(id);
            res.status(200).json(produtoEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição do produto`});
        }
    }

    static async cadastrarProduto(req, res) {
        const novoProduto = req.body;
        try {
            const estabelecimentoEncontrado = await Estabelecimento.findById(novoProduto.estabelecimento);
            const produtoCompleto = {...novoProduto, estabelecimento: {...estabelecimentoEncontrado._doc}}
            const produtoCriado = await Produto.create(produtoCompleto)
            res.status(201).json({message: "Criado com sucesso", produto: produtoCriado});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar produto`});
        }
    }

    static async atualizarProdutoPorId(req, res) {
        try {
            const id = req.params.id;
            await Produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Produto atualizado com sucesso"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição do produto`});
        }
    }

    static async deletarProduto(req, res) {
        try {
            const id = req.params.id;
            await Produto.findByIdAndDelete(id);
            res.status(204).json({message: "Produto deletado com sucesso"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na exclusão do produto`});
        }
    }
}

export default ProdutoController;