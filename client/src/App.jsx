import React, { Fragment } from "react";
import { Footer, Navbar } from "./components";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, PlaceOrder, Cart, Login, Register } from "./pages";

const App = () => {
  const location = useLocation();
  const isAuthenPage =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <div className="app">
      {!isAuthenPage ? <Navbar /> : <></>}
      <div className={!isAuthenPage ? `body` : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      {!isAuthenPage ? <Footer /> : <></>}
    </div>
  );
};

export default App;
