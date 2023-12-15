import es from "../translations/es/global.json"
import en from "../translations/en/global.json"

import i18next from "i18next"

export default i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
        es: {
            global: es
        },
        en: {
            global: en
        },
    }

})