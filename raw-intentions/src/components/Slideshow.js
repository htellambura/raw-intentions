import { Slide } from "react-slideshow-image";
import Basics from ".././assets/slideshow/Basics.png";
import Neutrals from ".././assets/slideshow/Neutrals.png";
import React from "react";
import Summer from ".././assets/slideshow/WelcomeToSummer.png";

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
