import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import buttonImage from '../assets/formkit_text.png';
import selectImage from '../assets/select_image.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';

const downloadMeme = () => {
    const memeElement = document.querySelector('.relative'); // Select the parent div of the meme
  
    html2canvas(memeElement).then(canvas => {
      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };



const MemeGenerator = () => {
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [fontSize, setFontSize] = useState('2xl'); 
    const [showPopup, setShowPopup] = useState(false); // Initial state is false (popup not shown)
    const [textColor, setTextColor] = useState("#000000");
    const [imageUrl, setImageUrl] = useState(null);
    const location = useLocation();
    const selectedImageURL = location.state ? location.state.imageURL : null;
    

    useEffect(() => {
        if (selectedImageURL) {
            fetch(selectedImageURL)
                .then(response => response.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    setImageUrl(url);
                });
        }
    }, [selectedImageURL]);
   

    return (
        <>
        <Header />
         

<div className="flex flex-col items-center justify-center">
           
            <div className="relative " >
               <Draggable>
                            <p style={{ color: textColor }} className={`absolute top-0 left-0 p-2 text-${fontSize}`}>{topText}</p>

               </Draggable>
                <div className="w-fit max-w-[400px] max-h-[300px] rounded-2xl mt-20"> {/* New class for the image */}
                    {imageUrl && <img src={imageUrl} alt="meme" className="w-full rounded-2xl border border-[#2BCCC0]" />}
                </div>
                <Draggable>
                <p style={{ color: textColor }} className={`absolute bottom-0 left-0 p-2 text-${fontSize}`}>{bottomText}</p>
</Draggable>
                
                
        </div>
        </div>
        <div className="flex justify-center fixed bottom-20 left-0 right-0">
        <select
    value={fontSize}
    onChange={e => setFontSize(e.target.value)}
    className="p-2 border border-red-400 rounded mb-4"
    style={{
        backgroundImage: `url(${selectImage})`,
        backgroundSize: 'cover',
        appearance: 'none',
        width: '32px',
        height: '32px'
    }}
>
    <option value="xs">XS</option>
    <option value="sm">SM</option>
    <option value="md">MD</option>
    <option value="lg">LG</option>
    <option value="xl">XL</option>
    <option value="2xl">2XL</option>
    <option value="3xl">3XL</option>
    <option value="4xl" >4XL</option>
</select>
<img
    src={buttonImage} 
    alt="Afficher"
    onClick={() => setShowPopup(true)}
    className="cursor-pointer w-8 h-8"
/> 
<input
    type="color"
    value={textColor}
    onChange={e => setTextColor(e.target.value)}
    className="p-2 border border-gray-300 rounded mb-4"
/>
 
<button onClick={downloadMeme} className='text-white'>Télécharger le meme</button>

</div>
{showPopup && (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded">
            <input
                type="text"
                placeholder="Texte du haut"
                value={topText}
                onChange={e => setTopText(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="text"
                placeholder="Texte du bas"
                value={bottomText}
                onChange={e => setBottomText(e.target.value)}
                className="p-2 border border-gray-300 rounded mb-4"
            />

        <button onClick={() => setShowPopup(false)}>Fermer</button>


      </div>
    </div>
)}
<Footer />

        </>
        
    );
};

export default MemeGenerator;