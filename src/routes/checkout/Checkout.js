import React from "react";

import ShippingInfoForm from "./ShippingInfoForm";
import Payment from "./Payment";
import Message from "../../components/Message";

export default function Checkout(props) {
  const checkoutStep = props.match.params.step;
  return (
    <div class="checkout">
      {checkoutStep == "shipping-info" ? (
        <ShippingInfoForm />
      ) : checkoutStep == "payment" ? (
        <Payment />
      ) : (
        <Message>Page Not Found</Message>
      )}
    </div>
  );
}
