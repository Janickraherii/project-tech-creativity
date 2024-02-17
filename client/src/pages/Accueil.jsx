import React from 'react';
import image1 from '../assets/accueil_1.svg';
function Home() {
  return (
    <>
    <div className='flex flex-row bg-[#111111]'>
         <div>
             <img src={image1} alt="image1" className=' w-96 ml-6 m-6' /> 
         </div> 
    </div>
             
    </> 
  
  );
}

export default Home;
