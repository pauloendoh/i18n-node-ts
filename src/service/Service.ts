import { httpContext } from "../utils/httpContext/httpContext";
import { t } from "../utils/i18n/t";

export class Service {
  constructor() {}

  async getHello(millis: number) {
    await new Promise((resolve) => setTimeout(resolve, millis));
    const name = httpContext.get("name") || "World";
    return t.getHello(name);
  }
}
