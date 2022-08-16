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