import React from 'react'
import { useTranslation  } from 'react-i18next';  
  
const Contact = () => {
    const [t] = useTranslation('global');
    return (
        <div name="contact" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
            <div className='max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='font-bold border-b-4 border-gray-500 text-4xl inline'>{t("contact.title")}</p>
                    <p className='py-4'>{t("contact.text")}</p>
                </div>

                <div className='flex flex-col justify-center items-center py-4'>
                    <form action="https://getform.io/f/e6ad0507-0ce1-4b36-bc83-1a17c03b29bb" method='post' className='flex flex-col gap-4 w-full md:w-1/2'>
                        <input required type="text" name='name' placeholder={t("contact.input-name")} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input required type="text" name='email' placeholder={t("contact.input-email")} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message"  rows="10" placeholder={t("contact.input-message")} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <button type="submit" className='bg-gradient-to-l from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>{t("contact.button-text")}</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact