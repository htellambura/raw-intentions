import React from "react";
import { NavLink } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import CD from "../../assets/home/cd-gif.gif";
import Saturn from "../../assets/home/saturn-gif.gif";
import PaintBeads from "../../assets/home/paint-beads.png";
import MSPaint from "../../assets/home/ms-paint.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-column">
          <img src={Saturn} id="saturn-gif"></img>
          <img src={MSPaint} id="ms-paint"></img>
        </div>
        <div className="slideshow">
          <Slideshow />
        </div>
        <div className="home-content-column">
          <img src={CD} id="cd-gif"></img>
          <img src={PaintBeads} id="ms-paint-beads"></img>
          <NavLink to="shop">shop now</NavLink>
        </div>
        <NavLink to="shop" id="home-shop-link-mobile">
          shop now
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
