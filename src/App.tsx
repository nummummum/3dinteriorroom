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
import ProductDetailRoom from "./pages/ProductDetailRoom";
import CartPage from "./pages/CartPage";
import MyPage from "./pages/MyPage";
import InteriorPage from "./pages/InteriorPage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path="/product" element={<ProductObjectPage />}></Route>
        <Route path="/product/detail" element={<ProductDetailObj />}></Route>
        <Route path="/showroom" element={<ProductRoomPage />}></Route>
        <Route path="/showroom/detail" element={<ProductDetailRoom />}></Route>
        <Route path="/promotion" element={<NoticePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/community" element={<CommunityPage />}></Route>
        <Route path="/interior" element={<InteriorPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
