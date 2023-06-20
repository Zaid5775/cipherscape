import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cipher from './components/cipher';
import Login from './components/Login';
import Signup from './components/Signup';
import Howtoplay from './components/Howtoplay';
import Under from './components/under';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
        {loggedIn ? (
          <>
            <Route path="/" element={<Under />} />
            <Route path="/Cipher" element={<Cipher />} />
            <Route path="/Howtoplay" element={<Howtoplay />} />
          </>
        ) : (
          <Navigate to="/Login" />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
