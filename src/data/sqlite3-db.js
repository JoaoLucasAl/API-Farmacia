import sqlite3 from "sqlite3";
const bd = new sqlite3.Database("./src/data/farmacia.db");

//Processamento de sinal
process.on("SINGIN", () =>
  bd.close(() => {
    console.log("BD encerrado!");
    process.exit(0);
  })
);

export { bd };
