import React from 'react'
import ExpirenceCards from './ExpirenceCards'
import { useTranslation  } from 'react-i18next';  

const Expirence = () => {
  const [t] = useTranslation('global');
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-auto'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline' >{t("expirence.title")}</p>
                <p className='py-4'>{t("expirence.text")}</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                <ExpirenceCards />
            </div>
        </div>
    </div>
  )
}

export default Expirence