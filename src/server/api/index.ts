import Router from "@koa/router";
import Koa from "koa";
import { AppContext } from "../index";

const api_router = new Router<Koa.DefaultState, AppContext>({
  prefix: "/api",
});

api_router.get("/todos", async (ctx) => {
  const todos = await ctx.db.select("*").table("todos");

  ctx.body = todos;
});

export default api_router;
