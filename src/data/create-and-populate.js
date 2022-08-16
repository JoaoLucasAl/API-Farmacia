import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/data/farmacia.db");

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" varchar(64),
    "CARGO" varchar(64),
    "CPF" varchar(64)
  );`;

const REMEDIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "REMEDIOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "PRINCIPIO_ATIVO" varchar(64),
    "LABORATORIO" varchar(64),
    "PRECO" float,
    "ESTOQUE" int
  );`;

const ADD_FUNCIONARIOS_DATA = `
INSERT INTO FUNCIONARIOS (NOME, EMAIL, TELEFONE, CARGO, CPF)
VALUES 
    ('João Lucas', 'joao.lucas@gmail.com', '998667248', 'Gerente', '01232114790'),
    ('Rio Ribeiro', 'rio.ribeiro@gmail.com', '994895138', 'Farmaceutico', '32115998780'),
    ('Isadora SantAna', 'isadora.santana@gmail.com', '998620133', 'Fiscal', '14785248620'),
    ('Raíssa Dias', 'raisa.dias@gmail.com', '988138610', 'Atendente', '05821364780')
    `;

const ADD_REMEDIOS_DATA = `
INSERT INTO REMEDIOS (NOME, PRINCIPIO_ATIVO, LABORATORIO, PRECO, ESTOQUE)
VALUES
    ('Neosaldina 30 drágeas', 'Dipirona 300mg, mucato de isometepteno 30mg, cafeína 30mg', 'Takeda', 27.59, 100)
    `;

function criaTabelaFuncionarios() {
  db.run(FUNCIONARIOS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Funcionarios");
  });
}

function criaTabelaRemedios() {
  db.run(REMEDIOS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Remedios");
  });
}

function populaTabelaFuncionarios() {
  db.run(ADD_FUNCIONARIOS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de Funcionarios");
  });
}

function populaTabelaRemedios() {
  db.run(ADD_REMEDIOS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de Remedios");
  });
}

db.serialize(() => {
  criaTabelaFuncionarios();
  criaTabelaRemedios();
  populaTabelaFuncionarios();
  populaTabelaRemedios();
});
