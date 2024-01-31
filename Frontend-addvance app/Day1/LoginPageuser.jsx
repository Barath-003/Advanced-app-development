// LoginPage.jsx

import { useState } from 'react';
import './LoginPageuser.css';
import logo from './../assets/Borcelle.png';
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [userType, setUserType] = useState('user'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill out the fields');
      return;
    }

    if (!email.includes('@')) {
      console.error('Email should contain @ symbol');
      setErrorMessage('Email should contain @ symbol');
      return;
    }

    console.log('User Type:', userType);
    console.log('Email:', email);
    console.log('Password:', password);

    setErrorMessage('');
  };

  return (
    <div className="body">
      <div className="login-container">
        <div className="img-container">
          <img
            src={logo}
            alt="Background"
          />
        </div>
        <div className="login-form-container">
          <center>
            <h2>Login</h2>
          </center>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="lemail"
                name="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="lpassword"
                name="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-group">
              <center>
                <Link to='/Homeuser'>
                  <button type="submit" className="form-button">
                    Log in to my account
                  </button>
                </Link>
              </center>
            </div>
            <div className="social-icons">
              <a href="#" className="icon"><i className=""><FaFacebook /></i></a>
              <a href="#" className="icon"><i className=""><FaGoogle /></i></a>
              <a href="#" className="icon"><i className=""><FaTwitter /></i></a>
              <a href="#" className="icon"><i className=""><FaLinkedinIn /></i></a>
            </div>
            <div className='h3'>
           <center><h3>Welcome to Borcelle</h3></center>
           <center><p>You can organize just about anything with a Borcelle</p></center>
           </div>
            <div className="additional-links">
              <center>
                <a href="#" className="form-link">
                  Forgot my password
                </a>{' '}
                ||{' '}
                <a href="/Signup" className="form-link">
                  Sign Up
                </a>
              </center>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
