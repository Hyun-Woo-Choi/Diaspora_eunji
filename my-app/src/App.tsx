import React from "react";
import "./App.css";
import { Route, createBrowserRouter } from "react-router-dom";

import HeaderBar from "./components/HeaderBar";
import Home from "./pages/Home";
import Blurbs from "./pages/Blurbs";
import DataSheetPage from "./pages/DataSheetPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blurbs",
    element: <Blurbs />,
  },
  {
    path: "/datasheet",
    element: <DataSheetPage />,
  },
]);

function App() {
  return (
    <>
      <HeaderBar />
      <Home />
      <Blurbs />
      <DataSheetPage />
    </>
  );
}

export default App;
