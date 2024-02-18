import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Accueil';
import React, { useState } from 'react';

function App() {
  const [backgroundColor] = useState('#111111'); 
  return (
    <div style={{backgroundColor}}>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
