import React, { useState } from 'react';import logo from '../assets/logo.png'
import deco from '../assets/Component_6.svg'; 


function ContactUsForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {

    e.preventDefault();

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Add your email sending logic here

  }
  return (
    <>
    <div className='flex flex-row space-x-6 w-full h-screen items-center'>
         <div className='flex flex-col w-1/2 mt-20'>
            <img src={logo} alt="image1" className='w-44 ml-80 m-6' /> 
            <p className='text-[#2BCCC0] ml-80 text-lg font-bold'>Libérez l'humour numérique sans limites !</p>
            <img src={deco} alt="image1" className=' w-96 ml-0 m-6 mb-0' /> 
         </div>

    <form onSubmit={handleSubmit} className='w-1/2 '>
        <div className='flex flex-col border border-[#2BCCC0] rounded-3xl text-center bg-[#2A2A2A] mr-60'>
        <p className='text-[#2BCCC0] text-3xl font-bold mt-10'>Contactez-nous</p>
        <p className='text-[#2BCCC0] text-xl font-bold mb-1 m-16 mt-2'>Des retours ? des suggestions? </p>
        <p className='text-[#2BCCC0] mb-2'>{'Nous sommes à l’écoute.'}</p>
        <div className='flex flex-col space-y-10 rounded-b-3xl m-16 mt-0 '>
            <input type="text" id="name" placeholder='Nom' className='bg-transparent mb-2 border-b-2 mt-6 border-gray-300' value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" id="email" placeholder='Email' className='bg-transparent mb-2 border-b-2 mt-6 border-gray-300' value={email} onChange={(e) => setEmail(e.target.value)} required /> 
            <textarea id="message" className='bg-transparent mb-2 border border-[#2BCCC0] h-44' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <div className='flex justify-end'>
                <button type="submit" className='text-white bg-[#515CDA] rounded-2xl w-20 py-1 '>Envoyer</button> 
            </div>
        </div>
        </div>
        
        
    </form>
    
    </div>
   
    

    </> 
  
  );
}

export default ContactUsForm;
