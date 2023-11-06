import React from "react";
import styled from "styled-components";
import BlurbCard from "../components/BlurbCard";

const PageTitle = styled.h1`
  font-family: "Kumar One", cursive;
  font-size: 80px;
  text-align: left;
  width: 40%;
  color: #c41230;
  padding: 2rem;
  marign-top: 5%;
`;

export default function Blurbs() {
  return (
    <>
      <PageTitle>Blurbs</PageTitle>
      <BlurbCard />
    </>
  );
}
