import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "../langs";

const getI18n = (): any => {
  if (!i18n.isInitialized) {
    i18n
      .use(initReactI18next)
      .use(LanguageDetector)
      .init({
        resources,
        // lng: "en",
        fallbackLng: "en",
        // keySeparator: false,
        interpolation: {
          escapeValue: false,
        },
      });
  }
  return i18n;
};
export default getI18n;
