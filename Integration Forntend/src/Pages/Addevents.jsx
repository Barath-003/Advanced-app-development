import { useState } from 'react';
import './Addevents.css';
import Navbar from './Navbar';
import axios from 'axios';

const Addevents = () => {
  const [eventtype, setEventtype] = useState("");
  const [description, setDescription] = useState("");
  const [eventpackage, setEpackage] = useState("");
  const [count, setCount] = useState("");
  const [charge, setCharge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEventtype = (event) => {
    setEventtype(event.target.value);
  }

  const handleDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleEPackage = (event) => {
    setEpackage(event.target.value);
  }

  const handleCount = (event) => {
    setCount(event.target.value);
  }
  
  const handleCharge = (event) => {
    setCharge(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!eventtype.trim() || !description.trim() || !eventpackage.trim() || !count.trim() || !charge.trim()) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (isNaN(Number(count)) || isNaN(Number(charge))) {
      setErrorMessage("Count and Charge must be valid numbers.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/addevent",
        { eventtype, description, eventpackage, count, charge }
      );
      setSubmitted(true);
      setSuccessMessage("Event added successfully!");
      setEventtype("");
      setDescription("");
      setEpackage("");
      setCount("");
      setCharge("");
      setErrorMessage("");
    } catch (error) {
      console.error("Adding event failed");
      console.error(error);
      setSubmitted(false);
      setErrorMessage("Failed to add event. Please try again later.");
    } 
  }

  return (
    <div className='l'>
      <Navbar />
      <div className="addevents-container">
        <div className="container">
          <center><h2>Add Event</h2></center>
          <form className='fr' onSubmit={handleSubmit}>
            <label>
              Event Type:
              <select
                className="Select"
                value={eventtype}
                onChange={handleEventtype}
              >
                <option value="">Select Event Type</option>
                <option value="Marriage">Marriage</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Graduation">Graduation</option>
                {/* <option value="Corporate Event">Corporate Event</option> */}
              </select>
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={description}
                onChange={handleDescription}
              />
            </label>
            <label>
              Package:
              <input
                type="text"
                name="package"
                value={eventpackage}
                onChange={handleEPackage}
              />
            </label>
            <label>
              Count:
              <input
                type="text"
                name="count" 
                value={count} 
                onChange={handleCount}
              />
            </label>
            <label>
              Charges:
              <input
                type="text"
                name="charges"
                value={charge}
                onChange={handleCharge}
              />
            </label>
            <center>{successMessage && <p className="success">{successMessage}</p>}</center>
            <button type="submit">Submit</button>
            <center>{errorMessage && <p className="error">{errorMessage}</p>}</center> 
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addevents;
