import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./routes.ts";
import _404 from "./controllers/404.ts";
import errorHandler from "./controllers/errorHandler.ts";

const app = new Application();

// Set Cors
app.use(oakCors({ origin: "*" }));

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

console.log(`Listening on port: ${APP_PORT}`);

await app.listen(`${APP_HOST}:${APP_PORT}`);