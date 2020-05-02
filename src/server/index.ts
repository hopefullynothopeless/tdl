import Koa from "koa";
import Knex from "knex";
import Router from "@koa/router";
import { initNext, initDb } from "./modules";

const port = +process.env.PORT || 3000;

export interface AppContext {
  db: Knex;
}

async function run() {
  const server = new Koa<Koa.DefaultState, AppContext>();
  const router = new Router();

  await initDb(server);

  router.get("*", await initNext());

  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(port, null, null, () =>
    console.log(`Running at http://localhost:${port}`)
  );
}

run();
