import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from '../assets/logo.png'
import image from '../assets/dog_image.png'; 
import facebook from '../assets/logo-facebook.png';
import gmail from '../assets/logo-gmail.svg';
import line from '../assets/line.svg';

function AuthForm() {
  const responseFacebook = (response) => {
    console.log(response);
    // Gérer la réponse de connexion de Facebook ici
  };

  return (
    <>
    <div>
      <FacebookLogin
        appId="VOTRE_APP_ID_FACEBOOK"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook" // Optionnel : icône du bouton
      />
    </div>
    <div className='flex flex-row justify-end space-x-40'>
        <div className='min-h-screen '>
            <div className='mt-48'>
                <img src={logo} alt="image1" className='w-44 ml-6 mb-0' />
                <p className='text-xs text-[#7BE3DB] mb-6'>Libérez l'humour numérique sans limites !</p> 
                    <div className='flex flex-col space-y-4'>
                        <button className='bg-[#DA51A0] rounded-3xl text-white text-xs py-3'> Se connecter </button>
                          <img src={line} alt="image1" className='w-56 mb-0' />
                        <button className='flex flex-row justify-center items-center bg-[#FFFFFF] rounded-3xl text-xs py-3 px-6'> Se connecter avec 
                          <img src={gmail} className='ml-3' alt="logo-gmail" /></button>
                        <button className=' flex flex-row justify-center items-center bg-[#515CDA] rounded-3xl text-white  text-xs py-2 px-2'> Se connecter avec 
                        <img src={facebook} className='ml-3' alt='logo-facebook' /></button>
                          
                    </div>
            </div>
        </div>
        <div>
        <img src={image} alt="image1" />             
        </div>
    </div>
    

   
    

    </> 
  
  );
}

export default AuthForm;
