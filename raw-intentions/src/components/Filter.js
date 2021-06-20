import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Filter(props) {
  const [isOpen, setOpen] = useState(false);
  const [allTags, setAllTags] = useState(
    props.collection ? new Set([props.collection]) : new Set()
  );
  console.log(allTags);
  const [currentTags, setCurrentTags] = useState([]);

  const handleClick = () => {
    setOpen(!isOpen);
    getAllTags(props.products);
  };

  const getAllTags = (products) => {
    products.forEach((product) => {
      var tags = product.tags.split(",");
      tags.forEach((tag) => setAllTags(allTags.add(tag)));
    });
  };

  const filterProducts = (e) => {
    e.preventDefault();
    var filteredProducts = props.products.filter((product) => {
      var tags = product.tags.split(",");
      console.log(currentTags);
      return currentTags.some((tag) => tags.includes(tag));
    });
    //console.log(filteredProducts);
    props.setFilteredProducts(filteredProducts);
  };

  const changeCurrentTags = (tag) => {
    var currentTagIndex = currentTags.indexOf(tag);
    if (currentTagIndex != -1) {
      currentTags.splice(currentTagIndex, 1);
    } else {
      setCurrentTags([...currentTags, tag]);
    }
  };

  return (
    <div className={isOpen ? "filter-active" : "filter"}>
      <div className="filter-title">
        <h2>Filter</h2>
        <button onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faCaretLeft} className="fa-3x" />
        </button>
      </div>
      <form className="filter-form" onSubmit={filterProducts} id="filter-form">
        {[...allTags].map((tag) => (
          <div className="filter-option">
            <input
              type="checkbox"
              id={tag}
              key={tag}
              value={tag}
              onChange={(e) => changeCurrentTags(e.target.value)}
            />
            <label htmlFor={tag}>{tag}</label>
          </div>
        ))}
        <button type="submit">
          <h3>Filter</h3>
        </button>
      </form>
    </div>
  );
}
