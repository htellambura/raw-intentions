import "./Shop.css";
import { listProducts } from "../../actions/productActions";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/Filter";
import Message from "../../components/Message";
import React, { useEffect, useState } from "react";
import Sort from "../../components/Sort";

function Shop(props) {
  // get product data from backend
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div>
      {error ? (
        <Message>{error}</Message>
      ) : (
        <div className="shop">
          <div className="title">
            <h1 id="shop-title">shop</h1>
          </div>
          <nav>
            {/* <Filter
              collection={props.match.params.collection}
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
            <div className="links">
              <NavLink to="/shop/new">new</NavLink>
              <NavLink to="/shop/necklaces">necklaces</NavLink>
              <NavLink to="/shop/rings">rings</NavLink>
              <NavLink to="/shop/earrings">earrings</NavLink>
            </div>
            <Sort
              products={products}
              setFilteredProducts={setFilteredProducts}
            /> */}
          </nav>
          <div className="shop-products">
            <ul>
              {products.map((product) => (
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
