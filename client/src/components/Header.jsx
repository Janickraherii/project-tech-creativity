import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';




function Header() {
  return (
    <header className='border border-[#2BCCC0] rounded-b-3xl  h-20 flex flex-row sticky top-0 backdrop-blur-md bg-gradient-to-b from-transparent to-[rgba(43,204,192,0.5)]'style={{ zIndex: '2' }}>
      <div className='flex justify-between'>
        <img src={logo} alt="Logo de mon application" className='h-16 ml-48 m-2' /> 
      </div>          
      <div className=' flex justify-end space-x-4 w-full mr-6'>
        <Link to="/signup">
          <button className='border-2 border-[#2BCCC0]  p-2 px-auto h-10 mt-6 text-[#2BCCC0] rounded-3xl text-base flex items-center justify-center  backdrop-blur-md bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)]'>Inscription</button>
        </Link>      
        <Link to="/authentification">
        <button className='border-2 border-[#DA51A0] bg-gradient-to-b from-transparent to-[rgba(51,17,41,0.7)] p-2 px-auto h-10 mt-6 text-[#DA51A0] rounded-3xl text-base flex items-center justify-center sticky top-0 backdrop-blur-md'>Se connecter</button>
        </Link>      
      </div>
            
           
  
    </header>
  );
}

export default Header;
