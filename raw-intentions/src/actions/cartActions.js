import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

export const addToCart =
  (productID, quantity, size) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${productID}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        category: data.category,
        description: data.description,
        image: data.image,
        name: data.name,
        price: data.price,
        product: data._id,
        quantity: quantity,
        tags: data.tags,
        type: data.type,
        size: size,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const removeFromCart = (productID) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: productID,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_INFO,
    payload: data,
  });
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
