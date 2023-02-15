import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AddCard } from "./Components/Admin/AddCard";

import { Navbar } from "./Components/Navbar/Navbar";
import { MainRouter } from "./MainRouter";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainRouter />
    </>
  );
};

export default App;
