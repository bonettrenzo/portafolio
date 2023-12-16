import React from 'react'
import { useTranslation  } from 'react-i18next';  

const About = () => {
  const [t] = useTranslation('global');
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8  '>
                <p className='text-4xl sm:text-3xl font-bold inline border-b-4  border-gray-400'>{t("about.title")}</p>
            </div>

            <p className='text-xl mt-5'>{t("about.text")}</p>
            <br />
            <p className='text-xl py-4'>{t("about.text-2")}</p>
        </div>
    </div>
  )
}

export default About