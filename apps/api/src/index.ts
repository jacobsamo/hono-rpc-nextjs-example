import { OpenAPIHono } from "@hono/zod-openapi";
import { getCookie } from "hono/cookie";
import { cors } from "hono/cors";

const app = new OpenAPIHono({
  defaultHook: (result, c) => {
    if (!result.success) {
      return c.json({ success: false, errors: result.error.errors }, 422);
    }
  },
});

app.use(
  "*",
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    allowMethods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
    allowHeaders: ["Content-Type", "Authorization", "Cookie"], // Allow specific headers
  })
);

const routes = app
  .get("/", (c) => {
    return c.text("Hello Hono!");
  })
  .get("/cookie-test", (c) => {
    const allCookies = getCookie(c);

    return c.json({ message: "Cookies from request", cookies: allCookies });
  });

export type AppType = typeof routes;

export default app;
