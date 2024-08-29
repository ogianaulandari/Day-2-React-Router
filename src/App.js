import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Beranda from './components/Beranda';
import About from './components/About'; 
import Help from './components/Help';
import Media from './components/Media';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [isLogIn, setIsLogIn] =useState(false);
  const handleLogin = () => setIsLogIn(true);
  const handleLogout = () => setIsLogIn(false);
  return (
    <Router>
      <Navbar
        isLogIn={isLogIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
