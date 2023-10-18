import express from "express";
import Produtos from "./produtosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Node.js Express"));
    app.use(express.json(), Produtos)
};

export default routes;