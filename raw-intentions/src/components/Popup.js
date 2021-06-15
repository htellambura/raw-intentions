import React from "react";

export default function Popup(props) {
  return (
    <div>
      {props.trigger && (
        <div className="popup">
          <div className="popup-content">
            <button
              id="popup-close"
              onClick={() => {
                props.showSizeChart(false);
              }}
            >
              close
            </button>
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
}
