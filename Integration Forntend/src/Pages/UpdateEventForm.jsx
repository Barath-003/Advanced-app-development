import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UpdateFormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpdateFormContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const EventTypeDropdown = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const EventTypeOption = styled.option`
  padding: 8px;
`;

const EventImage = styled.img`
  width: 100px;
  height: auto;
  margin-top: 10px;
`;

const UpdateEventForm = ({ onClose, eventData }) => {
  const [updatedEvent, setUpdatedEvent] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (eventData) {
      setUpdatedEvent(eventData);
    }
  }, [eventData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
    
      if (!updatedEvent.eventtype || !updatedEvent.description || !updatedEvent.epackage || !updatedEvent.count || !updatedEvent.charge) {
        setErrorMessage('Please fill in all fields.');
        return;
      }

      const response = await axios.put(
        `http://localhost:8080/api/v1/auth/addevent/${updatedEvent.eventid}`,
        updatedEvent
        
      );
      window.location.reload();
       console.log('updated successful:', response.data);
      alert('Updated successful!');
      onClose();
    } catch (error) {
      console.error('Update failed:', error);
      setErrorMessage('Failed to update event. Please try again later.');
    }
  };

  return (
    <UpdateFormOverlay>
      <UpdateFormContainer>
        <h2>Edit Event</h2>
        <label>
          Event Type:
          <EventTypeDropdown
            name="eventtype"
            value={updatedEvent.eventtype || ''}
            onChange={handleInputChange}
          >
            <EventTypeOption value="">Select Event Type</EventTypeOption>
            <EventTypeOption value="Marriage">Marriage</EventTypeOption>
            <EventTypeOption value="Birthday">Birthday</EventTypeOption>
            <EventTypeOption value="Anniversary">Anniversary</EventTypeOption>
            <EventTypeOption value="Graduation">Graduation</EventTypeOption>
            <EventTypeOption value="Others">Others</EventTypeOption>
          </EventTypeDropdown>
        </label>
        <label>
          Description:
          <input type="text" name="description" value={updatedEvent.description || ''} onChange={handleInputChange} />
        </label>
        <label>
          Package:
          <input type="text" name="epackage" value={updatedEvent.epackage || ''} onChange={handleInputChange} />
        </label>
        <label>
          Participants:
          <input type="number" name="count" value={updatedEvent.count || ''} onChange={handleInputChange} />
        </label>
        <label>
          Charges:
          <input type="number" name="charge" value={updatedEvent.charge || ''} onChange={handleInputChange} />
        </label>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
        <center>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </center>
      </UpdateFormContainer>
    </UpdateFormOverlay>
  );
};

export default UpdateEventForm;
