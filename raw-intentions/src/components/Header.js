import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INSTAGRAM, TIKTOK } from "../constants/constants";
import { NavLink } from "react-router-dom";
import logo from ".././assets/icons/Logo.png";
import React from "react";

import "./Components.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="links">
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">shop</NavLink>
            </li>
          </ul>
        </div>
        <div id="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="icons">
          <ul>
            <li>
              <a href={INSTAGRAM}>
                <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
              </a>
            </li>
            <li>
              <a href={TIKTOK}>
                <FontAwesomeIcon icon={faTiktok} className="fa-2x" />
              </a>
            </li>
            <li>
              <NavLink to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} className="fa-2x" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
