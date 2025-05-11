import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faGlobe,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState("voucher");
  const [language, setLanguage] = useState("EN");

  const handleChangeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "VN" : "EN"));
  };
  return (
    <div className="navbar">
      <div className="navbar-top">
        <h1 className="left-logo">PIZZA 4P'S</h1>
        <div className="mid-search">
          <div className="search-icon">
            <img
              src={assets.search_icon}
              alt="search_icon"
              width={15}
              height={15}
            />
          </div>
          <input type="text" name="" id="" placeholder="Search" />
        </div>
        <div className="right-cart">
          <div className="account-info">
            <FontAwesomeIcon className="icon" icon={faUser} />
          </div>
          <div onClick={handleChangeLanguage} className="language-change">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <span style={{ color: "white" }}>{language}</span>
          </div>
          <div className="cart-info">
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("voucher")}
            className={menu === "voucher" ? "active" : ""}
          >
            Pizza 4Ps eGift-voucher
          </li>
          <li
            onClick={() => setMenu("shipping")}
            className={menu === "shipping" ? "active" : ""}
          >
            Shipping Policy
          </li>
          <li
            onClick={() => setMenu("refund")}
            className={menu === "refund" ? "active" : ""}
          >
            Return/ cancel and refund Policy
          </li>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Hotline: <span className="hotline">19006043</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
