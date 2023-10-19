import express from "express";
import Produtos from "./produtosRoutes.js";
import Estabelecimento from "./estabelecimentosRoutes.js";
import {swaggerSpec, swaggerUi} from "../config/swagger.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Node.js Express"));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.use(express.json(), Produtos, Estabelecimento);
};

export default routes;