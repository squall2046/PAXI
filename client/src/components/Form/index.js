import React from "react";
import "./style.css";

export function Form(props) {
  return (
    <div id="form">
      {props.children}
    </div>
  );
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control mx-auto input" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }}  type="submit" className="btn btn-success">
      <i className="fas fa-book-open"> Submit</i>
    </button>
  );
}
