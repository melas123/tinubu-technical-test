import englishTranslation from "@public/translations/en/translations.json";
import frenshTranslation from "@public/translations/fr/translations.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: englishTranslation,
  },
  fr: {
    translation: frenshTranslation,
  },
};
i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "en",
  });

export default i18n;
