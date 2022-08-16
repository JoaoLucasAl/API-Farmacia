import { FuncionariosM } from "../models/funcionarios";
import { Funcionarios } from "../dao/funcionario-dao";


export const Funcionarios = (app, db) => {
    app
      .route("/funcionarios")
      .get((_, res) => verFuncionarios(res, db));
      
    app
      .route("/funcionarios/:id")
      .get((req, res) => verFuncionarioById(req, res, db));
      
  };
  