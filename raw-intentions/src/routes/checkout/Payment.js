import React from "react";
import { useSelector } from "react-redux";

export default function Payment() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const totalPrice = (obj) =>
    Object.values(obj).reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <div className="payment">
      <h1>Payment</h1>
      <div className="payment-info">
        <p>
          Thanks for placing your order! Your order information has been
          submitted and will be processed shortly{" "}
          <strong>once you follow the instructions below:</strong>
        </p>
        <ol>
          <li>
            Please send an e-Transfer to <em>rawintentionsco@gmail.com</em> of
            your total of{" "}
            <span>
              $
              {cartItems.length == 0
                ? "0.00"
                : totalPrice(cartItems).toFixed(2)}
            </span>{" "}
            with your order number <span>#####</span> in the message.{" "}
            <strong>
              E-Transfers without an order number will not be processed.
            </strong>
          </li>
          <li>
            For the security question, please use the following combination:
            <div className="e-transfer-question">
              <p>Q: What did I buy from you?</p>
              <p>A: Jewelry</p>
            </div>
          </li>
          <li>
            Once the e-Transfer has been received, we will begin creating the
            order. In order to maintain the integrity of our small business,{" "}
            <strong>
              your e-Transfer will not be deposited until the order has shipped.
            </strong>
          </li>
          <li>
            Once your order has shipped, the e-Transfer will be deposited and
            you're on track to receive your package in the mail!
          </li>
        </ol>
        <p className="disclaimer">
          * To lower shipping costs, orders are sent using untracked shipping
        </p>
        <p className="disclaimer">
          *If information or funds are missing, your order will NOT be processed
          and you may be contacted
        </p>
      </div>
    </div>
  );
}
