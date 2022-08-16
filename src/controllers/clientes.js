import ClientesM from "../models/clientes.js";
import ClientesD from "../dao/clientes-dao.js";

// PUT não está funcionando
function ClienteController(app, bd) {
  let DaoFunc = new ClientesD(bd);

  //rota que busca todos funcionários
  app.get("/clientes", async (req, res) => {
    try {
      const resposta = await DaoFunc.verClientes();
      res.json({
        result: resposta,
        countBd: resposta.length,
        error: false,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que busca o funcionário a partir do ID
  app.get("/clientes/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const resposta = await DaoFunc.verClienteById(id);
      res.json({
        result: resposta,
        error: false,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que cria o cadastro de um novo funcionario
  app.post("/clientes", async (req, res) => {
    try {
      const { NOME, EMAIL, TELEFONE, CPF } = req.body;

      let cliente = new ClientesM(NOME, EMAIL, TELEFONE, CPF);

      let resposta = await DaoFunc.addClientes(cliente);
      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que deleta um funcionário pelo ID
  app.delete("/clientes/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const resposta = await DaoFunc.deleteCliente(id);

      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  app.put("/clientes/:ID", async (req, res) => {
    try {
      const id = req.params.ID
      const body = req.body
      const parametros = [body.NOME, body.EMAIL, body.TELEFONE, body.CPF]

      let resposta = await DaoFunc.atualizarCliente(parametros, id);

      res.json({
        result: resposta,
      });
    } catch (e) {
      res.json({
        error: e.message,
      });
    }
  });
}

export default ClienteController;

// export const Funcionarios = (app, db) => {
//     app
//       .route("/funcionarios")
//       .get((_, res) => verFuncionarios(res, db));

//     app
//       .route("/funcionarios/:id")
//       .get((req, res) => verFuncionarioById(req, res, db));

//   };
