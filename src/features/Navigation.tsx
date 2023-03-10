import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBlock = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  .active {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  return (
    <NavBlock>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/schedule">Schedule</NavLink>
      <NavLink to="/accommodations">Accommodations</NavLink>
      <NavLink to="/rsvp">RSVP</NavLink>
      <NavLink to="/us">US</NavLink>
    </NavBlock>
  );
};

export default Navigation;
