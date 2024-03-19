// Utilisez ce code dans UseApi

import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const SelectedImageContext = createContext();

const UseApi = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
                setImages(data.data.memes);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    const handleImageSelect = (url) => {
        setSelectedImage(url);
        navigate('/stack', { state: { imageURL: url } }); // Pass imageURL as state
    };

    return (
        <SelectedImageContext.Provider value={selectedImage}>
            <div className="flex flex-wrap ">
                {images.map((image) => (
                    <div className="w-1/6 m-6 border rounded-lg border-[#2BCCC0]" key={image.id}>
                        <img
                            className="w-full h-52 object-cover rounded-lg"
                            src={image.url}
                            alt={image.name}
                            onClick={() => handleImageSelect(image.url)}
                        />
                        <p className='text-[#2BCCC0]'>{image.name}</p>
                    </div>
                ))}
            </div>
        </SelectedImageContext.Provider>
    );
};

export default UseApi;
