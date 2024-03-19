import React, { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';
import { useLocation } from 'react-router-dom';

const Stack = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const canvasRef = useRef();
    const text1Ref = useRef();
    const text2Ref = useRef();
    const location = useLocation();

    const selectedImageURL = location.state ? location.state.imageURL : null;

    useEffect(() => {
        console.log("URL arrivée sur Stack:", selectedImageURL);
        if (selectedImageURL) {
            fetch(selectedImageURL)
                .then(response => response.blob())
                .then(blob => {
                    const url = URL.createObjectURL(blob);
                    const canvas = new fabric.Canvas(canvasRef.current);
                    fabric.Image.fromURL(url, function(img) {
                        if (img) {
                            img.scaleToWidth(500);
                            canvas.add(img);
                            text1Ref.current = new fabric.Text(text1, { left: 10, top: 10 });
                            text2Ref.current = new fabric.Text(text2, { left: 10, top: 50 });
                            canvas.add(text1Ref.current);
                            canvas.add(text2Ref.current);
                        } else {
                            console.error('Failed to load image from URL: ' + url);
                        }
                    }, {crossOrigin: 'use-credentials'});
                })
                .catch(error => console.error('Error:', error));
        }
    }, [selectedImageURL, text1, text2]);

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
