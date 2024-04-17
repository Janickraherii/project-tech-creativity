import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import buttonImage from '../assets/formkit_text.png';
import selectImage from '../assets/select_image.png';
import Footer from '../components/Footer';
import Draggable from 'react-draggable';
import html2canvas from 'html2canvas';
import down from '../assets/down.png';
import share from '../assets/share.png';
import backgroundImage from '../assets/Background.png'; 

const StackPage = () => {
    const location = useLocation();
    const selectedImage = location.state ? location.state.selectedImage : null; 

    const downloadMeme = () => {
        const memeElement = document.querySelector('.relative'); // Select the parent div of the meme
    
        html2canvas(memeElement, { scale: 1 }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    const MemeGeneratorUser = () => {
        const [topText, setTopText] = useState('');
        const [bottomText, setBottomText] = useState('');
        const [fontSize, setFontSize] = useState('null'); 
        const [showPopup, setShowPopup] = useState(false); // Initial state is false (popup not shown)
        const [textColor, setTextColor] = useState("#7be3db");

        return (
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', height: '100vh' }}> 
                        

                <div className="flex flex-col items-center justify-center">
                    
                    <div className="relative " >
                        <Draggable>
                            <p style={{ color: textColor, backgroundColor: '#FFFFFF' }} className={`absolute top-0 left-0 p-2 text-${fontSize}`}>    {topText || 'Déplacez ce carré'}</p>
                        </Draggable>
                        <Draggable>
                            <p style={{ color: textColor, backgroundColor: '#FFFFFF'  }} className={`absolute bottom-12 left-0 p-2 text-${fontSize}`}>{bottomText || 'Déplacez ce carré'}</p>
                        </Draggable>
                        <div className="w-[500px] mx-auto max-h-screen overflow-auto">
                            <div className="flex justify-center items-center 100vh mt-15">
                                <div className="flex items-center justify-center min-h-screen">
                                    <div>
                    {selectedImage && (
                        <img src={selectedImage.preview} alt="Selected Image" />
                    )}
                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center fixed bottom-20 left-0 right-0 ">
                        <div className='border border-[#2BCCC0] flex flex-row space-x-4 p-2 rounded-full'>
                            <div
                                onClick={() => setShowPopup(true)}
                                className="cursor-pointer w-10 h-10 rounded-full bg-[#515CDA] flex items-center justify-center">
                                <img
                                    src={buttonImage} 
                                    alt="Afficher"
                                /> 
                            </div>
                            <div>
                                <select
                                    value={fontSize}
                                    onChange={e => setFontSize(e.target.value)}
                                    style={{
                                        backgroundImage: `url(${selectImage})`,
                                        backgroundSize: '32x 32px',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center', 
                                        backgroundColor: '#515CDA',
                                        width: '40px',
                                        height: '40px',
                                        border: 'none',
                                        textIndent: '-9999px',
                                        borderRadius: '50%'
                                    }}>
                                    <option value="md">Petit</option>
                                    <option value="lg">Moyen</option>
                                    <option value="2xl">Grand</option>
                                    <option value="3xl">Très grand</option>
                                </select>
                            </div>
                            <input 
                                type="color" 
                                value={textColor} 
                                onChange={(event) => setTextColor(event.target.value)} 
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                            />
                        </div>
                        <div className='ml-96 flex flex-row space-x-11 border border-[#2BCCC0] rounded-full h-14 '>
                            <div className='px-4 m-auto  '>
                                <button 
                                    onClick={downloadMeme} 
                                    style={{ 
                                        backgroundImage: `url(${down})`, 
                                        backgroundSize: 'cover', 
                                        width: '24px', 
                                        height: '24px'
                                    }}>
                                </button> 
                            </div>   
                            <div className='px-4 m-auto '>
                            </div>
                        </div>   
                    </div>
                </div>
                {showPopup && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ">
                        <div className="bg-[#134743] p-4 rounded space-x-5">
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
                            <button onClick={() => setShowPopup(false)}> Entrer</button>
                        </div>
                    </div>
                )}
                <Footer />
            </div>
        );
    };

    return <MemeGeneratorUser />;
};

export default StackPage;
