import { TranslationRequest, TranslationResult } from "./domains/Translation";
import { translate } from "./services/translation";
import { Router, Request, Response } from "express";

const routes = Router();

routes.post("/translation", (req: Request, res: Response) => {
  const translationRequest: TranslationRequest = req.body;
  const result: TranslationResult = translate(translationRequest);
  res.status(200).json(result);
});

export default routes;
