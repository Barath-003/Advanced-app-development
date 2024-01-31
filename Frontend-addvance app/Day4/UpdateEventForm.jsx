// UpdateEventForm.jsx
import { useState } from 'react';
import styled from 'styled-components';

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

const UpdateEventForm = ({ onClose, eventData }) => {
  const [updatedEvent, setUpdatedEvent] = useState(eventData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleUpdate = () => {
    console.log('Updated Event:', updatedEvent);
    onClose();
  };

  return (
    <UpdateFormOverlay>
      <UpdateFormContainer>
        <h2>Edit Event</h2>
        <label>
          Event Type:
          <input type="text" name="eventType" value={updatedEvent.eventType} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={updatedEvent.description} onChange={handleInputChange} />
        </label>
        <label>
          Package:
          <input type="text" name="package" value={updatedEvent.package} onChange={handleInputChange} />
        </label>
        <label>
          Participants:
          <input type="number" name="participants" value={updatedEvent.participants} onChange={handleInputChange} />
        </label>
        <label>
          Charges:
          <input type="number" name="salary" value={updatedEvent.salary} onChange={handleInputChange} />
        </label>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </UpdateFormContainer>
    </UpdateFormOverlay>
  );
};

export default UpdateEventForm;
