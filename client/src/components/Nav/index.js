import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";

class Nav extends Component {
  state = {
    user: null,
    redirectTo: null
  };

  componentDidMount() {
    const userInfo = sessionStorage.getItem("user");
    const userObj = JSON.parse(userInfo);
    if (userInfo) {
      this.setState({ user: userObj },
        () => console.log("Nav welcome user: ", this.state.user.name)
      )
    };
  };

  userLogout = () => {
    API.userLogout()
      .then(res => {
        console.log("(Nav)logout response: %O", res.data);
        sessionStorage.removeItem("user")
        this.setState({ redirectTo: "/login" })
      })
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/profile" className="nav-link">PAXI</Link>
            </li>
            <li className="nav-item">
              <Link to="/customer" className="nav-item nav-link active text-muted">Send A Package</Link>
            </li>
            <li className="nav-item">
              <Link to="/carrier" className="nav-item nav-link text-muted">Become Carrier</Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto order-0">
          <span className="mr-auto text-light">Welcome </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <i className="text-light nav-user align-text-bottom">{this.state.user ? this.state.user.name : ""}</i>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary mr-auto" onClick={this.userLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}

export default Nav;
