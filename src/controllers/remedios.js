import RemediosM from "../models/remedios.js";
import RemediosD from "../dao/remedio-dao.js";

function RemediosController(app, bd) {
  let DaoRmd = new RemediosD(bd)

  app.get("/remedios", async (req, res) => {
    try {
      const resposta = await DaoRmd.verRemedios();
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

  app.post("/remedios", async (req, res) => {
    try {
      const { NOME, PRINCIPIO_ATIVO, LABORATORIO, PRECO, ESTOQUE } = req.body;

      let remedio = new RemediosM(NOME, PRINCIPIO_ATIVO, LABORATORIO, PRECO, ESTOQUE);

      let resposta = await DaoRmd.addRemedios(remedio);
      
      res.json({
        result: resposta,
      });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  });

}

export default RemediosController

// export default (app, db) => {

//     app
//       .route("/remedios")
//       .get((_, res) => verRemedios(res, db));
      
//     app
//       .route("/remedios/:id")
//       .get((req, res) => verRemediosById(req, res, db));
      
//   };