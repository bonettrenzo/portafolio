import renzo from "../../assets/boneth-img-hero.jpg";
import React from 'react'
import LinksSocial from "./LinksSocial";
import { useTranslation  } from 'react-i18next';  
  
const Footer = () => {
    const [t] = useTranslation('global');
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-400 w-full h-5/6 pt-20">
        <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full py-10 gap-7">
            <div className="flex flex-row gap-2 items-center">
                <img className="rounded-lg" src={renzo} width={70} alt={"icono de la web"} />
                <h1 className='font-signature text-5xl ml-2  '>Renzo</h1>
            </div>

            <div>
                <p>{t("footer.text")}</p>
            </div>

            <div>
                <LinksSocial />
            </div>

            <hr />

            <div>
                <p className="text-center">
                    © { new Date().getFullYear()} {t("footer.secondary-text")}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer