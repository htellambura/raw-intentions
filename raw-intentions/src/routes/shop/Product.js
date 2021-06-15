import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Message from "../../components/Message";
import Popup from "../../components/Popup";

import "./Product.css";
import { detailProduct } from "../../actions/productActions";

import SIZE_CHART_IMAGE from "../../assets/size-chart.png";

function Product(props) {
  // get product data from backend
  const dispatch = useDispatch();
  const productID = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { error, product } = productDetails;

  useEffect(() => {
    dispatch(detailProduct(productID));
  }, [dispatch, productID]);

  // get order information from user
  const [quantity, setQuantity] = useState(1);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productID}?qty=${quantity}`);
  };

  // toggle popup widget for size chart
  const [sizeChart, showSizeChart] = useState(false);

  return (
    <div>
      {error ? (
        <Message>{error}</Message>
      ) : !product ? (
        <Message>Product Not Found</Message>
      ) : (
        <div className="product">
          <div className="product-image">
            <img src={product.image} alt="Rose Ring" />
            <div className="block"></div> {/* REMOVE */}
          </div>
          <div className="product-title">
            <h1>{product.name}</h1>
            <h2>{product.type}</h2>
            <h3>${product.price}</h3>
          </div>
          <div className="product-size">
            <select className="ring-size">
              <option value="SIZE">SIZE</option>{" "}
              {/* FILL IN OPTIONS DYNAMICALLY */}
            </select>
          </div>
          <div className="product-description">
            <h1>description</h1>
            <p>{product.description}</p>
            <p className="disclaimer">* Any details to consider go here.</p>
            <button
              id="size-chart"
              onClick={() => {
                showSizeChart(true);
              }}
            >
              size chart
            </button>
            <Popup trigger={sizeChart} showSizeChart={showSizeChart}>
              <img src={SIZE_CHART_IMAGE} />
            </Popup>
          </div>
          <form className="product-add">
            <div className="product-quantity">
              <label for="product-quantity">quantity</label>
              <input
                type="number"
                name="product-quantity"
                min="1"
                max="5"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
            <input
              className="add-to-cart"
              type="submit"
              value="ADD TO CART"
              onClick={addToCartHandler}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default Product;
