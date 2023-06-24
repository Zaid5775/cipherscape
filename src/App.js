import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cipher from './components/cipher';
import Login from './components/Login';
import Signup from './components/Signup';
import Howtoplay from './components/Howtoplay';
import Under from './components/under'
import User from './components/User'
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
        <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/User" element={<User />} />
        <Route path="/Howtoplay" element={<Howtoplay />} />
        {/* <Route path="/About" element={<About />} /> */}

        <Route
          path="/"
          element={
            loggedIn ? <Cipher /> : <Navigate to="/Login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App






















































































// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Cipher from './components/cipher';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Howtoplay from './components/Howtoplay';
// import Under from './components/under'
// import User from './components/User'


// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* <Route path="/Signup" element={<Signup />} />
//         <Route
//           path="/Login"
//           element={<Login handleLogin={handleLogin} />}
//         />
//         <Route
//           path="/"
//           element={
//             loggedIn ? (
//               <Cipher  />
//             ) : (
//               <Navigate to="/Login" />
//             )
//           }
//         />
//         <Route path="/Howtoplay" element={<Howtoplay />} />
//         <Route path = "User" element = {<User/>}/> */}
   




// <Route exact path="/login" component={Login} />
//         <Route exact path="/signup" component={Signup} />
//         <PrivateRoute exact path="/" component={Cipher} />
//         <Route path="*">
//           <Navigate to="/" />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated
  
//   return (
//     <Route
//       {...rest}
//       render={(props) => isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />}
//     />
//   );
// };

// export default App;
