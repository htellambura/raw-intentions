import React from "react";
import "./Information.css";

const AboutUs = () => {
  return (
    <div className="information about-us">
      <div className="about-us-content">
        <div className="title">
          <h1 id="about-us-title">About Us</h1>
        </div>
        <section>
          <div className="info-pg">
            <h2 id="title-1">Who are we ?</h2>
            <p>
              Simply, we embody positive intention and use raw materials to
              create a unique reminder to stay grounded.
            </p>
          </div>
          <br />
          <div className="info-pg">
            <h2 id="title-2">What do we sell ?</h2>
            <p>We sell current and trendy handmade jewelry!</p>
          </div>
          <br />
          <div className="info-pg">
            <h2 id="title-3">Where are we located ?</h2>
            <p>We are currently located in Edmonton, Alberta, Canada.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
