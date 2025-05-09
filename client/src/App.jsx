import React from "react";
import { Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, PlaceOrder, Cart } from "./pages";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
