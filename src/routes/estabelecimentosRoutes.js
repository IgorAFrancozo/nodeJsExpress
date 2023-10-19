import express from "express";
import estabelecimentoController from "../controllers/estabelecimentoController.js";

const routes = express.Router();

routes.get("/estabelecimentos", estabelecimentoController.listarEstabelecimentos);
routes.get("/estabelecimentos/:id", estabelecimentoController.listarEstabelecimentoPorId);
routes.post("/estabelecimentos", estabelecimentoController.cadastrarEstabelecimento);
routes.put("/estabelecimentos/:id", estabelecimentoController.atualizarEstabelecimentoPorId);
routes.delete("/estabelecimentos/:id", estabelecimentoController.deletarEstabelecimento);

/**
 * @swagger
 * tags:
 *   name: Estabelecimentos
 *   description: Operações relacionadas a estabelecimentos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Estabelecimento:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *         endereco:
 *           type: string
 *         telefone:
 *           type: string
 *       required:
 *         - nome
 *         - endereco
 *         - telefone
 */
/**
 * @swagger
 * /estabelecimentos:
 *   get:
 *     summary: Lista todos os estabelecimentos
 *     tags: [Estabelecimentos]
 *     responses:
 *       200:
 *         description: Retorna a lista de estabelecimentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estabelecimento'
 */
/**
 * @swagger
 * /estabelecimentos/{id}:
 *   get:
 *     summary: Retorna um estabelecimento pelo ID
 *     tags: [Estabelecimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do estabelecimento
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna o estabelecimento correspondente ao ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Estabelecimento'
 *       404:
 *         description: Estabelecimento não encontrado
 */
/**
 * @swagger
 * /estabelecimentos:
 *   post:
 *     summary: Cria um novo estabelecimento
 *     tags: [Estabelecimentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estabelecimento'
 *     responses:
 *       201:
 *         description: Estabelecimento criado com sucesso
 *       400:
 *         description: Requisição inválida
 */
/**
 * @swagger
 * /estabelecimentos/{id}:
 *   put:
 *     summary: Atualiza um estabelecimento existente pelo ID
 *     tags: [Estabelecimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do estabelecimento
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Estabelecimento'
 *     responses:
 *       200:
 *         description: Estabelecimento atualizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Estabelecimento não encontrado
 */
/**
 * @swagger
 * /estabelecimentos/{id}:
 *   delete:
 *     summary: Deleta um estabelecimento existente pelo ID
 *     tags: [Estabelecimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do estabelecimento
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Estabelecimento deletado com sucesso
 *       404:
 *         description: Estabelecimento não encontrado
 */

export default routes;