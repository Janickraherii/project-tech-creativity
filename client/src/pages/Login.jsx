import React from 'react';
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import logo from '../assets/logo.png'
import image from '../assets/dog_image.png'; 
import facebook from '../assets/logo-facebook.png';
import gmail from '../assets/logo-gmail.svg';
import line from '../assets/line.svg';

function Login() {
  

  return (
    <>
    <div style={{ maxHeight: "100vh", overflow: "auto" }}>
    
        <div className='flex flex-row justify-end '>
          <div className='max-h-screen'>
            <div className='mt-24'>
              <img src={logo} alt="image1" className='w-44 ml-28 mb-0' />
              <p className='text-xl font-bold text-[#111111] mb-6 bg-[#7BE3DB] text-center'>Libérez l'humour numérique sans limites !</p> 
              <div className='border p-6 border-[#7BE3DB] rounded-3xl bg-[#2A2A2A]'>
                    <div>
                      <p className='text-3xl font-bold text-[#7BE3DB] mb-7 text-center'>
                        Se connecter
                      </p>
                    </div>
                <div>
                      <form className='flex flex-col space-y-12  p-6'>
                        <input type="text" className='bg-transparent placeholder-[#FFFFFF] border-b border-[#FFFFFF]' placeholder='Email' />
                        <input type="password" className='bg-transparent placeholder-[#FFFFFF] border-b border-[#FFFFFF]' placeholder='Mot de passe' />
                      </form>
                      <a href="/Signup" className='text-xs text-white ml-6'> Mot de passe oublié ?</a>
                      
                </div>
                <div>
                  <button className='bg-[#DA51A0] rounded-3xl text-white text-xs p-32 py-3 mt-10 ml-6'>
                        <Link to="/profile"> Connexion </Link> {/* Utilisez Link pour la navigation */}
                        </button>
                    <div className='flex flex-row justify-center mt-6'>
                        <p className='text-white text-xs'> Pas de compte ?</p>
                        <a href="/Signup" className='text-white text-xs underline ml-1'>cliquer ici</a>
                    </div>
                </div>
              </div>
            
            
            </div>
              
          </div>
          
            <div>
              <img src={image} alt="image1" />             
            </div>
        </div>
    </div>
     
    </>
  );
}

export default Login;
