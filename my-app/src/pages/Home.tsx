import React from "react";
import styled from "styled-components";
import SideNavBar from "./SideNavBar";
import Chart from "../components/Chart";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #E0E0E0
  color: #282c34;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding: 10px;
`;

const Title = styled.h1`
  font-family: "Kumar One", cursive;
  font-size: 80px;
  text-align: left;
  width: 40%;
  color: #c41230;
  padding: 2rem;
  marign-top: 5%;
`;
const Description = styled.div`
  font-family: "italic", cursive;
  font-size: 40px;
  text-align: justify;
  color: #000000;
  padding: 10px;
  width: 55%;
  margin-top: 5%;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Title>Diaspora Voices In Translation</Title>
        <Description>
          This is an ongoing project of tracing and charting the transnational
          migratory journey of diasporic novels. The focus of this project is to
          create a digital archive of novels written in English by diasporic
          authors based in the US post-9/11, with a particular emphasis on the
          way in which diasporic literature is marketed and accepted by the
          Korean audience. The archive will include a record of blurbs and other
          textual advertisements that are used to promote books in the Korean
          book market.
        </Description>
      </Wrapper>
      <Wrapper>
        <SideNavBar />
        <Chart />
      </Wrapper>
    </>
  );
}
