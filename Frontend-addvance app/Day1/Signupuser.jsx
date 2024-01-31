// Signup.jsx

import { useState } from 'react';
import './Signup.css';
import logo from './../assets/Borcelle.png';
import { Link } from "react-router-dom";

const Signup = () => {
  const [userType, setUserType] = useState('user'); // 'user' is the default user type
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !phoneNumber || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill out all the fields');
      return;
    }

    if (!email.includes('@')) {
      setErrorMessage('Email should contain @ symbol');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    console.log('User Type:', userType);
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Password:', password);

    setErrorMessage('');
  };

  return (
    <div className="sbody">
      <div className="registration-container">
        <div className="img-container">
          <img src={logo} alt="Background" />
        </div>
        <div className="registration-form-container">
          <center>
            <h2>Register</h2>
          </center>
          {/* Radio Buttons for User Type */}
          <form className="sform" onSubmit={handleSubmit}>
            <div className="sinput-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sinput-group">
              <input
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="form-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="sinput-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="sinput-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="sinput-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="sinput-group">
              <center>
               <Link to="/Homeuser"> <button type="submit" className="form-button">
                  Register my account
                </button>
                </Link>
              </center>
            </div>
            <div className='h2'>
           <center></center>
           <center><p>You can organize just about anything with a Borcelle</p>
           </center></div>
            <center>
              <a href="/" className="bala">
                Already have an account? Log in
              </a>
            </center>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
