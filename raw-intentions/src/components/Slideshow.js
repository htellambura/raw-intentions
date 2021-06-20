import React from "react";
import { Slide } from "react-slideshow-image";
import Neutrals from ".././assets/slideshow/neutrals.png";
import Basics from ".././assets/slideshow/basics.png";
import Summer from ".././assets/slideshow/welcome-to-summer.png";

const images = [Neutrals, Basics, Summer];
const properties = {
  duration: 4000,
  transitionDuration: 700,
  infinite: true,
  arrows: false,
  pauseOnHover: true,
};
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {images.map((image) => (
          <div className="each-slide">
            <img src={image}></img>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
