// Dropzone.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Dropzone() {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage({
      file,
      preview: URL.createObjectURL(file),
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div>
      <div className='mb-3'>
        <Header/>
      </div>
      <div className="max-h-screen flex justify-center">
        <div className='flex flex-col mt-4'>
          <div className='bg-[#2A2A2A] w-96 h-96 dropzone rounded-3xl border border-[#2BCCC0]' {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-center text-white">Déposez l'image ici...</p>
            ) : (
              <p className="text-center text-[#2BCCC0] items-center">Glisser votre image ici</p>
            )}
            {selectedImage && (
              <div className="relative">
                <img src={selectedImage.preview} alt="Preview" className="mt-4 mx-auto w-full h-full" />
                <p className="absolute top-0 right-0 mr-4 mt-2 text-white">Nom du fichier: {selectedImage.file.name}</p>
              </div>
            )}
          </div>
          <div className='flex justify-center'>
            <button className='bg-[#515CDA] py-2 w-52 mt-5 mb-10 rounded-3xl text-white'>Choisir un template</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dropzone;

