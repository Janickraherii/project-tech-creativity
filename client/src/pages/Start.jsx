// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { fabric } from 'fabric';
// import { Link } from 'react-router-dom';


// function Dropzone() {
// //   const [selectedImage, setSelectedImage] = useState(null);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: 'image/*',
//     onDrop: (acceptedFiles) => {
//       setSelectedImage({
//         file: acceptedFiles[0],
//         preview: URL.createObjectURL(acceptedFiles[0]),
//       });
//     },
//   });

//   const drawImageOnCanvas = () => {
//     const canvas = new fabric.Canvas('fabric-canvas');
//     const imgElement = document.createElement('img');
//     imgElement.src = selectedImage.preview;
//     const fabricImg = new fabric.Image(imgElement, {
//       left: 0,
//       top: 0,
//     });
//     canvas.add(fabricImg);
//   };

//   return (
//     <div>
//       <div className='mb-3'>
//         <Header />
//       </div>
//       <div className="max-h-screen flex justify-center">
//         <div className='flex flex-col mt-4'>
//           <div className='bg-[#2A2A2A] w-96 h-96 dropzone rounded-3xl border border-[#2BCCC0]' {...getRootProps()}>
//             <input {...getInputProps()} />
//             {isDragActive ? (
//               <p className="text-center text-white">Déposez l'image ici...</p>
//             ) : (
//               <p className="text-center text-[#2BCCC0] items-center">Glisser votre image ici</p>
//             )}
//             {selectedImage && (
//               <div className="relative">
//                 <img src={selectedImage.preview} alt="Preview" className="mt-4 mx-auto w-full h-full" />
//                 <p className="absolute top-0 right-0 mr-4 mt-2 text-white">Nom du fichier: {selectedImage.file.name}</p>
//               </div>
//             )}
//           </div>
//           <div className='flex justify-center'>
//                 <button className='bg-[#515CDA] py-2 w-52 mt-5 mb-10 rounded-3xl text-white' onClick={drawImageOnCanvas}>
//                      <Link to="/useapi">Choisir un template</Link>
//                 </button>          
// </div>
//         </div>
//       </div>
//       {/* Canvas Fabric */}
//       <canvas id="fabric-canvas" className="hidden"></canvas>
//       <Footer />
//     </div>
//   );
// };

// export default Dropzone;
