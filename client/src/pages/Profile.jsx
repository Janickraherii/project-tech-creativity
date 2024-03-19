// import React, { useState, useEffect } from 'react';
// import icon1 from '../assets/majesticons_folder-line.svg';
// import icon2 from '../assets/majesticons_settings-cog-line.png';
// import icon3 from '../assets/quill_paper.svg';
// import icon4 from '../assets/Vector.svg';
// // import deco from '../assets/Component_6.svg'; 
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import pdp from '../assets/pdp.png';


// function Profile() {
//   // État pour stocker l'URL de l'image de couverture de l'utilisateur
//   const [coverImageUrl, setCoverImageUrl] = useState('');

//   // Simulation de récupération de l'image de couverture depuis la base de données
//   useEffect(() => {
//     // Remplacez cette simulation par la logique réelle pour récupérer l'image de couverture de l'utilisateur depuis la base de données
//     // Exemple :
//     const fetchCoverImageFromDatabase = async () => {
//       try {
//         // Faire une requête à votre API pour récupérer l'URL de l'image de couverture
//         const response = await fetch('http://localhost:3000/api/users');
//         const data = await response.json();
//         setCoverImageUrl(data.coverImage);
//       } catch (error) {
//         console.error('Erreur lors de la récupération de l\'image de couverture : ', error);
//       }
//     };

//     fetchCoverImageFromDatabase();
//   }, []);
//   return (
//     <>
//     <Header/>
//     <div>
//       <div className='flex justify-center items-center flex-col relative'>
//         <div
//           className='relative w-5/6 h-80 rounded-3xl flex flex-row -mt-11'
//           style={{ backgroundImage: `url(${coverImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//         >
//           <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full overflow-hidden border border-[#2BCCC0] border-gradient" style={{ zIndex: '1' }}>
//             <img src={pdp} alt="Photo de profil" className="w-full h-full object-cover"  style={{ zIndex: '1' }} />
//           </div>
//           <div className="absolute inset-x-0 bottom-0 flex  justify-center">
//             <div className="w-full h-24 bg-black bg-opacity-25 rounded-b-3xl backdrop-blur-sm shadow-lg"></div>
//           </div>
//           <p> USER</p>
//           <p> VOTE</p>
//         </div>
//       </div>
//     </div>
//     <div className="absolute bottom-20 space-x-10 w-full flex justify-between left-2 right-2 mx-auto max-w-screen-lg mt-10">
//   <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
//     <img src={icon1} alt="icon1" className="w-14" />
//     <p className="text-[#2BCCC0] p-2 text-center"> Historique </p>
//   </div>
//   <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
//     <img src={icon2} alt="icon2" className="w-14" />
//     <p className="text-[#2BCCC0] p-2 text-center"> Paramètres de confidentialité </p>
//   </div>
//   <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
//     <img src={icon3} alt="icon3" className="w-14" />
//     <p className="text-[#2BCCC0] p-4 py-2 text-center"> Politique de confidentialité </p>
//   </div>
//   <div className="flex items-center justify-center w-1/4 h-52 bg-[#2A2A2A] rounded-lg border border-[#2BCCC0] flex-col font-bold">
//     <img src={icon4} alt="icon4" className="w-14" />
//     <p className="text-[#2BCCC0] p-2 text-center"> Nous-contactez </p>
//   </div>
// </div>



//     <Footer/>
//     </> 
  
//   );
// }

// export default Profile;
