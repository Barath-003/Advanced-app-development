// Signup.jsx

import { useState } from 'react';
import './Signup.css';
import logo from './../assets/Borcelle.png';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Signup = () => {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [conpassword, setConPassword] = useState("");
  // const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  // const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate=useNavigate();

  const handleName = (event) => {
      setUsername(event.target.value);
  }

  const handleEmail = (event) => {
      setEmail(event.target.value);
  }

  const handlePwd = (event) => {
      setPassword(event.target.value);
  }

  const handleConpass = (event) => {
      setConPassword(event.target.value);
  }
  const handleSubmit = async (event) => {
      event.preventDefault();
      const errors = validate({ email, password, conpassword });
      if (Object.keys(errors).length === 0) {
          setIsSubmit(true);
      } else {
          // setFormErrors(errors);
          setIsSubmit(false);
      }
  }

  useEffect(() => {
      if (isSubmit) {
          submitForm();
      }
  }, [isSubmit]);

  const submitForm = async () => {
      try {
          const response = await axios.post(
              "http://localhost:8080/api/v1/auth/register",
              { name, email, password }
          );
          console.log("Sign up successful");
          console.log(response.data);
          // Clear form fields
          setUsername("");
          setEmail("");
          setPassword("");
          setConPassword("");
          navigate("/LoginPageuser");
      } catch (error) {
          console.error("Registration failed");
          console.error(error);
      } finally {
          setIsSubmit(false);
      }
  }

  const validate = (values) => {
      const errors = {};
      const preg = new RegExp("[A-Z][A-Za-z0-9$_]+");

      if (!values.email) {
          errors.email = "Email is Required";
      }

      if (!preg.test(values.password)) {
          errors.password = "Invalid password";
      }

      if (values.password !== values.conpassword) {
          errors.conpassword = "Passwords do not match";
      }


      return errors;
  }

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
                onChange={handleName} required id="unmae"
              />
            </div>
            <div className="sinput-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={handleEmail} required id="uname"
              />
            </div>
            <div className="sinput-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={handlePwd}
              />
            </div>
            <div className="sinput-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-input"
                value={conpassword}
                onChange={handleConpass}
              />
            </div>
            <div className="sinput-group">
              <center>
              <button type="submit" className="form-button">
                  Register my account
                </button>
              </center>
            </div>
            <div className='h2'>
           <center></center>
           <center><p>You can organize just about anything with a Borcelle</p>
           </center></div>
            <center>
             <Link to="/LoginPage"> <a href="#" className="bala">
                Already have an account? Log in
              </a></Link>
            </center>
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;




