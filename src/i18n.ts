import i18next from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18next.use(initReactI18next).use(languageDetector).use(Backend).init({
    fallbackLng: 'en',
    backend: {
        loadPath: '/bc-research/locales/{{lng}}/{{ns}}.json',
    }
})
