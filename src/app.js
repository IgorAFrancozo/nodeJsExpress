import express from "express";
import conectaNaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js"
import finalhandler from "finalhandler";

const app = express();

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão::", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco realizado com sucesso");
})

routes(app);

app.use((err, req, res, next) => {
    const errorHandler = finalhandler(req, res);
    errorHandler(err);
});

export default app;
