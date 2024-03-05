import React, { useState } from 'react';
import logo from '../assets/logo.png';
import facebook from '../assets/logo-facebook.png';
import gmail from '../assets/logo-gmail.svg';
import line from '../assets/line.svg';
import backgroundImg from '../assets/papier.jpg';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire au serveur pour créer le compte utilisateur
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
  <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover', // Pour que l'image remplisse entièrement le fond
        backgroundPosition: 'center', // Pour centrer l'image
        minHeight: '100vh', // Pour que le conteneur prenne au moins toute la hauteur de la vue
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', }}>
    <div className="flex flex-row justify-center">
      <div className="w-1/2">
        <div className="mt-24 ml-12">
          <img src={logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-xs text-[#7BE3DB] mb-6">Libérez l'humour numérique sans limites !</p>
          <form onSubmit={handleSubmit} className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl">
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={handleUsernameChange}
              className="bg-transparent text-[#7BE3DB] border-b border-[#7BE3DB] rounded-t-lg text-xs py-3 px-4 outline-none mb-4"
            />
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={handleEmailChange}
              className="bg-transparent text-[#7BE3DB] border-b border-[#7BE3DB] text-xs py-3 px-4 outline-none mb-4"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handlePasswordChange}
              className="bg-transparent text-[#7BE3DB] border-b border-[#7BE3DB] rounded-b-lg text-xs py-3 px-4 outline-none mb-4"
            />
            <button type="submit" className="bg-[#DA51A0] bg-opacity-70 backdrop-blur-lg rounded-3xl text-white text-xs py-3 mt-2 w-full">
              Créer un compte
            </button>
          </form>
          <img src={line} alt="Ligne décorative" className="w-64 my-6" />
          
        </div>
        <div className='flex flex-row h-12 space-x-12 justify-center'>
            <button className="flex flex-row justify-center items-center bg-[#FFD700] bg-opacity-70 backdrop-blur-lg rounded-3xl text-xs px-6 ">
            Se connecter avec <img src={gmail} className="ml-3" alt="Logo Gmail" />
          </button>
          <button className="flex flex-row justify-center items-center bg-[#FFD700] bg-opacity-70 backdrop-blur-lg rounded-3xl text-xs  px-6">
            Se connecter avec <img src={facebook} className="ml-3" alt="Logo Facebook" />
          </button>
          </div>
          
      </div>
      
    </div>
  </div>
</>

  


  );
}

export default SignUp;