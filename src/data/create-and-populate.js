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

  const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "NOME" varchar(64),
  "EMAIL" varchar(64),
  "TELEFONE" varchar(64),
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

const VENDAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "VENDAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "REMEDIO_ID" int,
    "QUANTIDADE" int,
    "PRECO" float,
    "DESCONTO" varchar(64),
    "FUNCIONARIO_ID" int,
    "CLIENTE_ID" int
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



const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (NOME, EMAIL, TELEFONE, CPF)
VALUES 
    ('Lucas Ribeiro', 'lllucas312@gmail.com', '99485165', '01148151643'),
    ('Leonardo Matias', 'leomatias12zz@gmail.com', '994897438', '3211681580'),
    ('Patrick Dias', 'patrick.dias@gmail.com', '998543833', '5629248620'),
    ('Bruno Vianna', 'bruuu.viana@gmail.com', '988463610', '05644364780')
    `;

const ADD_VENDAS_DATA = `
INSERT INTO VENDAS (REMEDIO_ID, QUANTIDADE, PRECO, DESCONTO, FUNCIONARIO_ID, CLIENTE_ID)
VALUES
    ( 6, 2, 22.34, '5%', 2, 1)
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

function criaTabelaClientes() {
  db.run(CLIENTES_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Clientes");
  });
}

function populaTabelaClientes() {
  db.run(ADD_CLIENTES_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de Clientes");
  });
}

function criaTabelaVendas() {
  db.run(VENDAS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Vendas");
  });
}

function populaTabelaVendas() {
  db.run(ADD_VENDAS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de Vendas");
  });
}

db.serialize(() => {
  criaTabelaFuncionarios();
  criaTabelaRemedios();
  criaTabelaClientes();
  criaTabelaVendas();
  populaTabelaFuncionarios();
  populaTabelaRemedios();
  populaTabelaClientes();
  populaTabelaVendas();
});
