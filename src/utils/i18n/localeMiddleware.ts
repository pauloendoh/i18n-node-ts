import { NextFunction, Request, Response } from "express";
import { httpContext } from "../httpContext/httpContext";

export function localeMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const locale = req.headers["accept-language"] || "en";

  // app.use(httpContext.middleware) must be set for this to work
  httpContext.set("locale", locale);
  next();
}
