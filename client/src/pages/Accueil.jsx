import React, {  useEffect } from 'react';
import image1 from '../assets/accueil_1.svg';
import image2 from '../assets/Rectangle_1.svg';
import image3 from '../assets/Rectangle_2.svg';
import image4 from '../assets/Rectangle_3.svg';
import image5 from '../assets/Rectangle_4.svg';
import image6 from '../assets/Rectangle_5.svg';
import image7 from '../assets/Rectangle_6.svg';
import image8 from '../assets/Rectangle_7.svg';
import image9 from '../assets/Rectangle_8.svg';
import deco from '../assets/Component_6.svg'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

function Home() {
    useEffect(() => {
        AOS.init(); // Initialisez AOS
    }, []);
  return (
    <div style={{backgroundColor: 'black'}}>
 <Header/>
    <div className='flex flex-row justify-between m-20 mb-6'data-aos="fade-right">
        <div className='w-1/3'>
             <img src={image1} alt="image1" className=' w-auto ml-6 m-6' /> 
        </div> 
        <div className='w-1/3'>
            <div className='w-96 flex flex-col items-center py-40' data-aos="fade-left">
                <p className='text-[#2BCCC0] text-3xl font-bold'> Plongez dans le monde du rire en créant des mèmes uniques !</p>
                <p className='text-[#2BCCC0] text-xl'> En fusionnant texte et images pour des créations amusantes.</p>

            </div>
        </div> 
    </div>
    <div className='w-96 m-6 ml-32 ' data-aos="fade-right">
            <p className='text-[#2BCCC0] text-base'> Connectez-vous dès maintenant pour débloquer des fonctionnalités exclusives, sauvegarder vos créations et rejoindre une communauté de mème-maîtres en herbe.</p>
    </div>
    <div className='flex flex-row text-right justify-between space-x-40 mt-32 m-20 mb-0 ml-0'>
        <div className='text-[#2BCCC0] text-3xl font-bold w-1/2 mt-20 ' data-aos="zoom-in">
            <p className='ml-48'>En explorant notre vaste bibliothèque d'images, choisissez parmi des templates uniques et engageants ! </p>
            <p className='text-xl font-thin mt-3 ml-64'>{"Personnalisez les facilement avec l’application de TechCreativity."}</p>
            <img src={deco} alt="image1" className=' w-cover' data-aos="zoom-in"/> 

        </div>
        <div>
            <div className=' flex justify-end w-3/4 ml-auto ' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                <div className="grid grid-cols-4 grid-rows-4 gap-0 w-fit" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <div className="col-span-2" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={image2} alt="image1" className='w-full' /></div>
                    <div className="col-start-3"><img src={image3} alt="image1" className='w-auto object-cover h-full'/></div>
                    <div className="row-start-2" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={image4} alt="image1"className='w-full w-auto object-cover h-full' /></div>
                    <div className="col-span-2 row-start-2" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={image5} alt="image1" className='w-full' /></div>
                    <div className="col-span-2 row-start-3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={image6} alt="image1" className='w-full' /></div>
                    <div className="col-start-3 row-start-3" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={image7} alt="image3" className=' w-full object-cover h-full' /></div>
                    <div className="row-start-4 h-full" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"><img src={image8} alt="image4" className='h-full object-cover  w-auto' /></div>                    <div className="col-span-2 row-start-4 "><img src={image9} alt="image1" className='w-full' /></div>
                </div>
            </div>
                
        </div>
    </div>
        <Footer/>


    </div>

     
  );
}

export default Home;
