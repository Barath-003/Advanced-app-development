// import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DeleteContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
`;

const DeleteMessage = styled.p`
  margin-bottom: 20px;
`;

const DeleteButtons = styled.div`
  display: flex;
  justify-content: space-between; /* Changed to space-between for better alignment */
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Delete = ({ Id, onClose }) => {
    console.log(Id);
    const handleButtonClick = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/auth/addevent/${Id}`);
            window.location.href = "/AllEvents";
            // navigate("/AdminviewEvents");
            alert("Event Deleted Successfully!");
        } catch (error) {
            alert("Failed to Delete Event!");
            console.error(error);
        }
    };


  return (
    <DeleteContainer>
      <DeleteBox>
        <DeleteMessage>Are you sure you want to delete this event?</DeleteMessage>
        <DeleteButtons>
          <DeleteButton onClick={onClose}>Cancel</DeleteButton>
          <DeleteButton onClick={handleButtonClick}>Delete</DeleteButton>
        </DeleteButtons>
      </DeleteBox>
    </DeleteContainer>
  );
};

export default Delete;
