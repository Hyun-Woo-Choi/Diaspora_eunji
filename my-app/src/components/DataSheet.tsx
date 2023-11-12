import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface BookData {
  ISBN: string;
  AuthorTranslated: string;
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

function createData(book: BookData) {
  const title = Array.isArray(book.Title) ? book.Title.join(", ") : book.Title;
  const originalTitle = Array.isArray(book.OriginalTitle)
    ? book.OriginalTitle.join(", ")
    : book.OriginalTitle;

  return {
    ISBN: book.ISBN,
    Author: book.Author,
    Title: title,
    OriginalTitle: originalTitle,
    TranslatedBy: book.TranslatedBy,
    Publisher: book.Publisher,
    PublicationDate: book.PublicationDate,
    OriginalPublicationDate: book.OriginalPublicationDate,
    Genre1: book.Genre1,
    Genre2: book.Genre2,
    Genre3: book.Genre3,
    Genre4: book.Genre4,
  };
}

const rows = rawBookData.map((book) => createData(book));

export default function DataSheet() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ISBN</StyledTableCell>
            <StyledTableCell align="right">Author</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Original Title</StyledTableCell>
            <StyledTableCell align="right">Translated By</StyledTableCell>
            <StyledTableCell align="right">Publisher</StyledTableCell>
            <StyledTableCell align="right">Publication Date</StyledTableCell>
            <StyledTableCell align="right">
              Original Publication Date
            </StyledTableCell>
            <StyledTableCell align="right">Genre 1</StyledTableCell>
            <StyledTableCell align="right">Genre 2</StyledTableCell>
            <StyledTableCell align="right">Genre 3</StyledTableCell>
            <StyledTableCell align="right">Genre 4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.ISBN}>
              <StyledTableCell component="th" scope="row">
                {row.ISBN}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Author}</StyledTableCell>
              <StyledTableCell align="right">{row.Title}</StyledTableCell>
              <StyledTableCell align="right">
                {row.OriginalTitle}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.TranslatedBy}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Publisher}</StyledTableCell>
              <StyledTableCell align="right">
                {row.PublicationDate ? row.PublicationDate.slice(0, 10) : "N/A"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.OriginalPublicationDate}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Genre1}</StyledTableCell>
              <StyledTableCell align="right">{row.Genre2}</StyledTableCell>
              <StyledTableCell align="right">{row.Genre3}</StyledTableCell>
              <StyledTableCell align="right">{row.Genre4}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
