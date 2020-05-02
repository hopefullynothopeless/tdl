import Koa from "koa";
import next from "next";

const dev = process.env.NODE_ENV !== "production";

export const initNext = async () => {
  const nextApp = next({ dev });
  const handler = nextApp.getRequestHandler();

  await nextApp.prepare();

  return async (ctx: Koa.DefaultContext, nextMiddleware: Koa.Next) => {
    if (ctx.path.startsWith("/api")) {
      return nextMiddleware();
    }

    await handler(ctx.req, ctx.res);

    ctx.respond = false;
  };
};
