import React from "react";

import ShippingInfoForm from "./ShippingInfoForm";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import Message from "../../components/Message";

export default function Checkout(props) {
  const checkoutStep = props.match.params.step;
  return (
    <div class="checkout">
      {checkoutStep == "shipping-info" ? (
        <ShippingInfoForm history={props.history} />
      ) : checkoutStep == "payment" ? (
        <Payment />
      ) : checkoutStep == "confirmation" ? (
        <Confirmation history={props.history} />
      ) : (
        <Message>Page Not Found</Message>
      )}
    </div>
  );
}
