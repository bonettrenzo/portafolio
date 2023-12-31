import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import useLanguage from './hook/useLanguage.jsx'

import { I18nextProvider } from 'react-i18next';
import i18next from "i18next"

import es from './translations/es/global.json'
import en from './translations/en/global.json'

i18next.init({
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>

)
