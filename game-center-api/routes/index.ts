import * as express from "express";
import { Controller } from "../controller";

const routes = express.Router();

routes.get("/gamePages", Controller.get.getGamePages);
routes.get("/gameInfoPage", Controller.get.getGameInfoPage);

export default routes;
