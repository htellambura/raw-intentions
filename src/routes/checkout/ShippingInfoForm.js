import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartActions";

import { COUNTRIES } from "../../constants/constants";

export default function ShippingInfoForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [aptSuite, setAptSuite] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
      })
    );
  };
  return (
    <div>
      <form className="shipping-info-form" onSubmit={submitHandler}>
        <h1>SHIPPING INFORMATION</h1>
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
        >
          <option value="" disabled selected>
            Country
          </option>
          {Object.keys(COUNTRIES).map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <select id="shipping-state" onChange={(e) => setState(e.target.value)}>
          {country ? (
            COUNTRIES[country].map((item) => (
              <option value={item}>{item}</option>
            ))
          ) : (
            <option value="" disabled selected>
              State/Province
            </option>
          )}
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
          placeholder="Phone Number"
          type="tel"
          value={phoneNumber}
        />
        <button type="submit">
          <h3>PROCEED TO PAYMENT</h3>
        </button>
      </form>
    </div>
  );
}
