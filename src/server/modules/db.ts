import Koa from "koa";
import Knex from "knex";
import { AppContext } from "../index";
import config from "../../../configs/database.json";

const createAdministratorsTable = async (conn: Knex) => {
  const exist = await conn.schema.hasTable("dyno_administrators");

  if (!exist) {
    await conn.schema.createTable("dyno_administrators", (table) => {
      table.increments();
      table.string("username").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
    });
  }
};

export const initDb = async (app: Koa<Koa.DefaultState, AppContext>) => {
  const conn = Knex(config);

  await createAdministratorsTable(conn);

  app.context.db = conn;
};
