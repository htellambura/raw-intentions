import React from "react";
import { NavLink } from "react-router-dom";
import "./Information.css";

const Shipping = () => {
  return (
    <div className="information shipping">
      <div className="shipping-content">
        <div className="title">
          <h1 id="shipping-title">shipping</h1>
        </div>
        <section>
          <div className="info-pg">
            <h2 id="title-1">
              for shipping information, please refer to the table below
            </h2>
            <p>
              * Please note that due to COVID-19 shipping times may vary. Postal
              services may delay your order. We are not responsible for any
              postage delays or disruptions.
            </p>
            <p>* All prices are in CAD</p>
          </div>
          <table id="shipping-table">
            {" "}
            {/* Add props if costs will change */}
            <tr>
              <th>Location</th>
              <th colSpan="2">Standard Cost</th>
            </tr>
            <tr>
              <td>Canada</td>
              <td colSpan="2">$4</td>
            </tr>
            <tr>
              <td>International</td>
              <td colSpan="2">
                <NavLink to="/contact-us">Contact us</NavLink> for more
                information
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Shipping;
