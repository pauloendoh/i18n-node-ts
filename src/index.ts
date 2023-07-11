import type { Application, NextFunction, Request, Response } from "express";
import express from "express";
import { Service } from "./service/Service";
import { httpContext } from "./utils/httpContext/httpContext";

const app: Application = express();

const port = 3001;

const service = new Service();

app.use(httpContext.middleware);
app.get("/favicon.ico", (_req, res) => res.status(204));

app.get(
  "/:name/:millis",
  localeMiddleware,
  async (req: Request, res: Response) => {
    const { name, millis } = req.params;

    httpContext.set("name", name);

    const text = await service.getHello(Number(millis));

    res.send(text);
  }
);

app.listen(port, () => console.log(`App is listening on port ${port}`));

function localeMiddleware(req: Request, res: Response, next: NextFunction) {
  const locale = req.headers["accept-language"] || "en";

  // app.use(httpContext.middleware) must be set for this to work
  httpContext.set("locale", locale);
  next();
}
