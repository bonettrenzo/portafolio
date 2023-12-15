// Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Links from './Links';
import SelectLanguage from '../SelectLanguage';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center w-full h-20 bg-black px-4 text-white fixed'>
      <div>
        <h1 className='font-signature text-5xl ml-2'>Renzo</h1> {/* {nav ? 'activo' : 'inactivo'} */}
      </div>
      <Links />

      <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={toggleNav}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {
        nav && (        
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-be bg-black to-gray-900 text-gray-500">

            <Links state={nav} setNav={setNav} />
            
          </ul>
        )
      }

      <div las>
      <SelectLanguage />
      </div>


    </div>
  );
};

export default Navbar;
