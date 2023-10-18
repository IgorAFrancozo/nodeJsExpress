import express from "express";

const app = express();
app.use(express.json());

const produtos = [
  {
    id: 1,
    nome: "cerveja",
  },
  {
    id: 2,
    nome: "vinho",
  },
];

function buscaProduto(id) {
  return produtos.findIndex((produto) => {
    return produto.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Node.js + Express");
});

app.get("/produtos", (req, res) => {
  res.status(200).json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const index = buscaProduto(req.params.id);
  res.status(200).json(produtos[index]);
});

app.post("/produtos", function (req, res) {
  produtos.push(req.body);
  res.status(201).send("Cadastro de produto realizado");
});

export default app;
