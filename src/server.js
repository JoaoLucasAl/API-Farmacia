import express from "express";
import bd from "./data/sqlite3-db.js";
import FuncionarioController from "./controllers/funcionarios.js";
import RemediosController from "./controllers/remedios.js";
import ClienteController from "./controllers/clientes.js";
import VendasController from "./controllers/vendas.js";
import cors from "cors";
// const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({ origin: '*' }));

FuncionarioController(app, bd);
RemediosController(app, bd);
ClienteController(app, bd);
VendasController(app, bd);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
