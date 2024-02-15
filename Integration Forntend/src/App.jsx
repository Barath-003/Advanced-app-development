// import React from 'react'
// import Hello from './Components/Hello'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
// import Signup from './Pages/Signup';
import Signupuser from './Pages/Signupuser';
import AllEvent from './Pages/AllEvents';
import Addevents from './Pages/Addevents';
import UpdateEventForm from './Pages/UpdateEventForm';
import AllBooking from './Pages/AllBooking';
import MyBooking from './Pages/MyBooking';
import Homeuser from './Pages/Homeuser';
import AllEventuser from './Pages/AllEventuser';
import First from './Pages/First';
import LoginPageuser from './Pages/LoginPageuser';
import Book from './Pages/Book';
// import Delete from './Pages/Delete';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/"element={<First/>}/>
        <Route path="/LoginPage"element={<LoginPage/>}/>
        <Route path="/LoginPageuser"element={<LoginPageuser/>}/>
        {/* <Route path="/Signup"element={<Signup/>}/> */}
        <Route path="/Signupuser"element={<Signupuser/>}/>
         <Route path="/Navbar"element={<Navbar/>}/>
         <Route path="/Home"element={<Home/>}/>
         <Route path="/Homeuser"element={<Homeuser/>}/>
         <Route path="/AllEvents"element={<AllEvent/>}/>
         <Route path="/AddEvents"element={<Addevents/>}/>
         <Route path="/UpdateEventForm"element={<UpdateEventForm/>}/>
         <Route path="/AllBooking"element={<AllBooking/>}/>
         <Route path="/MyBooking"element={<MyBooking/>}/>
         <Route path="/Book"element={<Book/>}/>
         <Route path="/AllEventuser"element={<AllEventuser/>}/>
       </Routes>
    </Router>
    // <Home/>
    // <LoginPage/>
    // <Signup/>
  );
};

export default App;
