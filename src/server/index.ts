import Koa from "koa";
import Knex from "knex";
import Router from "@koa/router";
import { initNext, initDb } from "./modules";
import api_router from "./api";

const port = +process.env.PORT || 4000;

export interface AppContext {
  db: Knex;
}

async function run() {
  const server = new Koa<Koa.DefaultState, AppContext>();
  const router = new Router();

  await initDb(server);

  router.get("*", await initNext());

  router.use(api_router.routes());

  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(port, null, null, () =>
    console.log(`Running at http://localhost:${port}`)
  );
}

run();
