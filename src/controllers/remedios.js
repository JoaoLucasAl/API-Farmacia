import { RemediosM } from "../models/remedios";
import { Remedios } from "../dao/remedio-dao";

export default (app, db) => {
    app
      .route("/remedios")
      .get((_, res) => verRemedios(res, db));
      
    app
      .route("/remedios/:id")
      .get((req, res) => verRemediosById(req, res, db));
      
  };