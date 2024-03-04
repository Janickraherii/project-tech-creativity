import React, { useState } from 'react';

function UserProfile() {
  const [profile, setProfile] = useState({
    profilePicture: 'url_de_la_photo_de_profil_par_defaut.jpg',
    coverPhoto: 'url_de_la_photo_de_couverture_par_defaut.jpg',
    username: 'Nom d\'utilisateur par défaut',
    voteCount: 0,
    images: ['url_image_1.jpg', 'url_image_2.jpg', 'url_image_3.jpg', 'url_image_4.jpg', 'url_image_5.jpg']
  });

  const [startIndex, setStartIndex] = useState(0);

  // Fonction pour modifier la photo de profil
  const changeProfilePicture = (newPictureUrl) => {
    setProfile({ ...profile, profilePicture: newPictureUrl });
  };

  // Fonction pour modifier la photo de couverture
  const changeCoverPhoto = (newCoverUrl) => {
    setProfile({ ...profile, coverPhoto: newCoverUrl });
  };

  // Fonction pour décaler l'index de départ lors de la navigation
  const handleNext = () => {
    if (startIndex + 4 < profile.images.length) {
      setStartIndex(startIndex + 4);
    }
  };

  // Fonction pour revenir en arrière lors de la navigation
  const handlePrev = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    }
  };

  return (
    <div>
      <img src={profile.coverPhoto} alt="Cover" />
      <img src={profile.profilePicture} alt="Profile" />
      <h1>{profile.username}</h1>
      <p>Nombre de votes : {profile.voteCount}</p>
      {/* Boutons pour modifier les photos */}
      <button onClick={() => changeProfilePicture('nouvelle_url_de_la_photo_de_profil.jpg')}>
        Modifier la photo de profil
      </button>
      <button onClick={() => changeCoverPhoto('nouvelle_url_de_la_photo_de_couverture.jpg')}>
        Modifier la photo de couverture
      </button>
      
      {/* Affichage des images publiées avec navigation */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {profile.images.slice(startIndex, startIndex + 4).map((image, index) => (
          <div key={index} style={{ flex: '1 0 25%', margin: '5px', position: 'relative' }}>
            <img src={image} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }} />
            <div style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
              <button onClick={() => console.log('Partager')}>Partager</button>
              <button onClick={() => console.log('Télécharger')}>Télécharger</button>
              <button onClick={() => console.log('Favoris')}>Favoris</button>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons de navigation */}
      <div>
        <button onClick={handlePrev}>Précédent</button>
        <button onClick={handleNext}>Suivant</button>
      </div>
    </div>
  );
}

export default UserProfile;
