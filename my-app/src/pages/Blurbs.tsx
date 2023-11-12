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

interface BookData {
  ISBN: string;
  Author_Translated: string | null;
  Author: string;
  Title: string[] | string;
  OriginalTitle: string[] | string;
  TranslatedBy: string;
  Publisher: string;
  PublicationDate: string;
  OriginalPublicationDate: string;
  Genre1: string;
  Genre2: string;
  Genre3: string | null;
  Genre4: string | null;
  Genre5: string | null;
  MainScreenGraph: string;
  TtiJiData: string;
  TtiJiAdType: string[] | string;
  TtiJiAdTranslation: string | null;
  BookCoverTranslation: string | null;
  IncludeDiasporaTerm: string;
  IdentityUsedForMarketing: string;
  Note: string | null;
  MouseHovering: string | null;
  DiasporicHeritage: string | null;
}
const rawBookData: BookData[] = require("../static/rawBookData.json").Bookdata;

export default function Blurbs() {
  return (
    <>
      <PageTitle>Book Blurbs</PageTitle>
      {rawBookData.map((book) => (
        <BlurbCard key={book.ISBN} {...book} />
      ))}
    </>
  );
}
