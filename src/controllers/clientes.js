import ClientesM from "../models/clientes.js";
import ClientesD from "../dao/clientes-dao.js";

function ClienteController(app, bd) {
  let DaoFunc = new ClientesD(bd);

  //rota que busca todos os clientes
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

  //rota que busca o cliente a partir do ID
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

  //rota que cria o cadastro de um novo cliente
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

  //rota que deleta um cliente pelo ID
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

  //rota que atualiza o cadastro de um cliente pelo ID
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

