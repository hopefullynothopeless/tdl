import Koa from "koa";
import Knex from "knex";
import { AppContext } from "../index";
import config from "../../../configs/database.json";

export const initDb = async (app: Koa<Koa.DefaultState, AppContext>) => {
  const conn = Knex(config);

  app.context.db = conn;
};
