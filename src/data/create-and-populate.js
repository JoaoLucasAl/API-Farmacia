import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./src/data/farmacia.db");

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "ID" uuid PRIMARY KEY,
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" varchar(64),
    "CARGO" varchar(64),
    "CPF" varchar(64)
  );`;

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
  "ID" uuid PRIMARY KEY,
  "NOME" varchar(64),
  "EMAIL" varchar(64),
  "TELEFONE" varchar(64),
  "CPF" varchar(64)
);`;

const REMEDIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "REMEDIOS" (
    "ID" uuid PRIMARY KEY ,
    "NOME" varchar(64),
    "PRINCIPIO_ATIVO" varchar(64),
    "LABORATORIO" varchar(64),
    "PRECO" float,
    "ESTOQUE" int
  );`;

  const VENDAS_SCHEMA = `
  CREATE TABLE IF NOT EXISTS "VENDAS" (
    "ID"	uuid PRIMAR KEY,
    "REMEDIO_ID"	uuid,
    "QUANTIDADE"	float,
    "PRECO"	float,
    "DESCONTO"	float,
    "FUNCIONARIO_ID"	uuid,
    "CLIENTE_ID"	uuid,
    FOREIGN KEY("REMEDIO_ID") REFERENCES "REMEDIOS"("ID"),
    FOREIGN KEY("FUNCIONARIO_ID") REFERENCES "FUNCIONARIOS"("ID"),
    FOREIGN KEY("CLIENTE_ID") REFERENCES "CLIENTES"("ID")
  ); `;



const ADD_FUNCIONARIOS_DATA = `
  INSERT INTO FUNCIONARIOS (ID, NOME, EMAIL, TELEFONE, CARGO, CPF)
  VALUES 
      ('41b5071d-3fae-438b-be7a-7641546aeb82','João Lucas', 'joao.lucas@gmail.com', '998667248', 'Gerente', '01232114790'),
      ('52645d6f-0d85-4a78-845e-dae61c172a46','Rio Ribeiro', 'rio.ribeiro@gmail.com', '994895138', 'Farmaceutico', '32115998780'),
      ('aa931f49-3baf-4f2a-9704-2bdf9dd6cd9d','Isadora SantAna', 'isadora.santana@gmail.com', '998620133', 'Fiscal', '14785248620'),
      ('3e47ed84-5ac4-41d2-bed0-9a64ffd32ad0','Raíssa Dias', 'raisa.dias@gmail.com', '988138610', 'Atendente', '05821364780')
      `;

      const ADD_REMEDIOS_DATA = `
      INSERT INTO REMEDIOS (ID, NOME, PRINCIPIO_ATIVO, LABORATORIO, PRECO, ESTOQUE)
      VALUES
          ('c6bd83f9-74d7-4793-aabc-a8311644fbf6','Neosaldina 30 drágeas', 'Dipirona 300mg, mucato de isometepteno 30mg, cafeína 30mg', 'Takeda', 27.59, 100)
          `;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, EMAIL, TELEFONE, CPF)
VALUES 
    ('88882c64-4aef-47ba-a467-745c4c7cce6b','Lucas Ribeiro', 'lllucas312@gmail.com', '99485165', '01148151643'),
    ('508f5086-dd87-4066-831c-f47ef39138e2','Leonardo Matias', 'leomatias12zz@gmail.com', '994897438', '3211681580'),
    ('20527646-7d36-4b66-ad5b-9c9fe5c8f228','Patrick Dias', 'patrick.dias@gmail.com', '998543833', '5629248620'),
    ('f58d2ba2-a7b9-423f-bcce-dcfc6adc6e93','Bruno Vianna', 'bruuu.viana@gmail.com', '988463610', '05644364780')
    `;


    const ADD_VENDAS_DATA = `
    INSERT INTO VENDAS (id, remedio_id, quantidade, preco, desconto, funcionario_id, cliente_id)
    VALUES 
        ('88882c64-4aef-47ba-a467-745c4c7poob7','c6bd83f9-74d7-4793-aabc-a8311644fbf6', '1', '27.59', '0', '52645d6f-0d85-4a78-845e-dae61c172a46', '20527646-7d36-4b66-ad5b-9c9fe5c8f228')
      
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
    if (error) console.log("Erro ao criar tabela de vendas");
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
  populaTabelaFuncionarios();
  populaTabelaRemedios();
  populaTabelaClientes();
  criaTabelaVendas();
  populaTabelaVendas();
});
