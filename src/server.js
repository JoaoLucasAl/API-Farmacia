import express from "express";
import bd from './data/sqlite3-db'


const app = express();

app.use(express.json());

app.listen(8000, () => {
    console.log("Servidor rodando em: http://localhost:8000")
});