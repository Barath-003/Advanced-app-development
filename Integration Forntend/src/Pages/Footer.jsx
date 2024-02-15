// Footer.jsx
// import React from 'react';
import { FaTwitter,FaFacebook,FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
      <footer className="footer">
  <div className="social-iconss">
  <p>Find us on social media</p>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FaTwitter/>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
     <FaFacebook/>
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
   <FaLinkedin/>
    </a>
  </div>
  

  {/* Party Celebration Management */}
  <div className="party-management">
      Our services include:
    <ul>
        <div className='ven'>
      <li>Venue selection and decoration</li>
      <li>Themed event design</li>
      <li>Catering services with a diverse menu</li>
      <li>Entertainment and activities planning</li>
      <li>Photography and videography coverage</li>
      <li>Customized party favors and gifts</li>
      </div>
    </ul>
    <p>
      Contact our team to turn your special occasions into magical moments! Let us handle the details
      while you enjoy a stress-free and delightful celebration.
    </p>
    <button className="contact-button">Contact Us</button>
  </div>
  <div className="copyright">
        <p>&copy; 2024 Borcelle Company. All rights reserved.</p>
      </div>
</footer>
  );
};

export default Footer;
