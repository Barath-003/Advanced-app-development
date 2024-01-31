// import Navbar from '../Components/Navbar';
// import Unav from '../Components/Unav';
import './MyBooking.css';
import Navbaruser from './Navbaruser';
// import React, { useState, useEffect } from 'react';
// import survey from './cheffinder-logo.png';
// import {Link} from "react-router-dom"


function Userbook() {
  return (
    <div className="backq11">
      <Navbaruser/>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Submission Date</th>
            <th>Description</th>
            <th>Event Type</th>
            <th>Event Date</th>
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Guru</td>
              <td>6-10-2024</td>
              <td>Birthday Party</td>
              <td>Birthday</td>
              <td>9-12-2024</td>
              <td><button className="con1">Confirmed</button></td>
            </tr>
            <tr>
              <td>Hari</td>
              <td>24-8-2024</td>
              <td>Birthday Party</td>
              <td>Birthday</td>
              <td>1-11-2024</td>
              <td><button className="pen">Pending</button></td>
            </tr>
            <tr>
              <td>Siva</td>
              <td>23-12-2023</td>
              <td>Bachelor party</td>
              <td>Normal</td>
              <td>4-02-2024</td>
              <td><button className="re1">Rejected</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Userbook;