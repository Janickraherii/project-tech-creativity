import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import logo from '../assets/logo.png';


function Header() {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile';
  const backgroundColor = isProfilePage ? 'transparent' : 'bg-gradient-to-b from-transparent to-[rgba(43,204,192,0.5)]';
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier la présence d'un cookie contenant le token
    const token = Cookies.get("token");

    if (token) {
      // Le cookie avec le token est présent
      setIsLoggedIn(true);
    } else {
      // Le cookie avec le token n'est pas présent
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Supprimer le cookie contenant le token
    Cookies.remove("token");
    // Mettre à jour le state isLoggedIn
    setIsLoggedIn(false);
    // Rediriger vers la page d'accueil
    navigate("/");
  };

  return (
    <header className={`border border-[#2BCCC0] rounded-b-3xl h-20 flex flex-row sticky top-0 backdrop-blur-md ${backgroundColor}`} style={{ zIndex: '2' }}>
      <div className='flex justify-between'>
        <img src={logo} alt="Logo de mon application" className='h-16 ml-48 m-2' /> 
      </div>          
      <div className=' flex justify-end space-x-4 w-full mr-6'>
        {isLoggedIn ? (
          // Si l'utilisateur est connecté, affiche le bouton de déconnexion
          <button onClick={handleLogout} className="bg-black rounded-full mt-6 h-10 px-2 py-1 text-[#2BCCC0] ">
  Déconnexion
</button>

        ) : (
          // Sinon, affiche les boutons d'inscription et de connexion
          <>
            <Link to="/signup">
              <button className='border-2 border-[#2BCCC0]  p-2 px-auto h-10 mt-6 text-[#2BCCC0] rounded-3xl text-base flex items-center justify-center  backdrop-blur-md bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)]'>Inscription</button>
            </Link>      
            <Link to="/authentification">
              <button className='border-2 border-[#DA51A0] bg-gradient-to-b from-transparent to-[rgba(51,17,41,0.7)] p-2 px-auto h-10 mt-6 text-[#DA51A0] rounded-3xl text-base flex items-center justify-center sticky top-0 backdrop-blur-md'>Se connecter</button>
            </Link> 
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
