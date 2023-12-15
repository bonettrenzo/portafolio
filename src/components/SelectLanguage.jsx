import React from 'react'
import { useTranslation  } from 'react-i18next';  

import espanol from "../assets/icon-language/espana.png";
import ingles from "../assets/icon-language/reino-unido.png";

const SelectLanguage = () => {
    const [t, i18n] = useTranslation('global');

    const handleLanguage = (e) => {
        if(e.target.value == ""){
            return
        }
        i18n.changeLanguage(e.target.value);
    };

    return (
        <>
            <select name="language" id="language" className='text-black py-1 px-1 bg-white border-spacing-1 rounded-md border-gray-500' onChange={(e) => handleLanguage(e) }>
                <option value={""} default>{t("language.text")}</option>
                <option value="es">Español <img src={espanol}/> </option>
                <option value="en">English <img src={ingles} /></option>
            </select>
        </>
    );
};

export default SelectLanguage;
