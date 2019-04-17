import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";


class Nav extends Component {
  state = {
    redirectTo: null
  };

  //   componentDidMount() {
  //     this.logout();
  //   };

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand text-dark" href="/profile">Paxi</a>
        <span>Welcome {}</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active text-muted" href="/customer">Send A Package</a>
            <a className="nav-item nav-link text-muted" href="/carrier">Become Carrier</a>
            {/* <a className="nav-item nav-link text-muted" href="/logout">Logout</a> */}
            {/* <form action="/logout" method="POST"> */}
            <button className="btn btn-primary" onClick={this.userLogout} >Logout</button>
            {/* </form> */}
          </div>
        </div>
      </nav>
    );
  };
}

export default Nav;
