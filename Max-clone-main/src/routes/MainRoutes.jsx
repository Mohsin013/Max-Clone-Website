import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Men from "../components/ProductPage/Men/Men";
import Women from "../components/ProductPage/Women/Women";
import { Basket } from "../components/Basket/Basket";
import Checkout from "../components/Checkout/Checkout";


const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainRoutes;
