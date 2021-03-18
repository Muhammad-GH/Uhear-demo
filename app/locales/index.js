import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        month: "February",
        month1: "March",
        title1: "Audio test",
        title2: "Your hearing experience",
        type1: "Normal",
        type2: "Moderate",
      },
    },
    nl: {
      translation: {
        month: "Februari",
        month1: "Maart",
        title1: "Audiotest",
        title2: "Uw hoorervaring",
        type1: "Normaal",
        type2: "Matig",
      },
    },
  },
});
export default i18n;
