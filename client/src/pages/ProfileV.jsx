import React, { useState } from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import Header from '../components/Header';
import Footer from '../components/Footer';


const YourComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const newPosition = scrollPosition - 1;
    setScrollPosition(newPosition < 0 ? 0 : newPosition);
  };

  const scrollRight = () => {
    const newPosition = scrollPosition + 1;
    setScrollPosition(newPosition);
  };

  return (
    <>
    <Header/>
     
      <div className="absolute bottom-20 space-x-4 w-full flex justify-between left-2 right-2 mx-auto max-w-screen-lg">
        <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
          <img src={icon1} alt="icon1" className="w-14" />
          <button onClick={() => console.log('Télécharger')} className="text-[#2BCCC0] mt-2">Télécharger</button>
          <button onClick={() => console.log('Partager')} className="text-[#2BCCC0] mt-2">Partager</button>
          <button onClick={() => console.log('Like')} className="text-[#2BCCC0] mt-2">Like</button>
        </div>
        <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
          <img src={icon2} alt="icon2" className="w-14" />
          <button onClick={() => console.log('Télécharger')} className="text-[#2BCCC0] mt-2">Télécharger</button>
          <button onClick={() => console.log('Partager')} className="text-[#2BCCC0] mt-2">Partager</button>
          <button onClick={() => console.log('Like')} className="text-[#2BCCC0] mt-2">Like</button>
        </div>
        <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
          <img src={icon3} alt="icon3" className="w-full" />
          <button onClick={() => console.log('Télécharger')} className="text-[#2BCCC0] mt-2">Télécharger</button>
          <button onClick={() => console.log('Partager')} className="text-[#2BCCC0] mt-2">Partager</button>
          <button onClick={() => console.log('Like')} className="text-[#2BCCC0] mt-2">Like</button>
        </div>
        <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
          <p className="text-[#2BCCC0]">Nous-contactez</p>
          <button onClick={() => console.log('Télécharger')} className="text-[#2BCCC0] mt-2">Télécharger</button>
          <button onClick={() => console.log('Partager')} className="text-[#2BCCC0] mt-2">Partager</button>
          <button onClick={() => console.log('Like')} className="text-[#2BCCC0] mt-2">Like</button>
        </div>
      </div>
      <button onClick={scrollLeft} className="absolute bottom-20 left-0 transform -translate-y-1/2 text-[#2BCCC0]">←</button>
      <button onClick={scrollRight} className="absolute bottom-20 right-0 transform -translate-y-1/2 text-[#2BCCC0]">→</button>
  
    <Footer/>
    </>
    
   
  );
};

export default YourComponent;
