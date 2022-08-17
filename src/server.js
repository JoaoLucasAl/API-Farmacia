import express from "express";
import bd from './data/sqlite3-db.js'
import FuncionarioController from "./controllers/funcionarios.js";
import RemediosController from "./controllers/remedios.js";
import ClienteController from "./controllers/clientes.js";
import VendaController from "./controllers/vendas.js";

const app = express();

app.use(express.json());

FuncionarioController(app, bd)
RemediosController(app, bd)
ClienteController(app, bd)
VendaController(app, bd)

app.listen(8000, () => {
    console.log("Servidor rodando em: http://localhost:8000")
});