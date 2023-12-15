import React from 'react'
import CardsProject from './CardsProject'
import { useTranslation  } from 'react-i18next';  
  

const Portafolio = () => {
  const [t] = useTranslation('global');
  return (
    <div name="portafolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>{t("portfolio.title")}</p>
          <p className='py-6'>{t("portfolio.text")}</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <CardsProject />
        </div>

      </div>
    </div>
  )
}

export default Portafolio