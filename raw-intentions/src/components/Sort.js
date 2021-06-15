import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Sort(props) {
  const [isOpen, setOpen] = useState(false);
  const [allTags, setAllTags] = useState(new Set());

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

  return (
    <div className={isOpen ? "filter-active" : "filter"}>
      <div className="filter-title">
        <h2>Sort</h2>
        <button onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faCaretLeft} className="fa-3x" />
        </button>
      </div>
      <form className="filter-form">
        {console.log(allTags)}
        {[...allTags].map((tag) => (
          <React.Fragment>
            <input type="checkbox" id={tag} key={tag} value={tag} />
            <label htmlFor={tag}>{tag}</label>
          </React.Fragment>
        ))}
      </form>
    </div>
  );
}
