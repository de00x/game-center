import { Request, Response } from "express";
import { DbModel } from "../../db/connect";

export const getGamePages = async (req: Request, res: Response) => {
  const currentGamePage = Number(req.query.currentPage) * 20;
  const success = await DbModel.getGamePages(currentGamePage);
  if (success) {
    res.json(success);
  } else res.json({ success: false });
};
