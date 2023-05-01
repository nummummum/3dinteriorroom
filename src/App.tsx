import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
