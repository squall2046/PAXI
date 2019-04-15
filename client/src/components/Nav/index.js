import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <a className="navbar-brand text-dark" href="/profile">Paxi</a>
      <span>Welcome {props.value}</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active text-muted" href="/customer">Send A Package</a>
          <a className="nav-item nav-link text-muted" href="/carrier">Become Carrier</a>
          <form action="/logout" method="POST">
            <button type="submit">Logout</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
