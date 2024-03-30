import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
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
      <Header/>
      <div className="max-h-screen flex justify-center">
        <div className='flex flex-col mt-4'>
          <div className='bg-[#2A2A2A] w-96 h-96 dropzone rounded-3xl border border-[#2BCCC0]' {...getRootProps()}>
            <input {...getInputProps()} />
            {!selectedImage && (
              isDragActive ? (
                <p className="text-center text-white">Déposez l'image ici...</p>
              ) : (
                <p className="text-center text-[#2BCCC0] items-center">Glisser votre image ici</p>
              )
            )}
            {selectedImage && (
              <div className="relative w-full h-full">
                <img src={selectedImage.preview} alt="Preview" className="absolute top-0 left-0 w-full h-full object-contain" />
              </div>
            )}
          </div>
          <div className='flex justify-center'>
            {!selectedImage ? (
              <button className='bg-[#515CDA] py-2 w-52 mt-5 mb-10 rounded-3xl text-white' disabled>Choisir un template</button>
            ) : (
              <Link to={{ pathname: "/stack", state: { selectedImage: selectedImage }}}>
                <button className='bg-[#CF51DA] py-2 w-52 mt-5 mb-10 rounded-3xl text-white'>Continuer...</button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Dropzone;
