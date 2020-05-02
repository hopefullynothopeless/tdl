import Router from "@koa/router";
import Koa from "koa";
import { AppContext } from "../index";

const api_router = new Router<Koa.DefaultState, AppContext>({
  prefix: "/api",
});

api_router.get("/test", async (ctx) => {
  ctx.body = "test";
});

export default api_router;
