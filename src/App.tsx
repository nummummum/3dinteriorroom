import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NoticePage from "./pages/NoticePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import Footer from "./components/Footer";
import ProductObjectPage from "./pages/ProductObjectPage";
import ProductRoomPage from "./pages/ProductRoomPage";
import ProductDetailObj from "./pages/ProductDetailObj";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/product" element={<ProductObjectPage />}></Route>
        <Route path="/product/detail" element={<ProductDetailObj />}></Route>
        <Route path="/showroom" element={<ProductRoomPage />}></Route>
        <Route path="/showroom/detail" element={<ProductDetailObj />}></Route>
        <Route path="/promotion" element={<NoticePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
