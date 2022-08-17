import VendasM from "../models/vendas.js";
import VendasD from "../dao/vendas-dao.js";

function VendaController(app, bd) {
  let DaoFunc = new VendasD(bd);

  //rota que busca todas as vendas
  app.get("/vendas", async (req, res) => {
    try {
      const resposta = await DaoFunc.verVendas();
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

  //rota que busca a venda a partir do ID
  app.get("/vendas/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const resposta = await DaoFunc.verVendaById(id);
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

  //rota que cria o cadastro de uma nova venda
  app.post("/vendas", async (req, res) => {
    try {
      const { REMEDIO_ID, QUANTIDADE, PRECO, DESCONTO, FUNCIONARIO_ID, CLIENTE_ID } = req.body;

      let venda = new VendasM(REMEDIO_ID, QUANTIDADE, PRECO, DESCONTO, FUNCIONARIO_ID, CLIENTE_ID);

      let resposta = await DaoFunc.addVenda(venda);
      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que deleta uma venda pelo ID
  app.delete("/vendas/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const resposta = await DaoFunc.deleteVenda(id);

      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que atualiza o cadastro de uma venda pelo ID
  app.put("/vendas/:ID", async (req, res) => {
    try {
      const id = req.params.ID
      const body = req.body
      const parametros = [body.REMEDIO_ID, body.QUANTIDADE, body.PRECO, body.DESCONTO, body.FUNCIONARIO_ID, body.CLIENTE_ID]

      let resposta = await DaoFunc.atualizarVenda(parametros, id);

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

export default VendaController;


