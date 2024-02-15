import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import axios from 'axios';

const Container = styled.div`
  margin-top: 40px;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
`;

const Select = styled.select`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${({ status }) =>
    status === 'pending'
      ? '#ff9800'
      : status === 'confirmed'
      ? '#4caf50'
      : status === 'rejected'
      ? '#f44336'
      : '#555'};
`;

const Option = styled.option`
  background-color: rgba(0,0,255,0.3);
`;

const AllBooking = () => {
  const [data, setData] = useState([]);
  let Id = localStorage.getItem('user');

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/auth/bookevent`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Id]);

  const filteredEvents = data;

  const handleStatusChange = async (eventId, status) => {
    console.log("Updating status for event ID:", eventId);
    console.log("New status:", status);
    try {
      await axios.put(`http://localhost:8080/api/v1/auth/bookevent/update/${eventId}`, status, {
        headers: {
          'Content-Type': 'text/plain'
        }
      });
      window.location.reload(); 
      alert("Booking Status Updated Successfully!");
      console.log("Booking status updated successfully!");
    } catch (error) {
      console.error("Error updating booking status:", error);
      alert("Updating Booking Status Failed...Please Try Again!");
    }
  }

  return (
    <Container>
      <Navbar />
      <Table className="table">
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Submission Date</Th>
            <Th>Description</Th>
            <Th>Event Type</Th>
            <Th>Event Date</Th>
            <Th>Head Count</Th>
            <Th>Booking Status</Th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.bookingID}>
              <Td>{event.name}</Td>
              <Td>{event.submissionDate}</Td>
              <Td>{event.description}</Td>
              <Td>{event.eventType}</Td>
              <Td>{event.eventDate}</Td>
              <Td>{event.headcount}</Td>
              <Td>
                <Select
                  status={event.bookingStatus.toLowerCase()}
                  value={event.bookingStatus}
                  onChange={(e) => handleStatusChange(event.bookingID, e.target.value)}
                  className={event.bookingStatus.toLowerCase() === 'pending' ? 'pe1' : event.bookingStatus.toLowerCase() === 'confirmed' ? 'con1' : 're1'}
                >
                  <Option className="drop" value="Pending">Pending</Option>
                  <Option className="drop" value="Confirmed">Confirmed</Option>
                  <Option className="drop" value="Rejected">Rejected</Option>
                </Select>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllBooking;
