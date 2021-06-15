import React from "react";
import { INSTAGRAM, EMAIL } from "../../constants/constants";
import "./Information.css";

const ContactUs = () => {
  return (
    <div className="information contact-us">
      <div className="contact-us-content">
        <div className="title">
          <h1 id="contact-us-title">Contact Us</h1>
        </div>
        <section>
          <div className="info-pg">
            <h2 id="title-1">Instagram</h2>
            <p>
              Have an unanswered question? DM us on Instagram{" "}
              <a href={INSTAGRAM}> @rawintentionsco</a>
            </p>
          </div>
          <br />
          <div className="info-pg">
            <h2 id="title-2">Email</h2>
            <p>
              For business inquiries, send us an email at
              <a href={EMAIL}> rawintentionsco@gmail.com</a>
            </p>
          </div>
          <br />
          <div className="info-pg">
            <p>
              <strong>Thank you for supporting our small business &lt;3</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
