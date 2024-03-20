import React, { useEffect, useState } from 'react';

function Share() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow')
      .then(response => response.json())
      .then(data => {
        const fetchedImages = data.items.map(item => item.owner.profile_image);
        setImages(fetchedImages);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt="Stack Overflow User" />
      ))}
    </div>
  );
}

export default Share;