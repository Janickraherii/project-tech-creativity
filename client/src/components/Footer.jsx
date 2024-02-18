import React from 'react';
import home from '../assets/home-line.svg';
import explorer from '../assets/Explorer.svg';
import plus from '../assets/majesticons_plus.png';
import heart from '../assets/majesticons_heart.svg';
import user from '../assets/majesticons_user-line.svg';
function Footer() {
  return (
        <footer className='bg-white w-full fixed inset-x-0 bottom-0 h-16'>
         <div className='flex flex-row justify-between '>
          <img src={home} alt="Logo de mon application" className=' w-6 ml-6 m-4' /> 
          <img src={explorer} alt="Logo de mon application" className='  w-6 ml-6 m-4' /> 
          <img src={plus} alt="Logo de mon application" className=' w-12 h-12 ml-6 m-4 -mt-6  z-50' /> 
          <img src={heart} alt="Logo de mon application" className=' w-6 ml-6 m-4 ' /> 
          <img src={user} alt="Logo de mon application" className=' w-6  ml-6 m-4' /> 
         </div>
        </footer>
    
  );
}

export default Footer;
