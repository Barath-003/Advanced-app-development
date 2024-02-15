import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbaruser from './Navbaruser';
import axios from 'axios';

const Container = styled.div`
  margin-top: 40px;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  margin-top: 20px;
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

const Button = styled.button`
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

const MyBooking = () => {
  const [data, setData] = useState([]);
  let Id = localStorage.getItem('user');

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/auth/bookevent/${Id}`)
      .then((response) => {
        setData(response.data);
       
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Id]);

  const filteredEvents = data;

  return (
    <Container>
      <Navbaruser />
      <Table>
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
                <Button status={event.bookingStatus.toLowerCase()}>
                  {event.bookingStatus}
                </Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyBooking;
