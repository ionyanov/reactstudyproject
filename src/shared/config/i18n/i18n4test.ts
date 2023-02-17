import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru-RU',
        fallbackLng: 'ru-RU',
        debug: false,
        interpolation: {
            escapeValue: false // not needed for react!!
        },
        resources: {'ru-RU': {translations: {}}}
    })

export default i18n
