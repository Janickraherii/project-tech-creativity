import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Accueil';
// import Actuality from './pages/Actuality';
import Profile from './pages/Profile';
import Dropzone from './pages/Dropzone';
import AuthForm from './pages/AuthForm';
import SignUp from './pages/SignUp';
import Modification from './pages/Modification';
import UseApi from './pages/UseApi';
import Stack from './pages/Stack';
import ContactUsForm from './pages/ContactForm';
import Actuality from './pages/Actuality';
import Login from './pages/Login';
import PolitiqueConfidentialite from './pages/PrivacyPolicy';

function App() {
    return (
    <Router>
      <div className='bg-[#111111] h-screen'> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/actualites" element={<Actuality />} /> */}
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/dropzone" element={<Dropzone />} />
          <Route exact path="/authentification" element={<AuthForm />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/edit" element={<Modification />} />
          <Route exact path="/contactus" element={<ContactUsForm />} />
          <Route path="/useapi" element={<UseApi/>} />
          <Route path="/stack" element={<Stack />} /> 
          <Route path="/actualites" element={<Actuality />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<PolitiqueConfidentialite />} />



        </Routes>
      </div>
    </Router>
  );
}

export default App;
