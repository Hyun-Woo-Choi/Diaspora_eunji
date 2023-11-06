import { create } from "domain";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import styled from "styled-components";

const SideBar = styled.div`
  width: 20%;
  padding: 10px;
  background-color: #e0e0e0;
  font-family: "kumar one", cursive;
  font-size: 40px;
  margin: 20px;
  paddig: 5%;
  ul li {
    margin-bottom: 40px;
  }
`;

export default function SideNavBar() {
  return (
    <>
      <SideBar>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/datasheet">Data Sheet</a>
          </li>
          <li>
            <a href="/blurbs">Blurbs</a>
          </li>
        </ul>
      </SideBar>
    </>
  );
}
