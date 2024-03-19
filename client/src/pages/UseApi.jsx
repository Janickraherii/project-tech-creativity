import { Link } from 'react-router-dom';
import React, { useState, createContext, useEffect } from 'react';

// 1. Créer un contexte
export const ImageContext = createContext();

const UseApi = () => {
    const [images, setImages] = useState([]);
    // 2. Utiliser le contexte pour stocker l'image sélectionnée
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
                if (data && data.data && data.data.memes) {
                    const newImages = data.data.memes
                        .map(meme => ({ url: meme.url, title: meme.name }))
                        .filter(image => image.url.match(/\.(jpeg|jpg|png)$/));
                    setImages(newImages);
                }
            });
    }, []);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <ImageContext.Provider value={selectedImage}>
            <div className="flex flex-wrap ">
                {images.map((image, index) => (
                    <div key={index} className="w-1/6 m-6 border rounded-lg border-[#2BCCC0]">
                        <Link to={{
                            pathname: '/stack',
                            state: { image: image }
                        }}>
                            <img src={image.url} alt={image.title} className="w-full h-52 object-cover rounded-lg" onClick={() => handleImageClick(image)} />
                        </Link>
                    </div>
                ))}
            </div>
        </ImageContext.Provider>
    );
};

export default UseApi;

// Dans le composant "stack", vous pouvez utiliser le contexte pour récupérer l'image sélectionnée.
// const selectedImage = useContext(ImageContext);