// import React from 'react';
import './First.css';
import { Link } from 'react-router-dom';

const First = () => {
  return (
    <div className="backq">
    <section>
        <div className='ha'>
          <p className='animate-character'>BORCELLE</p>
        <p>----------------------------------------------------------------------------</p>
         <p className='btn-shine'>"From Planning to Perfection: Your Party, Our Expertise." </p>
         <br></br>
         <p>----------------------------------------------------------------------------</p>
         <br></br>
         <br></br><br></br>
        <Link to="/LoginPageuser"><button className="userbut" type="submit" >
              USER
            </button></Link> 
        <Link to="/LoginPage"><button className="Adminbut" type="submit" >
              ADMIN
            </button></Link>
        </div>
      </section>
    </div>
      
  );
};

export default First;