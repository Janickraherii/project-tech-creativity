import React from 'react';
// import image1 from '../assets/accueil_1.svg';
// import image2 from '../assets/Rectangle_1.svg';
// import image3 from '../assets/Rectangle_2.svg';
// import image4 from '../assets/Rectangle_3.svg';
// import image5 from '../assets/Rectangle_4.svg';
// import image6 from '../assets/Rectangle_5.svg';
// import image7 from '../assets/Rectangle_6.svg';
// import image8 from '../assets/Rectangle_7.svg';
// import image9 from '../assets/Rectangle_8.svg';
// import deco from '../assets/Component_6.svg'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import pdp from '../assets/pdp.png';
import image from '../assets/chien.png';
function Actuality() {
  return (
    <>
    <Header/>
    <div className="flex justify-center items-center h-screen flex-col">
        <div className='flex flex-row'>
            <div className='flex justify-start '>
                <div className="h-16 w-16 rounded-full overflow-hidden border border-[#2BCCC0] border-gradient mb-4 ">
                    <img src={pdp} alt="Photo de profil" className="w-full h-full object-cover justify-start items-start" />  
                </div>
            </div>
             

         <div>
                    <p className='text-[#2BCCC0] font-bold pl-6 mb-2 mt-2'> Elliot Nguyen</p>
                     <p className='text-white font-thin pl-6 mb-4'> Description </p> 

         </div> 
            <div className='flex justify-end'>
                     <p className='text-white font-thin ml-64 mt-10'> 5 m ago</p> 

            </div>     

        </div>  

       
   
        <div className='flex '>
    </div>
    <div className='relative w-1/3 h-auto border border-[#DA51A0] rounded-lg '>
  {/* Div derrière */}
  <img src={image} alt="Photo de profil" className="w-full h-full object-cover rounded-lg" />

  {/* Div en avant */}
  <div className="absolute inset-x-0 bottom-0 flex  justify-center">
    <div className="w-full h-16 bg-black bg-opacity-25 rounded-lg backdrop-blur-sm shadow-lg"></div>
  </div>
</div>


    </div>
    
    

    <Footer/>
    </> 
  
  );
}

export default Actuality;
