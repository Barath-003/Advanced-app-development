import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbaruser from './Navbaruser';
import axios from 'axios';
import Book from './Book';
import birthdayImage from '../assets/birthday.jpg';
import anniversaryImage from '../assets/anniversary.jpg';
import graduationImage from '../assets/graduation.jpg';
import marriageImage from '../assets/marriage.jpg';

const Container = styled.div`
  margin-top: 40px;
`;

const EventCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  transition: transform 0.3s ease-in-out;
  background-color: #f0f0f0;
  border-radius: 8px;
  backdrop-filter: blur(10px);

  &:hover {
    transform: scale(1.05);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const SearchInput = styled.input`
  margin-top: 10px;
  padding: 6px 10px;
  width: 80%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;

const Alleventuser = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [eventsData, setEventsData] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/auth/addevent")
      .then((response) => {
        setEventsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredEvents = eventsData.filter((event) =>
    event.eventtype.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleBookButtonClick = (event) => {
    setSelectedEvent(event);
    setShowBookingForm(true);
  };

  const handleCloseBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <Container>
      <Navbaruser />
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <SearchInput
        type="text"
        placeholder="Search by event type"
        value={searchQuery}
        onChange={handleSearch}
      />
      <EventCardContainer>
        {filteredEvents.map((event) => (
          <EventCard key={event.id}>
            <EventImage src={getEventImage(event.eventtype)} alt={event.eventtype} />
            <EventDetails>
              <div>
                <strong>Event Type:</strong> {event.eventtype}
              </div>
              <div>
                <strong>Description:</strong> {event.description}
              </div>
              <div>
                <strong>Package:</strong> {event.epackage}
              </div>
              <div>
                <strong>Count:</strong> {event.count}
              </div>
              <div>
                <strong>Charges:</strong> {event.charge}
              </div>
            </EventDetails>
            <Button onClick={() => handleBookButtonClick(event)}>Book</Button>
          </EventCard>
        ))}
      </EventCardContainer>
      {showBookingForm && (
        <Book
          onClose={handleCloseBookingForm}
          eventData={selectedEvent}
        />
      )}
    </Container>
  );
};

export default Alleventuser;

const getEventImage = (eventType) => {
  switch (eventType) {
    case 'Birthday':
      return birthdayImage;
    case 'Anniversary':
      return anniversaryImage;
    case 'Graduation':
      return graduationImage;
    case 'Marriage':
      return marriageImage;
    default:
      return null; 
  }
};
