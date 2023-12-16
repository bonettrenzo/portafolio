import React from 'react'
import socialLinks from "./Links"

const SocialLinks = () => {

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