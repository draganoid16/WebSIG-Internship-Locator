import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";


// Components
import Home from "./Components/Home";
import Login from "./Components/Login";
import Listings from "./Components/Listings";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
