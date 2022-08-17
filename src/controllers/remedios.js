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

//BuscaRemedios
  app.get("/remedios/:ID", async (req, res) => {
    try {
      const id = req.params.ID;

      const resposta = await DaoRmd.verRemediosById(id);
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

 //rota que deleta um remedio pelo ID
 app.delete("/remedios/:ID", async (req, res) => {
  try {
    const id = req.params.ID;
    const resposta = await DaoRmd.deleteRemedios(id);

    res.json({
      result: resposta,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

app.put("/remedios/:ID", async (req, res) => {
  try {
    const id = req.params.ID
    const body = req.body
    const parametros = [body.NOME, body.PRINCIPIO_ATIVO, body.LABORATORIO, body.PRECO, body.ESTOQUE]

    let resposta = await DaoRmd.atualizarRemedios(parametros, id);

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

// export default (app, db) => {

//     app
//       .route("/remedios")
//       .get((_, res) => verRemedios(res, db));
      
//     app
//       .route("/remedios/:id")
//       .get((req, res) => verRemediosById(req, res, db));
      
//   };