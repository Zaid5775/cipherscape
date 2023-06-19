import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cipher from './components/cipher';
import Login from './components/Login';
import Signup from './components/Signup';
import Howtoplay from './components/Howtoplay';

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
        <Route path="/cipherscape/Signup" element={<Signup />} />
        <Route
          path="/cipherscape/Login"
          element={<Login handleLogin={handleLogin} />}
        />
        <Route
          path="/cipherscape"
          element={
            loggedIn ? (
              <Cipher handleLogout={handleLogout} />
            ) : (
              <Navigate to="/cipherscape/Login" />
            )
          }
        />
        <Route path="/cipherscape/Howtoplay" element={<Howtoplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
