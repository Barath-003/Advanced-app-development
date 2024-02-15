import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import UpdateEventForm from './UpdateEventForm';
import axios from 'axios';
import Delete from './Delete';
import bir from '../assets/birthday.jpg';
import an from '../assets/anniversary.jpg';
import gra from '../assets/graduation.jpg';
import  mar from '../assets/marriage.jpg';

const EventCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
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

const EventButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const EventButton = styled.button`
  padding: 8px;
  width: 48%;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const SearchInput = styled.input`
  margin-top: 20px;
  padding: 8px;
  width: 100%;
`;

const getEventImage = (eventType) => {
  switch (eventType) {
    case 'Marriage':
      return mar; 
    case 'Birthday':
      return bir; 
    case 'Anniversary':
      return an; 
    case 'Graduation':
      return gra; 
    default:
      return 'default.jpg'; // Default image URL if event type is not recognized
  }
};

const AllEvents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [eventsData, setEventsData] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeletePage, setShowDeletePage] = useState(false);
  const [Id, setEventId] = useState('');
  
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

  const handleUpdateClick = (event) => {
    setEventId(event);
    setShowUpdateForm(true);
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
  };

  const handleDeleteClick = (Id) => {
    setEventId(Id);
    setShowDeletePage(true); 
  };

  const handleDeleteClose = () => {
    setShowDeletePage(false); 
  };

  const handleDeleteSuccess = () => {
    setShowDeletePage(false); 
  };

  return (
    <div>
      <Navbar />
      <EventCardContainer>
        <SearchInput
          type="text"
          placeholder="Search by event type"
          value={searchQuery}
          onChange={handleSearch}
        />
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
            <EventButtonContainer>
              <EventButton onClick={() => handleUpdateClick(event)}>Update</EventButton>
              <EventButton onClick={() => handleDeleteClick(event.eventid)}>Delete</EventButton>
            </EventButtonContainer>
          </EventCard>
        ))}
      </EventCardContainer>

      {showUpdateForm && (
        <UpdateEventForm onClose={handleCloseUpdateForm} eventData={Id} />
      )}

      {showDeletePage && (
        <Delete 
          Id={Id}
          onClose={handleDeleteClose} 
          onDelete={handleDeleteSuccess} 
        />
      )}
    </div>
  );
};

export default AllEvents;
