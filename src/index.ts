import type { Application, Request, Response } from "express";
import express from "express";
import { Service } from "./service/Service";
import { httpContext } from "./utils/httpContext/httpContext";
import { localeMiddleware } from "./utils/i18n/localeMiddleware";

const app: Application = express();
app.use(httpContext.middleware);

// test by using accept-language header = 'en' or 'es'
app.get("/:name", localeMiddleware, async (req: Request, res: Response) => {
  const { name } = req.params;
  const service = new Service();

  const text = await service.getHello(name);
  res.send(text);
});

const port = 3001;
app.listen(port, () => console.log(`App is listening on port ${port}`));
