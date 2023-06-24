import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './User.css';

const User = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const [mainImageSrc, setMainImageSrc] = useState('');
  
 



  // const [selectedImage, setSelectedImage] = useState();
  // const mainImageSize = 200;

  const imageList = [
    { id: 1,  src: require("./gamer1.png") },
    { id: 2, src : require("./gamer1f.png") },
    { id: 3, src:  require("./gamer2m.png") },
    { id: 4, src:  require("./gamer2f.png") },
    { id: 5, src:  require("./gamer3m.png") },
    { id: 6, src:  require("./gamer3f.png") },
    { id: 7, src:  require("./gamer4m.png") },
    { id: 8, src:  require("./gamer4f.png") },
    // Add more image data here
  ];

  // const smallImageSize = 50;
  const [mainImage, setMainImage] = useState(imageList[0]);

  // ...
  useEffect(() => {
    const storedImage = localStorage.getItem('mainImage');
    if (storedImage) {
      setMainImage(JSON.parse(storedImage));
    }
  }, []);
  



  const handleImageClick = (image) => {
    setMainImage(image);
   
    localStorage.setItem('mainImage', JSON.stringify(image));
  };
  const handleChangePassword = () => {
    // Perform validation checks
    if (!oldPassword || !newPassword || !confirmPassword) {
      console.log('Please fill in all fields');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      console.log('New password and confirm password do not match');
      alert("New password and confirm password do not match");
      return;
    }
  
    // Make API request to change password
    axios
      .post('https://cipherscape-api.onrender.com/ChangePassword', {
        username: username,
        oldPassword: oldPassword,
        newPassword: newPassword,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.message);
          alert("Password Changed!");
        } else {
          console.log(res.data.message);
          alert("Old password is wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios
      .get('https://cipherscape-api.onrender.com/', { withCredentials: true })
      .then((res) => {
        const { success, email, username } = res.data;
        if (success) {
          setEmail(email);
          setUsername(username);
        } else {
          setError('User not found');
          console.log(error)
        }
      })
      .catch((err) => {
        setError('Error fetching data');
        console.log('Error fetching data:', err);
      });
  }, []);

  return (
    <div className="user-container">
      <p className='h2'  id = "h21">{username}</p>
      <div className="user-images">
  <img
    className="user-main-image"
    src={mainImage.src}
    alt="Main Image"
  />
  <div className="user-thumbnail-images">
    {imageList.map((image) => (
      <img
        className={`user-thumbnail-image ${image === mainImage ? 'active' : ''}`}
        src={image.src}
        alt={`Image ${image.id}`}
        key={image.id}
        onClick={() => handleImageClick(image)}
        
      />
    ))}
  </div>
      </div>
      <p className='h2' id = "h22">Personal Detail</p>
      <div className="user-info">
        <p><label>
          Username:
          <p  className='user-detail'>{username}</p>
        </label></p>
        <p><label>
          Email:
          <p className='user-detail'>{email}</p>
        </label></p>
      </div>
      <p className='h2'  id = "h23">Change Password</p>
      <form className="change-password-form">
        <label>
          Old Password:
          <input
            required
          
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          New Password:
          <input
            required
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="off"
          />
        </label>
        <label>
          Confirm Password:
          <input
            required
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="off"
          />
        </label>
        <button className='pass-button' onClick={handleChangePassword}>Change</button>
      </form>
      
    </div>
  );
};

export default User;
