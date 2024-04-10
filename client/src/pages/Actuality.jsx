import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pdp from '../assets/pdp.png';
import image from '../assets/chien.png';
import background from '../assets/Background1.png'; // Importez votre image d'arrière-plan ici

function Actuality() {
  const [votes, setVotes] = useState(0); // Ajoutez cet état pour suivre le nombre de votes
  const handleVote = async () => {
    setVotes(votes + 1); // Cette fonction est appelée lorsque le bouton est cliqué
  
    // Envoi du nombre de votes à la base de données
    const response = await fetch(`http://localhost:4000/api/users/`, { // Remplacez userId par l'identifiant de l'utilisateur
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ votes: votes + 1 }),
    });
  
    if (!response.ok) {
      console.error('Failed to update votes:', response.statusText);
    }
  };
  return (
    <>
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
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
  <button onClick={handleVote}   className="absolute bottom-4 left-4 z-10 bg-pink-500 text-white px-4 py-2 rounded"
>Vote</button>
      <p className='text-white'>Nombre de votes : {votes}</p>
</div>


    </div>
    
    

    <Footer/>
    </div>
    
    </> 
  
  );
}

export default Actuality;
