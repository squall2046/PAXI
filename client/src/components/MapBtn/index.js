import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function MapBtn(props) {
  return (
    <span className="btn btn-info map-btn" {...props} role="button" tabIndex="0">
     <span> Map </span>
    </span>
  );
}

export default MapBtn;