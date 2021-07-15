import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Message from "../../components/Message";

export default function Confirmation(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingInfo } = cart;

  const totalQuantity = (obj) =>
    Object.values(obj).reduce((a, b) => a + b.quantity, 0);
  const totalPrice = (obj) =>
    Object.values(obj).reduce((a, b) => a + b.quantity * b.price, 0) + 4;

  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  const [sent, setSent] = useState(false);

  const submitHandler = (e) => {
    var templateParams = {
      cartItems: JSON.stringify(cartItems),
      ...shippingInfo,
      total: `$${totalPrice(cartItems).toFixed(2)}`,
    };
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    setSent(true);
    props.history.push("payment");
  };
  return (
    <div className="confirmation">
      <h1>Order Confirmation</h1>
      <div className="confirmation-shipping-info">
        <h2>Shipping Information</h2>
        <NavLink
          to="/checkout/shipping-info"
          className="confirmation-edit-info"
        >
          Edit
        </NavLink>
        <table className="confirmation-form-info">
          <tr>
            <th>First Name</th>
            <td>{shippingInfo.firstName}</td>
          </tr>
          <tr>
            <th>Last Name</th>
            <td>{shippingInfo.lastName}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{shippingInfo.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{shippingInfo.phoneNumber}</td>
          </tr>
          <tr>
            <th>Street Address</th>
            <td>{shippingInfo.streetAddress}</td>
          </tr>
        </table>
        <table className="confirmation-form-info">
          <tr>
            <th>Country</th>
            <td>{shippingInfo.country}</td>
          </tr>
          <tr>
            <th>Province</th>
            <td>{shippingInfo.state}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{shippingInfo.city}</td>
          </tr>
          <tr>
            <th>Postal Code</th>
            <td>{shippingInfo.postalCode}</td>
          </tr>
          <tr>
            <th>Apt Suite</th>
            <td>{shippingInfo.aptSuite}</td>
          </tr>
        </table>
      </div>
      <div className="confirmation-cart-info">
        <div className="cart-items">
          {cartItems.length == 0 ? (
            <Message>
              NOTHING HERE!
              <br />
              <NavLink to="/shop">SHOP NOW</NavLink>
            </Message>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item">
                <NavLink to={`/product/${item.product}`}>
                  <img src={item.image} />
                  <div className="cart-item-info">
                    <h2>
                      {item.name} - {item.type}
                    </h2>
                    <p>SIZE {item.size}</p>
                    <p>
                      ${item.price.toFixed(2)} X {item.quantity}
                    </p>
                  </div>
                </NavLink>
                <div className="cart-item-price">
                  <h2>${(item.quantity * item.price).toFixed(2)}</h2>
                  <NavLink to="/cart" className="confirmation-edit-info">
                    Edit
                  </NavLink>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-summary">
          <h2>Summary</h2>
          <div className="cart-summary-details">
            <span>Items</span>
            <span>{cartItems.length == 0 ? 0 : totalQuantity(cartItems)}</span>
          </div>
          <div className="cart-summary-details">
            <span>Shipping</span>
            <span>$4.00</span>{" "}
            {/* implement actual shipping cost calculation */}
          </div>
          <div className="cart-summary-details">
            <span>Total</span>
            <span>
              $
              {cartItems.length == 0
                ? "0.00"
                : totalPrice(cartItems).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <button type="submit" onClick={(e) => submitHandler()}>
        <h3>Confirm my Order</h3>
      </button>
    </div>
  );
}
