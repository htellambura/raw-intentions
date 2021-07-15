import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SORT_OPTIONS } from "../constants/constants";
import React, { useState } from "react";

export default function Sort(props) {
  const [isOpen, setOpen] = useState(false);
  const [sortOption, setSortOption] = useState("highest");

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const sortProducts = (e) => {
    e.preventDefault();
    var filteredProducts = props.products;
    alert(sortOption);
    console.log(filteredProducts);
    switch (sortOption) {
      case "highest":
        filteredProducts.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case "lowest":
        filteredProducts.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      default:
        filteredProducts.sort((a, b) => {
          return a._id > b._id;
        });
    }
    console.log(filteredProducts);
    props.setFilteredProducts(filteredProducts);
  };

  return (
    <div className={isOpen ? "filter-active" : "filter"}>
      <div className="filter-title">
        <h2>Sort</h2>
        <button onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faCaretLeft} className="fa-3x" />
        </button>
      </div>
      <form className="filter-form" onSubmit={sortProducts}>
        {Object.keys(SORT_OPTIONS).map((tag) => (
          <div className="sort-option">
            <input
              type="radio"
              id={tag}
              key={tag}
              value={tag}
              checked={sortOption === tag}
              onChange={(e) => {
                setSortOption(e.target.value);
              }}
            />
            <label htmlFor={tag}>{SORT_OPTIONS[tag]}</label>
          </div>
        ))}
        <button type="submit">
          <h3>Sort</h3>
        </button>
      </form>
    </div>
  );
}
