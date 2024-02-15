// LoginPage.jsx

import { useState } from 'react';
import './LoginPage.css';
import logo from './../assets/Borcelle.png';
import { FaFacebook, FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

 
    const handleName=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        setFormErrors(validate({email,password}));
        if(isSubmit===true){
            try{
              console.log("Login Successful");
              window.location.href = "/Home";
                // navigate('/Signup');
            }catch(error){
                console.error('Error: ',error);
            }
        }
    }

    

    const validate=(values)=>{
        const errors={};
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.email){
        errors.username="Email is Required";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        if(!values.password){
        errors.password="Password is Required";
        setIsSubmit(false);
        }
        else if(!preg.test(values.password)){
        errors.password="Invalid password";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        return errors;
    }

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
                onChange={handleName}
              />
              <p>{formErrors.username}</p>
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={password}
                onChange={handlePwd}
              />
              <p>{formErrors.password}</p>
            </div>
            <div className="input-group">
              <center>
                {/* <Link to='/Home'> */}
                  <button type="submit" className="form-button">
                    Log in to my account
                  </button>
                {/* </Link> */}
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
               
              {/* <Link to="/Signup"><a href="#" className="form-link">
                  Sign Up
                </a></Link>   */}
              </center>
            </div>
            {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
