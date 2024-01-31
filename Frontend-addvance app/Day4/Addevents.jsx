// Addevents.jsx
import { useState } from 'react';
import './Addevents.css';
import Navbar from './Navbar';

const Addevents = ({ onAddEvent }) => {
  const [eventData, setEventData] = useState({
    type: '',
    description: '',
    package: '',
    participants: '',
    charges: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(eventData);
    console.log('Event data submitted:', eventData);
  };

  return (
    <div className='l'>
      <Navbar />
      <div className="addevents-container">
        <center><h2>Add Event</h2></center>
        <form className='fr' onSubmit={handleSubmit}>
          <label>
            Event Type:
            <input
              type="text"
              name="type"
              value={eventData.type}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Package:
            <input
              type="text"
              name="package"
              value={eventData.package}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Participants:
            <input
              type="text"
              name="participants"
              value={eventData.participants}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Charges:
            <input
              type="text"
              name="charges"
              value={eventData.charges}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Addevents;
