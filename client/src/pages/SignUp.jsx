import React, { useState } from 'react';
import logo from '../assets/logo.png';
import facebook from '../assets/logo-facebook.png';
import gmail from '../assets/logo-gmail.svg';
import line from '../assets/line.svg';
import backgroundImg from '../assets/papier.jpg';

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(formData);
      if (response.ok) {
        const data = await response.json();
        console.log('User created successfully:', data);
        alert('User created successfully!');
        // Optionally redirect the user to another page or display a success message
      } else {
        console.error('Failed to create user:', response.status);
        alert('Failed to create user. Please try again.');
        console.log(response)
      }
    } catch (error) {
      console.error('Error creating user:', error);
      alert('An error occurred while creating the user. Please try again later.');
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
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
          <div  className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl">
          <input
              type="text"
              placeholder="Nom d'utilisateur"
              name="lastname" value={formData.lastname} onChange={handleChange} 
              className="bg-transparent text-[#7BE3DB] border-b border-[#7BE3DB] rounded-t-lg text-xs py-3 px-4 outline-none mb-4"
           required  />
            <input
              type="text"
              placeholder="prénom d'utilisateur"
              name="firstname" value={formData.firstname} onChange={handleChange} 
              className="bg-transparent text-[#7BE3DB] border-b border-[#7BE3DB] rounded-t-lg text-xs py-3 px-4 outline-none mb-4"
           required  />
            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
                   
              className="bg-transparent text-[#7BE3DB] border-b border-[#7BE3DB] text-xs py-3 px-4 outline-none mb-4"
              required />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange} 
                 
              className="bg-transparent text-[#7BE3DB] border-b border-[#7BE3DB] rounded-b-lg text-xs py-3 px-4 outline-none mb-4"
              required />
            <button type="submit" className="bg-[#DA51A0] bg-opacity-70 backdrop-blur-lg rounded-3xl text-white text-xs py-3 mt-2 w-full">
              Créer un compte
            </button>
          </div>
          <img src={line} alt="Ligne décorative" className="w-64 my-6" />
          
        </div>
        <div className='flex flex-row h-12 space-x-12 justify-center'>
            <button className="flex flex-row justify-center items-center bg-[#7BE3DB] bg-opacity-70 backdrop-blur-lg rounded-3xl text-xs px-6 ">
            Se connecter avec <img src={gmail} className="ml-3" alt="Logo Gmail" />
          </button>
          <button className="flex flex-row justify-center items-center bg-[#7BE3DB] bg-opacity-70 backdrop-blur-lg rounded-3xl text-xs  px-6">
            Se connecter avec <img src={facebook} className="ml-3" alt="Logo Facebook" />
          </button>
          </div>
          
      </div>
      
    </div>
  </div>
    
    </form>
            
      
  
</>

  


  );
}

export default SignUp;
