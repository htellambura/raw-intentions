import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../actions/cartActions";

import { COUNTRIES } from "../../constants/constants";

import "./Checkout.css";

export default function ShippingInfoForm(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingInfo } = cart;

  const [firstName, setFirstName] = useState(shippingInfo.firstName);
  const [lastName, setLastName] = useState(shippingInfo.lastName);
  const [email, setEmail] = useState(shippingInfo.email);
  const [streetAddress, setStreetAddress] = useState(
    shippingInfo.streetAddress
  );
  const [aptSuite, setAptSuite] = useState(shippingInfo.aptSuite);
  const [country, setCountry] = useState(shippingInfo.country || "Canada");
  const [state, setProv] = useState(shippingInfo.state || "Alberta");
  const [city, setCity] = useState(shippingInfo.city);
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode);
  const [phoneNumber, setPhoneNumber] = useState(shippingInfo.phoneNumber);
  const [specialRequests, setSpecialRequests] = useState(
    shippingInfo.specialRequests
  );
  const [orderId, setOrderId] = useState(
    Math.floor(Math.random() * 90000) + 10000
  );
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingInfo({
        firstName,
        lastName,
        email,
        streetAddress,
        aptSuite,
        country,
        state,
        city,
        postalCode,
        phoneNumber,
        specialRequests,
        orderId,
      })
    );

    props.history.push("confirmation");
  };

  return (
    <div className="shipping-info">
      <form
        className="shipping-info-form"
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <h1>Shipping Information</h1>
        <input
          id="shipping-first-name"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
          type="text"
          value={firstName}
        />
        <input
          id="shipping-last-name"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
          type="text"
          value={lastName}
        />
        <input
          id="shipping-email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          type="email"
          value={email}
        />
        <input
          id="shipping-street-address"
          onChange={(e) => setStreetAddress(e.target.value)}
          placeholder="Street Address"
          required
          type="text"
          value={streetAddress}
        />
        <input
          id="shipping-apt-suite"
          onChange={(e) => setAptSuite(e.target.value)}
          placeholder="Apt. Suite (Optional)"
          type="text"
          value={aptSuite}
        />
        <select
          id="shipping-country"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        >
          <option value="" disabled>
            Country
          </option>
          {Object.keys(COUNTRIES).map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <select
          id="shipping-state"
          onChange={(e) => setProv(e.target.value)}
          value={state}
        >
          <option value="" disabled>
            State/Province
          </option>
          {country &&
            COUNTRIES[country].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
        <input
          id="shipping-city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          required
          type="text"
          value={city}
        />
        <input
          id="shipping-postal-code"
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Postal Code"
          required
          type="text"
          value={postalCode}
        />
        <input
          id="shipping-phone-number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone"
          type="tel"
          value={phoneNumber}
        />
        <textarea
          id="shipping-special-requests"
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Special Requests"
          value={specialRequests}
        />
        <button
          type="submit"
          onClick={() => setText(JSON.stringify(cartItems))}
        >
          <h3>Confirm</h3>
        </button>
      </form>
    </div>
  );
}
