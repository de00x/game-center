import { Request, Response } from "express";
import { DbModel } from "../../db/connect";

export const getGameInfoPage = async (req: Request, res: Response) => {
  const currentGameInfoPage = Number(req.query.currentInfoPage);
  const success = await DbModel.getGameInfoPage(currentGameInfoPage);
  if (success) {
    res.json(success);
  } else res.json({ success: false });
};
