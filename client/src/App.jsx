import React, { Fragment } from "react";
import { Footer, Navbar } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, PlaceOrder, Cart } from "./pages";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
