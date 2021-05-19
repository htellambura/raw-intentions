import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (productID, quantity) => async(dispatch, getState) => {
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
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productID) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productID,
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}