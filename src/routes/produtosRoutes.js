import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get("/produtos", ProdutoController.listarProdutos);
routes.get("/produtos/:id", ProdutoController.listarProdutoPorId);
routes.post("/produtos", ProdutoController.cadastrarProdutos);
routes.put("/produtos/:id", ProdutoController.atualizarProdutoPorId);
routes.delete("/produtos/:id", ProdutoController.deletarProduto);

export default routes;