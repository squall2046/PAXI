import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function PickBtn(props) {
  return (
    <span className="btn btn-success pick-btn" {...props} role="button" tabIndex="0">
     <span> Pick it </span>
    </span>
  );
}

export default PickBtn;
