import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import myImage from '../assets/privacy.jpg';

const PolitiqueConfidentialite = () => {
  return (
    <>
    <Header/>
    <div style={{ color: '#FFFFFF', backgroundColor: '#000000' , height: '100vh' }} className="flex flex-col items-center justify-center p-20">
      <h1 className='text-xl text-center font-bold mt-40'>Politique de Confidentialité</h1>
      <img src={myImage} className='w-80' alt="Description de l'image " /> {/* Ajoutez cette ligne */}

      <p>
        Bienvenue sur le site web de LinQ. Chez LinQ, nous accordons une
        grande importance à la confidentialité de nos utilisateurs. Cette
        politique de confidentialité décrit les types d'informations que nous
        collectons lorsque vous utilisez notre site, comment nous utilisons ces
        informations et comment nous les protégeons. En utilisant ce site, vous
        consentez à la collecte et à l'utilisation de vos informations telles
        que décrites dans cette politique.
      </p>
      <h2 className='text-xl text-center font-bold'>Collecte d'Informations</h2>
      <p>
        Nous collectons des informations personnelles identifiables telles que
        votre nom, votre adresse e-mail et d'autres informations que vous nous
        fournissez volontairement lorsque vous utilisez notre site.
      </p>
      <h2 className='text-xl text-center font-bold'>Utilisation des Informations</h2>
      <p>
        Les informations que nous collectons sont utilisées pour améliorer
        l'expérience utilisateur sur notre site, personnaliser votre
        expérience, répondre à vos demandes et vous contacter au sujet de nos
        services.
      </p>
      <h2 className='text-xl text-center font-bold'>Protection des Informations</h2>
      <p>
        Nous mettons en œuvre des mesures de sécurité pour protéger vos
        informations personnelles contre tout accès non autorisé, toute
        modification, toute divulgation ou toute destruction.
      </p>
      <h2 className='text-xl text-center font-bold'>Cookies</h2>
      <p>
        Notre site utilise des cookies pour améliorer l'expérience utilisateur.
        En utilisant notre site, vous consentez à l'utilisation de cookies
        conformément à notre politique de confidentialité.
      </p>
      <h2>Modifications de la Politique de Confidentialité</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Nous vous encourageons à consulter
        régulièrement cette page pour prendre connaissance des éventuelles
        modifications.
      </p>
      <h2 className='text-xl text-center font-bold'>Contactez-nous</h2>
      <p className='mb-40'>
        Si vous avez des questions concernant cette politique de confidentialité,
        vous pouvez nous contacter à l'adresse suivante : janick.raheri@gmail.com.
      </p>
    </div>
    </>
    
    
  );
};

export default PolitiqueConfidentialite;
