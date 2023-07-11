import { t } from "../utils/i18n/t";

export class Service {
  constructor() {}

  async getHello(name: string) {
    return t.getHello(name);
  }
}
