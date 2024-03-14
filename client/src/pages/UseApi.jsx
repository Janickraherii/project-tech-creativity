import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const UseApi = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [category, setCategory] = useState('MemeTemplatesOfficial');

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

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

    return (
        <div>
           <select value={category} onChange={e => setCategory(e.target.value)}>
    <option value="MemeTemplatesOfficial">Meme Templates Official</option>
    <option value="memes/hot">Trending Memes</option>
    {/* Add more categories as needed */}
</select>

<div className="flex flex-wrap">
    {images.map((image, index) => (
        <div key={index} className="w-1/4 p-10" onClick={() => handleImageClick(image)}>
            <img src={image.url} alt={image.title} className="w-full h-52 object-cover" />
        </div>
    ))}
</div>

{selectedImage &&  (
    <div>
        <h2>Selected Image</h2>
        <Link to={{
            pathname: '/imageDetail',
            state: { image: selectedImage }
        }}>
            <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-52 object-cover" />
        </Link>    </div>
)}
</div>
);
};

export default UseApi;