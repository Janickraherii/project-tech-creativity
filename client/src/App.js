import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Accueil';
import React, { useState } from 'react';
import ContactUsForm from './pages/Contact_form';
import AuthForm from './pages/Auth_form';
import Dropzone from './pages/Dropzone';

function App() {
  const [backgroundColor] = useState('#111111'); 
  return (
    <div style={{backgroundColor}}>
      <Dropzone/>
    </div>
  );
}

export default App;
