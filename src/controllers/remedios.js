import RemediosM from "../models/remedios.js";
import RemediosD from "../dao/remedio-dao.js";

function RemediosController(app, bd) {
  let DaoFunc = new RemediosD(bd)

  //rota que mostra todos os remédios
  app.get("/remedios", async (req, res) => {
    try {
      const resposta = await DaoFunc.verRemedios();
      res.json({
        result: resposta,
        countBd: resposta.length,
        error: false
      });
    } catch (error) {
      res.json({
        error: error.message
      });
    }
  });


  //rota que busca o remedio a partir do ID
  app.get("/remedios/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const resposta = await DaoFunc.verRemediosById(id);
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

  //rota que cria o cadastro de um novo remedio
  app.post("/remedios", async (req, res) => {
    try {
      const { NOME, PRINCIPIO_ATIVO, LABORATORIO, PRECO, ESTOQUE } = req.body;

      let remedio = new RemediosM(NOME, PRINCIPIO_ATIVO, LABORATORIO, PRECO, ESTOQUE);

      let resposta = await DaoFunc.addRemedios(remedio);
      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que deleta um remedio pelo ID
  app.delete("/remedios/:ID", async (req, res) => {
    try {
      const id = req.params.ID;
      const resposta = await DaoFunc.deleteRemedio(id);

      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

  //rota que atualiza o cadastro de um remedio pelo ID
  app.put("/remedios/:ID", async (req, res) => {
    try {
      const id = req.params.ID
      const body = req.body
      const parametros = [body.NOME, body.PRINCIPIO_ATIVO, body.LABORATORIO, body.PRECO, body.ESTOQUE]

      let resposta = await DaoFunc.atualizarRemedio(parametros, id);

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


export default RemediosController

