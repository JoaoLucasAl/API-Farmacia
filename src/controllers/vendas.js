import VendasM from "../models/vendas.js";
import VendasD from "../dao/venda-dao.js";

function VendasController(app, bd) {
  let DaoFunc = new VendasD(bd);

  //rota que busca todos funcionários
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


  }

  export default VendasController
