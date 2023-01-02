import { Request, Response } from "express";
import { DbModel } from "../../db/connect";

export const getGamePages = async (req: Request, res: Response) => {
  const currentGamePage = req.query.currentPage;
  const nextGamePage = await DbModel.getGamePages(currentGamePage);
  if (nextGamePage) {
    res.json(nextGamePage);
  } else res.json({ success: false });
};
