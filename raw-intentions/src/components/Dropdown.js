import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Dropdown(props) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={isOpen ? "dropdown-active" : "dropdown"}>
      <div className="dropdown-title">
        {props.children[0]}
        <button onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faChevronLeft} className="fa-2x" />
        </button>
      </div>
      <div className="dropdown-items">{props.children.slice(1)}</div>
    </div>
  );
}
