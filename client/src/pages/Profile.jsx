import React from 'react';
import icon1 from '../assets/majesticons_folder-line.svg';
import icon2 from '../assets/majesticons_settings-cog-line.png';
import icon3 from '../assets/quill_paper.svg';
import icon4 from '../assets/Vector.svg';
import deco from '../assets/Component_6.svg'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import pdp from '../assets/pdp.png';


function Profile() {
  return (
    <>
    <Header/>
    <div>
    <div className='flex justify-center items-center flex-col relative'>
  <div className='relative bg-yellow-400 w-2/3 h-80 rounded-lg flex flex-row'>
    <div  className="absolute bottom-0 left-0 h-32 w-32 rounded-full overflow-hidden border border-[#2BCCC0] border-gradient" style={{ zIndex: '1' }}>
      <img src={pdp} alt="Photo de profil" className="w-full h-full object-cover"  style={{ zIndex: '1' }} />
    </div>
    <div className="absolute inset-x-0 bottom-0 flex  justify-center">
    <div className="w-full h-24 bg-black bg-opacity-25 rounded-lg backdrop-blur-sm shadow-lg"></div>
  </div>
    <p> USER</p>
    <p> VOTE</p>
  </div>
</div>

    </div>
    <div className="absolute bottom-20 space-x-4 w-full flex justify-between left-2 right-2 mx-auto max-w-screen-lg">
  <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border  border-[#2BCCC0] flex-col font-bold">
    <img src={icon1} alt="icon1"  className='w-14' />
    <p className='text-[#2BCCC0]'> Historique  </p>
  </div>
  <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border  border-[#2BCCC0] flex-col font-bold">
  <img src={icon2} alt="icon2" className='w-14' />
  <p className='text-[#2BCCC0]'> Paramètres de 
confidentialité </p>
  </div>
  <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0]  flex-col font-bold">
  <img src={icon3} alt="icon3" className='w-14' /> 
  <p className='text-[#2BCCC0]'> Politique de confidentialité </p> </div>
  <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold ">
  <img src={icon4} alt="icon4" className='w-14' />
  <p className='text-[#2BCCC0]'> Nous-contactez </p>  </div>
</div>


    <Footer/>
    </> 
  
  );
}

export default Profile;
