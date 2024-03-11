import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Accueil';
import Actuality from './pages/Actuality';
import Profile from './pages/Profile';
import Dropzone from './pages/Dropzone';
import AuthForm from './pages/AuthForm';
import SignUp from './pages/SignUp';

function App() {
    return (
    <Router>
      <div className='bg-[#111111] h-screen'> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/actualites" element={<Actuality />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/dropzone" element={<Dropzone />} />
          <Route exact path="/createUser" element={<AuthForm />} />
          <Route exact path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
