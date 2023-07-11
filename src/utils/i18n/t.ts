import { httpContext } from "../httpContext/httpContext";
import { Dictionary } from "./Dictionary";
import { Language } from "./Language";
import { english } from "./languages/english";
import { spanish } from "./languages/spanish";

const allTranlations: {
  [key in Language]: Dictionary;
} = {
  en: english,
  es: spanish,
};

const proxiedObject = {} as Dictionary;

export const t = new Proxy(proxiedObject, {
  get: (target, prop) => {
    const locale = (httpContext.get("locale") || "en") as Language;
    return allTranlations[locale][prop as keyof Dictionary];
  },
});
