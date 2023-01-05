import * as FyleSync from "lowdb/adapters/FileSync";
import * as lowDb from "lowdb";

const db = lowDb(new FyleSync("./db/db.json"));

export class DbModel {
  public static async getGamePages(currentGamePage: number) {
    const currentQuantityGames = db
      .get("all-games")
      .slice(0, currentGamePage)
      .value();
    console.log("currentQuantityGames", currentQuantityGames);

    return currentQuantityGames;
  }

  public static async getGameInfoPage(currentGameInfoPage: number) {
    const currentGame = db
      .get("all-games")
      .filter((game) => game.id === currentGameInfoPage)
      .value();

    return currentGame;
  }
}
