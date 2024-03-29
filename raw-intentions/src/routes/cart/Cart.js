import "./Cart.css";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import React, { useEffect } from "react";

export default function Cart(props) {
  const dispatch = useDispatch();
  const productID = props.match.params.id;
  const params = new URLSearchParams(props.location.search);
  const quantity = props.location.search ? Number(params.get("qty")) : 1;
  const size = props.location.search ? params.get("size") : "O/S";

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, quantity, size));
    }
  }, [dispatch, productID, quantity, size]);

  const removeItemFromCart = (productID, size) => {
    dispatch(removeFromCart(productID, size));
  };
  const totalQuantity = (obj) =>
    Object.values(obj).reduce((a, b) => a + b.quantity, 0);
  const totalPrice = (obj) =>
    Object.values(obj).reduce((a, b) => a + b.quantity * b.price, 0) + 4;

  return (
    <div>
      <div className="cart">
        <h1>MY CART</h1>
        <div className="cart-content">
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
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  </NavLink>
                  <h2>${(item.quantity * item.price).toFixed(2)}</h2>
                  <input
                    type="number"
                    name="product-quantity"
                    min="1"
                    max="20"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        addToCart(
                          item.product,
                          Number(e.target.value),
                          item.size
                        )
                      )
                    }
                    required
                  />
                  <button
                    className="cart-item-remove"
                    onClick={() => removeItemFromCart(item.product, item.size)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="cart-summary">
            <h2>SUMMARY</h2>
            <div className="cart-summary-details">
              <span>ITEMS</span>
              <span>
                {cartItems.length == 0 ? 0 : totalQuantity(cartItems)}
              </span>
            </div>
            <div className="cart-summary-details">
              <span>SHIPPING</span>
              <span>$4.00</span>{" "}
              {/* implement actual shipping cost calculation */}
            </div>
            <div className="cart-summary-details">
              <span>TOTAL</span>
              <span>
                $
                {cartItems.length == 0
                  ? "0.00"
                  : totalPrice(cartItems).toFixed(2)}
              </span>
            </div>
            {cartItems.length == 0 ? (
              <NavLink to="/shop">
                <h3>SHOP NOW</h3>
              </NavLink>
            ) : (
              <NavLink to="/checkout/shipping-info">
                <h3>PROCEED TO SHIPPING INFORMATION</h3>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
