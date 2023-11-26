import React from "react";
import styled from "styled-components";
import BlurbCard from "../components/BlurbCard";

const PageTitle = styled.div`
  font-family: "Kumar One", cursive;
  font-size: 80px;
  text-align: left;
  width: 40%;
  color: #c41230;
  padding: 2rem;
  marign-top: 5%;
`;

const BlurbsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
  // margin: 20px;
  align-items: center;
`;

// interface BookData {
//   ISBN: string;
//   Author_Translated: string | null;
//   Author: string;
//   Title: string[] | string;
//   OriginalTitle: string[] | string;
//   TranslatedBy: string;
//   Publisher: string;
//   PublicationDate: string;
//   OriginalPublicationDate: string;
//   Genre1: string;
//   Genre2: string;
//   Genre3: string | null;
//   Genre4: string | null;
//   Genre5: string | null;
//   MainScreenGraph: string;
//   TtiJiData: string;
//   TtiJiAdType: string[] | string;
//   TtiJiAdTranslation: string | null;
//   BookCoverTranslation: string | null;
//   IncludeDiasporaTerm: string;
//   IdentityUsedForMarketing: string;
//   Note: string | null;
//   MouseHovering: string | null;
//   DiasporicHeritage: string | null;
// }
// const rawBookData: BookData[] = require("../static/rawBookData.json").Bookdata;

interface BookData {
  ISBN: string;
  Author_Translated: string | null;
  Author: string;
  Title_Translated: string | string;
  Original_Title: string | string;
  Translated_By: string;
  Korean_Publisher: string;
  Korean_Edition_Publication_Date: string;
  Original_Publication_Year: string;
  Genre_1: string;
  Genre_2: string;
  Genre_3: string | null;
  Genre_4: string | null;
  Genre_5: string | null;
  Author_of_Korean_Ethnicity: string;
  Blurb_Translated: string | null;
}

const rawBookData: BookData[] = require("../static/Blurbs.json").BookData;

export default function Blurbs() {
  return (
    <>
      <PageTitle>Book Blurbs</PageTitle>
      <BlurbsContainer>
        {rawBookData.map((book) => (
          <BlurbCard key={book.ISBN} {...book} />
        ))}
      </BlurbsContainer>
    </>
  );
}
