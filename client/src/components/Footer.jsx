import React from 'react';
import home from '../assets/home-line.svg';
import explorer from '../assets/Explorer.svg';
import plus from '../assets/majesticons_plus.png';
import heart from '../assets/majesticons_heart.svg';
import user from '../assets/majesticons_user-line.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
        <footer className='bg-black bg-opacity-75 w-full fixed inset-x-0 bottom-0 h-12 border border-[#3a142a]'>
         <div className='flex flex-row justify-between '>
              <Link to="/">
                <img src={home} alt="Logo de mon application" className=' w-6 ml-6 m-4' />
              </Link>          
<img src={explorer} alt="Logo de mon application" className='  w-6 ml-6 m-4' /> 
              <Link to="/start">
                  <img src={plus} alt="Logo de mon application" className=' w-12 h-12 ml-6 m-4 -mt-6  z-50' />
              </Link>         
 <img src={heart} alt="Logo de mon application" className=' w-6 ml-6 m-4 ' /> 
              <Link to="/profile">
                <img src={user} alt="Logo user" className=' w-6  ml-6 m-4' />
             </Link>         
</div>
        </footer>
    
  );
}

export default Footer;
