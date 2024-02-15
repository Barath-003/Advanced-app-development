import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BookingFormOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Ensure the overlay is above other content */
  overflow-y: auto; /* Allow overlay content to scroll */
`;

const BookingFormContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
  overflow-y: auto; /* Allow form content to scroll */
  max-height: 80%; /* Set a maximum height for the form container */
  width: 70%; /* Set the width of the form container */
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
`;
let id=localStorage.getItem('user');
const BookingForm = ({ onClose }) => {
  const [bookingData, setBookingData] = useState({
    name: '',
    submissionDate: '',
    description: '',
    eventType: '',
    eventDate: '',
    headcount: '',
    userid:id,
    bookingStatus: 'pending',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBookEvent = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/bookevent', bookingData);
      console.log('Booking successful:', response.data);
      alert('Booking successful!');
      onClose(); // Close the booking form after successful booking
    } catch (error) {
      console.error('Error occurred while booking:', error);
      setErrorMessage('Failed to book the event. Please try again later.');
    }
  };

  const validateForm = () => {
    for (const key in bookingData) {
      if (!bookingData[key]) {
        setErrorMessage(`Please fill out ${key.replace(/_/g, ' ')}`);
        return false;
      }
    }
    setErrorMessage('');
    return true;
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <BookingFormOverlay>
      <BookingFormContainer>
        <h2>Book Event</h2>
        <StyledInput
          type="text"
          name="name"
          value={bookingData.name}
          placeholder="Enter your Name"
          onChange={handleInputChange}
        />
        <StyledInput
          type="date"
          name="submissionDate"
          value={bookingData.submissionDate}
          placeholder="Submission Date"
          onChange={handleInputChange}
        />
        <StyledInput
          type="text"
          name="description"
          value={bookingData.description}
          placeholder="Description"
          onChange={handleInputChange}
        />
        <StyledInput
          type="text"
          name="eventType"
          value={bookingData.eventType}
          placeholder="Event Type"
          onChange={handleInputChange}
        />
        <StyledInput
          type="date"
          name="eventDate"
          value={bookingData.eventDate}
          onChange={handleInputChange}
        />
        <StyledInput
          type="number"
          name="headcount"
          value={bookingData.headcount}
          placeholder="Number of Guests"
          onChange={handleInputChange}
        />
        <StyledButton onClick={handleBookEvent}>Book Now</StyledButton>
        <StyledButton onClick={onClose}>Cancel</StyledButton>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </BookingFormContainer>
    </BookingFormOverlay>
  );
};

export default BookingForm;
