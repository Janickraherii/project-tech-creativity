import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import image from '../assets/dog_image.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `token=${data.token}; max-age=86400; Secure`;
        navigate('/profile');
      } else {
        setError('Identifiants invalides. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      setError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxHeight: '100vh', overflow: 'auto' }}>
      <div className='flex flex-row justify-end'>
        <div className='max-h-screen'>
          <div className='mt-24'>
            <img src={logo} alt='image1' className='w-44 ml-28 mb-0' />
            <p className='text-xl font-bold text-[#111111] mb-6 bg-[#7BE3DB] text-center'>Libérez l'humour numérique sans limites !</p>
            <div className='border p-6 border-[#7BE3DB] rounded-3xl bg-[#2A2A2A]'>
              <div>
                <p className='text-3xl font-bold text-[#7BE3DB] mb-7 text-center'>Se connecter</p>
              </div>
              <div>
                <form className='flex flex-col space-y-12 p-6'>
                  <input type="text" className='bg-transparent placeholder-[#FFFFFF] border-b border-[#FFFFFF]' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" className='bg-transparent placeholder-[#FFFFFF] border-b border-[#FFFFFF]' placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
                </form>
                <a href="/Signup" className='text-xs text-white ml-6'>Mot de passe oublié ?</a>
              </div>
              <div>
                <button className='bg-[#DA51A0] rounded-3xl text-white text-xs p-32 py-3 mt-10 ml-6' onClick={handleLogin} disabled={loading}>Connexion</button>
                <div className='flex flex-row justify-center mt-6'>
                  <p className='text-white text-xs'>Pas de compte ?</p>
                  <a href="/Signup" className='text-white text-xs underline ml-1'>cliquer ici</a>
                </div>
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt="image1" />
        </div>
      </div>
    </div>
  );
}

export default Login;
