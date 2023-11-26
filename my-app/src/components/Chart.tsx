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

const events = [
  { date: new Date(2001, 8, 11), label: "September 11 attacks" },
  // Add other events as needed
  { date: new Date(2004, 11, 2), label: "United States presidential election" },
  { date: new Date(2005, 8, 29), label: "Hurricane Katrina" },
  { date: new Date(2007, 4, 16), label: "Virginia Tech shooting" },
  { date: new Date(2008, 11, 4), label: "United States presidential election" },
  { date: new Date(2009, 0, 20), label: "Inauguration of Barack Obama" },
  { date: new Date(2012, 10, 6), label: "United States presidential election" },
  {
    date: new Date(2013, 7, 13),
    label: "Beginning of the Black Lives Matter movement",
  },
  { date: new Date(2016, 11, 8), label: "United States presidential election" },
  { date: new Date(2020, 1, 20), label: "Covid-19 pandemic" },
  { date: new Date(2020, 5, 26), label: "George Floyd protests" },
  { date: new Date(2020, 10, 3), label: "United States presidential election" },
  {
    date: new Date(2021, 0, 6),
    label: "Storming of the United States Capitol",
  },
];

export default function Chart() {
  return (
    <>
      <LineChart
        xAxis={[
          {
            id: "Years",
            data: years,
            scaleType: "time",
            valueFormatter: (date) => date.getFullYear().toString(),
          },
          {
            id: "Events",
            data: events,
            scaleType: "time",
            position: "top",
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
      {/* <EventOverlay events={events} /> */}
    </>
  );
}
