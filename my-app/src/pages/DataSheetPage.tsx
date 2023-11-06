import React from "react";
import styled from "styled-components";
import DataSheet from "../components/DataSheet";

const PageTitle = styled.h1`
  font-family: "Kumar One", cursive;
  font-size: 80px;
  text-align: left;
  width: 40%;
  color: #c41230;
  padding: 2rem;
  marign-top: 5%;
`;

export default function DataSheetPage() {
  return (
    <>
      <PageTitle>Database</PageTitle>
      <DataSheet />
      <h2>To be updated</h2>
    </>
  );
}
