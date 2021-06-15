import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Message from "../../components/Message";

import "./Shop.css";
import { listProducts } from "../../actions/productActions";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";

function Shop() {
  // get product data from backend
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, products } = productList;

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <Message>{error}</Message>
      ) : (
        <div className="shop">
          <div className="title">
            <h1 id="shop-title">shop</h1>
          </div>
          <nav className="links">
            <Filter
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
            <NavLink to="/">new</NavLink>
            {/* implement filtered links here*/}
            <NavLink to="/">necklaces</NavLink>
            <NavLink to="/">rings</NavLink>
            <NavLink to="/">earrings</NavLink>
            <Sort sort="true" />
          </nav>
          <div className="shop-products">
            <ul>
              {filteredProducts.map((product) => (
                <li>
                  <div className="shop-product">
                    <NavLink to={"/product/" + product._id}>
                      <img
                        className="shop-product-image"
                        src={product.image}
                        alt={product.name}
                      />
                    </NavLink>
                    <h2 className="shop-product-name">{product.name}</h2>
                    <h3 className="shop-product-price">{product.price}$</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
