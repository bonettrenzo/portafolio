import React from 'react';
import { createLinks } from '../../links';
import {Link} from "react-scroll"
import { useTranslation  } from 'react-i18next'; 

const Links = ({state, setNav}) => {
  
  const { t } = useTranslation('global');
  const links = createLinks(t)

  return (
    !state ?     
    (<ul className='hidden md:flex'>
    {links.map((link) => (
      <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
        <Link to={link.name} smooth={true} duration={1000}>{link.link}</Link>
      </li>
    ))}
  </ul>) 
  : 
  (<ul className='flex flex-col'>
    {links.map((link) => (
      <li key={link.id} className='px-4 text-gray-500 cursor-pointer capitalize py-6 text-4xl'>
        <Link onClick={() => setNav(!state)} to={link.name} smooth={true} duration={1000}>{link.link}</Link>
      </li>
    ))}
  </ul>)
  );
};

export default Links;
