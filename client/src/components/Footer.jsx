import React, { useEffect, useState } from 'react';
import home from '../assets/home-line.svg';
import explorer from '../assets/Explorer.svg';
import plus from '../assets/majesticons_plus.png';
import heart from '../assets/majesticons_heart.svg';
import user from '../assets/majesticons_user-line.svg';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifiez si le token est présent dans les cookies
    const token = Cookies.get('token');
    setIsLoggedIn(!!token); // Met à jour l'état isLoggedIn en fonction de la présence du token
  }, []);

  const handleLoginRedirect = () => {
    // Rediriger vers la page de connexion
    navigate('/signup');
  };

  return (
    <footer className='bg-black bg-opacity-75 w-full fixed inset-x-0 bottom-0 h-12 border border-[#3a142a]'>
      <div className='flex flex-row justify-between '>
        <Link to="/">
          <img src={home} alt="Accueil" className='w-6 ml-6 m-4' />
        </Link>
        {isLoggedIn ? (
          <Link to="/actualites">
            <img src={explorer} alt="Actualités" className='w-6 ml-6 m-4' />
          </Link>
        ) : (
          <div onClick={handleLoginRedirect}>
            <img src={explorer} alt="Actualités" className='w-6 ml-6 m-4 cursor-pointer' />
          </div>
        )}
        <div onClick={isLoggedIn ? () => navigate('/dropzone') : handleLoginRedirect}>
          <img src={plus} alt="Dropzone" className='w-12 h-12 ml-6 m-4 -mt-6 z-50 cursor-pointer' />
        </div>
        <img src={heart} alt="Favoris" className='w-6 ml-6 m-4' />
        <div onClick={isLoggedIn ? () => navigate('/profile') : handleLoginRedirect}>
          <img src={user} alt="Profil" className='w-6 ml-6 m-4 cursor-pointer' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
