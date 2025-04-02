import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "../langs";

const getInitialLang = (): string => {
  const params = new URLSearchParams(window.location.search);
  console.log("params", params);
  return params.get("lang") || "en";
};

const getI18n = (): any => {
  if (!i18n.isInitialized) {
    i18n
      .use(initReactI18next)
      .use(LanguageDetector)
      .init({
        resources,
        lng: getInitialLang(),
        fallbackLng: "en",
        interpolation: {
          escapeValue: false,
        },
      });
  }
  return i18n;
};

export default getI18n;
