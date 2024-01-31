import React from 'react';
import './AllBooking.css';
import Navbar from './Navbar';

const AllBooking = () => {
  const handleConform = (bookingIndex) => {
    // Handle conform action for the booking at the specified index
    console.log(`Conform clicked for booking at index ${bookingIndex}`);
  };

  const handleReject = (bookingIndex) => {
    // Handle reject action for the booking at the specified index
    console.log(`Reject clicked for booking at index ${bookingIndex}`);
  };

  const bookings = [
    {
      name: 'Ram',
      submissionDate: '2024-01-30',
      description: 'Birthday Party',
      eventType: 'Birthday',
      eventDate: '2024-02-15',
      bookingStatus: 'Pending',
    },
    {
      name: 'Raju',
      submissionDate: '2024-01-30',
      description: 'Birthday Party',
      eventType: 'Birthday',
      eventDate: '2024-02-15',
      bookingStatus: 'Pending',
    },
    // Add more booking data as needed
  ];

  return (
    <div>
      <Navbar />
      <ul className="booking-list">
        <div className='n'>
        <li className="booking-item header">
          <div>Name</div>
          <div>Submission Date</div>
          <div>Description</div>
          <div>Event Type</div>
          <div>Event Date</div>
          <div>Booking Status</div>
        </li>
        </div>

        {bookings.map((booking, index) => (
          <li key={index} className="booking-item">
            <div>{booking.name}</div>
            <div>{booking.submissionDate}</div>
            <div>{booking.description}</div>
            <div>{booking.eventType}</div>
            <div>{booking.eventDate}</div>
            <div className="booking-status">
              {booking.bookingStatus === 'Pending' ? (
                <div>
                  <button className="conform-button" onClick={() => handleConform(index)}>
                    Conform
                  </button>
                  <button className="reject-button" onClick={() => handleReject(index)}>
                    Reject
                  </button>
                </div>
              ) : (
                booking.bookingStatus
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBooking;
