import React from 'react'
import socialLinks from "../social/Links"
const LinksSocial = () => {
  return (
        <ul className="flex flex-col gap-2 font-bold items-center p-4 justify-around sm:flex-row">
            {
                socialLinks.map((item)=>(
                    <li key={item.id} className='hover:scale-105 duration-300 w-10'>
                        <a href={item.href} >{item.child}</a>
                    </li>
                ))
            }
        </ul>
            
    
  )
}

export default LinksSocial

/*                         <li className=''>
                            
                        </li> */