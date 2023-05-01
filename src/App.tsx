import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NoticePage from "./pages/NoticePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/promotion" element={<NoticePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
