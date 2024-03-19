import React, { useEffect, useState, useRef, useContext } from 'react';
import { fabric } from 'fabric';
import { ImageContext } from './UseApi'; // Assurez-vous que le chemin d'importation est correct

const Stack = () => {
    const selectedImage = useContext(ImageContext);

    const [memes, setMemes] = useState([]);
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const canvasRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();


    useEffect(() => {
        // Récupération des mèmes
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setMemes(data.data.memes))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (memes.length > 0) {
            const canvas = new fabric.Canvas(canvasRef.current);
            fabric.Image.fromURL(selectedImage.url, function(img) { // Utiliser l'image sélectionnée ici
                img.scaleToWidth(500);
                canvas.add(img);
                text1Ref.current = new fabric.Text(text1, { left: 10, top: 10 });
                text2Ref.current = new fabric.Text(text2, { left: 10, top: 50 });
                canvas.add(text1Ref.current);
                canvas.add(text2Ref.current);
            });
        }
    }, [memes, text1, text2, selectedImage]); // Ajouter selectedImage comme dépendance

    const handleTextChange = (event, setText, textRef) => {
        setText(event.target.value);
        textRef.current.canvas.renderAll();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-auto">
            <canvas ref={canvasRef} width={500} height={500} />
            <input type="text" value={text1} onChange={event => handleTextChange(event, setText1, text1Ref)} />
            <input type="text" value={text2} onChange={event => handleTextChange(event, setText2, text2Ref)} />
        </div>
    );
};

export default Stack;