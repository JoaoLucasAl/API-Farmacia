import VendasM from "../models/vendas.js";
import VendasD from "../dao/venda-dao.js";

function VendasController(app, bd) {
  let DaoVend = new VendasD(bd);

  //Exibe todas as vendas
  app.get("/vendas", async (req, res) => {
    try {
      const resposta = await DaoVend.verVendas();

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



  //exibe Venda pelo ID

  app.get("/vendas/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const resposta = await DaoVend.verVendasById(id);

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

      let resposta = await DaoVend.addVenda(venda);

      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });


 //rota que deleta uma venda pela ID
 app.delete("/vendas/:ID", async (req, res) => {
  try {
    const id = req.params.ID;
    const resposta = await DaoVend.deleteVendas(id);

    res.json({
      result: resposta,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

app.put("/vendas/:ID", async (req, res) => {
  try {
    const id = req.params.ID
    const body = req.body
    const parametros = [body.REMEDIO_ID, body.QUANTIDADE, body.PRECO, body.DESCONTO, body.FUNCIONARIO_ID, body.CLIENTE_ID]

    let resposta = await DaoVend.atualizarVendas(parametros, id);

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

  export default VendasController

