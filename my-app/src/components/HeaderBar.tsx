import React from 'react';

import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io';
import styled from 'styled-components';

const Header = styled.header`
  background-color: #c41230;
  font-family: 'Kumar One', cursive;
  display: flex;
  color: black;
  height: 70px;
  padding: 20px;
  font-size: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const HomeIcon = styled(IoIosHome)`
  margin-right: 8px;
`;

export default function HeaderBar() {
  return (
    <div>
      <Header>
        Diaspora Voice In Translation: Building a Digital Archive of
        Contemporary Novels
        {/* <GrHome /> */}
        <HomeLink to="/">
          <HomeIcon />
        </HomeLink>
      </Header>
    </div>
  );
}
