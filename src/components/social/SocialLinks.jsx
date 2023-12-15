import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillPersonLinesFill} from "react-icons/bs"

const SocialLinks = () => {

    const socialLinks = [
        {
            id: 1,
            child: <> LinkedIn <FaLinkedin size={30} /> </>,
            href : "https://www.linkedin.com/in/renzo-bonett-a596821b4/",
            style : "rounded-tr-md"
        },
        {
            id: 2,
            child: <> GitHub <FaGithub size={30} /> </>,
            href : "https://github.com/bonettrenzo",
            style : "rounded-tr-md"
        },
        {
            id: 3,
            child: <> Mail <AiOutlineMail size={30} />  </>,
            href : "mailto:bonettrenzo@gmail.com",
            style : "rounded-tr-md"
        },
        {
            id: 4,
            child: <> Curriculum <BsFillPersonLinesFill size={30} />   </>,
            href : "https://drive.google.com/file/d/1LcXEiZgqp2UDrINgsUe4yld4ZM9LKBGW/view?usp=drive_link",
            style : "rounded-tr-md",
            download: true
        },

    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {socialLinks.map((item) => (
            <li key={item.id} className='flex justify-between items-center w-40 h-1/4 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-500 hover:ml-[-10px]'>
                <a href={item.href} download={item.download} target='_blank' rel="noopener noreferrer" className='flex justify-between items-center w-full h-14 text-white'>   
                    {item.child}  
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks