import { Context, Next, createMiddleware } from "hono";
import { parseCountry } from "../utils/country.ts";

export const countryMiddleware = createMiddleware(
  async (c: Context, next: Next) => {
    const country = c.req.param("country");
    const parsed = parseCountry(country);
    c.req.country = parsed;

    await next();
  }
);
