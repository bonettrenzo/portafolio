import React from 'react'
import { FaLongArrowAltRight, FaLongArrowAltDown } from "react-icons/fa";
import imgHero from "../../assets/boneth-img-hero.jpg"
import {Link} from "react-scroll"
import { useTranslation  } from 'react-i18next';  
import SelectLanguage from "../SelectLanguage"

const Home = () => {
const [t, i18n] = useTranslation('global');
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800' >
{/*         <div className='absolute right-20 top-24 z-auto '>
            
        </div> */}
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-6xl font-bold'>{t("home.title")}</h1>
                <p className='text-gray-500 py-4 max-w-md'>{t("home.text")}</p>     
                <div>
                    <Link to={"portafolio"} smooth={true} duration={1000} className='text-white w-fit px-6 py-3 my-2 flex group items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>{t("home.text-button")} <span className='ml-1 group-hover:rotate-90 duration-300'> <FaLongArrowAltRight /> </span> </Link>
                </div>
            </div>

            <div>
                <img className='rounded-2xl mx-auto w-2/3 md:w-sm ' src={imgHero} alt="Foto de perfil de Renzo Boneth" />
            </div>
        </div>
    </div>
  )
}

export default Home


/* 
            <div className='flex flex-col h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold' >
                    i'm a full Stack developer
                </h2>
                <p className='text-4xl sm:text-7xl font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptas perspiciatis obcaecati! Accusantium tempora ad at, quis sunt sit ullam, exercitationem magni vero deleniti optio vitae, et neque quos iure.</p>

                <div>
                    <button>portafolio <span><FaLongArrowAltRight /> </span> </button>
                </div>
            </div>

            <div>
                <img className='rounded-2xl mx-auto w-2/3 md:w-200' src={imgHero} alt="Foto de perfil de renzo boneth" />
            </div>
*/
