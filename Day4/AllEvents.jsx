// AllEvents.jsx
import { useState } from 'react';
import styled from 'styled-components';
import UpdateEventForm from './UpdateEventForm';
import Navbar from './Navbar';

const EventCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  justify-content: center; /* Centering the events horizontally */
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
  background-color: #f0f0f0 /* Glassmorphism effect */
  border-radius: 8px; /* Adding border-radius to the card */
  backdrop-filter: blur(10px); /* Glassmorphism effect */

  &:hover {
    transform: scale(1.05);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* Adding border-radius to the image */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2); /* Zoom in on hover */
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
  margin-top: 800px;
  padding: 8px;
  width: 10px; /* Set the width to your desired medium size */
`;
   
const AllEvents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Sample events data
  const eventsData = [
    { id: 1, eventType: 'Type A', description: 'Description A', package: 'Package A', participants: 50, salary: 10000, imageUrl: 'https://images.venuebookingz.com/17618-1462348780-wm-Keys-hotel-party-hall1.jpg' },
    { id: 2, eventType: 'Type B', description: 'Description B', package: 'Package B', participants: 30, salary: 8000, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76L8j4-GXvZxvgffYskHcOB4Y0Y8sTaIHBg&usqp=CAU' },
    { id: 3, eventType: 'Type C', description: 'Description C', package: 'Package C', participants: 30, salary: 8000, imageUrl: 'https://www.oyorooms.com/blog/wp-content/uploads/2018/02/How-much-space-does-it-has.png' },
    { id: 4, eventType: 'Type D', description: 'Description D', package: 'Package D', participants: 30, salary: 8000, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJXN2yf7DDxLy6A1IeXuSwVEVGSggoVAZ3w&usqp=CAU' },
    { id: 5, eventType: 'Type E', description: 'Description E', package: 'Package E', participants: 30, salary: 8000, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJ739ACI0IYyP9HtTqDtqRzjmolmEfWqLqA&usqp=CAU' },
  ];

  const filteredEvents = eventsData.filter((event) =>
    event.eventType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleUpdateClick = (event) => {
    setSelectedEvent(event);
    setShowUpdateForm(true);
  };

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
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
            <EventImage src={event.imageUrl} alt={event.eventType} />
            <EventDetails>
              <div>
                <strong>Event Type:</strong> {event.eventType}
              </div>
              <div>
                <strong>Description:</strong> {event.description}
              </div>
              <div>
                <strong>Package:</strong> {event.package}
              </div>
              <div>
                <strong>Participants:</strong> {event.participants}
              </div>
              <div>
                <strong>Charges:</strong> {event.salary}
              </div>
            </EventDetails>
            <EventButtonContainer>
              <EventButton onClick={() => handleUpdateClick(event)}>Update</EventButton>
              <EventButton>Delete</EventButton>
            </EventButtonContainer>
          </EventCard>
        ))}
      </EventCardContainer>

      {showUpdateForm && (
        <UpdateEventForm onClose={handleCloseUpdateForm} eventData={selectedEvent} />
      )}
    </div>
  );
};

export default AllEvents;
