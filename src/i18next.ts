import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'pt', 'ja'],
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['querystring'],
      lookupQuerystring: 'lng',
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });
