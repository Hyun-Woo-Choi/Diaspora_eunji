import React from "react";
import "./App.css";
// import { Route, createBrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderBar from "./components/HeaderBar";
import Home from "./pages/Home";
import Blurbs from "./pages/Blurbs";
import DataSheetPage from "./pages/DataSheetPage";

function App() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blurbs" element={<Blurbs />} />
        <Route path="/datasheet" element={<DataSheetPage />} />
      </Routes>
      {/* <Home />
      <Blurbs />
      <DataSheetPage /> */}
    </>
  );
}

export default App;
