import React from "react";
// import { GrHome } from "react-icons/gr";
import styled from "styled-components";

const Header = styled.header`
  background-color: #c41230;
  font-family: "Kumar One", cursive;
  display: flex;
  color: black;
  height: 70px;
  padding: 20px;
  font-size: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function HeaderBar() {
  return (
    <div>
      <Header>
        Diaspora Voice In Translation: Building a Digital Archive of
        Contemporary Novels
        {/* <GrHome /> */}
      </Header>
    </div>
  );
}
