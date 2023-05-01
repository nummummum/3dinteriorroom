import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NoticePage from "./pages/NoticePage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/promotion" element={<NoticePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
