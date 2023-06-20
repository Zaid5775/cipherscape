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
  
  const handleLogout = () => {
    setLoggedIn(false);
  };


  return (
    <BrowserRouter>

<Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
      </Routes>
      
      {loggedIn ? (
        <Routes>
          <Route path="/" element={<Under handleLogout={handleLogout}  />} />
        
          <Route path="/Howtoplay" element={<Howtoplay />} />
        </Routes>
      ) : (
        <Navigate to="/Login" />
      )}

     
    </BrowserRouter>
  );
}

export default App;
