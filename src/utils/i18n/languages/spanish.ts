import { Dictionary } from "../Dictionary";

export const spanish: Dictionary = {
  getHello: (name: string) => `Hola, ${name}`,
  errors: {
    notFound: `No encontrado`,
  },
};
