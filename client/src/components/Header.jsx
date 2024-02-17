import React from 'react';
import logo from '../assets/logo.png'
function Header() {
  return (
    <header className='border border-[#2BCCC0] rounded-b-3xl bg-[#2A2A2A] h-32 flex flex-row '>
      <div className='flex justify-between'>
        <img src={logo} alt="Logo de mon application" className='w-28 ml-6 m-6' /> 
      </div>          
      <div className=' flex justify-end space-x-4 w-full mr-6'>
        <button className='border border-[#2BCCC0] p-2 px-8 h-10 mt-10 text-[#2BCCC0] rounded-3xl text-base'> Inscription </button>
        <button className='border bg-[#DA51A0] p-2 px-8 h-10 mt-10 text-white rounded-3xl text-base'> Se connecter  </button>
      </div>
            
           
  
    </header>
  );
}

export default Header;
