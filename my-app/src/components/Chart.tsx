import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const years = [
  new Date(2001, 0, 1),
  new Date(2002, 0, 1),
  new Date(2003, 0, 1),
  new Date(2004, 0, 1),
  new Date(2005, 0, 1),
  new Date(2006, 0, 1),
  new Date(2007, 0, 1),
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
  new Date(2019, 0, 1),
  new Date(2020, 0, 1),
  new Date(2021, 0, 1),
  new Date(2022, 0, 1),
];

const OriginalPublicationYear = [
  1, 1, 1, 1, 2, 0, 4, 2, 3, 2, 2, 5, 5, 10, 12, 12, 17, 13, 17, 12, 9, 1,
];
const isAuthorKoreanHeritage = [
  0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 2, 0, 3, 1, 1, 4, 1, 1, 0,
];

export default function Chart() {
  return (
    <LineChart
      xAxis={[
        {
          id: "Years",
          data: years,
          scaleType: "time",
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: "OriginalPublicationYear",
          label: "Original Publication Year",
          data: OriginalPublicationYear,
          showMark: true,
        },
        {
          id: "isAuthorKoreanHeritage",
          label: "isAuthorKoreanHeritage",
          data: isAuthorKoreanHeritage,
          area: true,
          showMark: false,
        },
      ]}
      width={2000}
      height={700}
      margin={{ left: 70 }}
    />
  );
}
