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

  render(props) {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/profile" className="nav-link">PAXI &nbsp;&nbsp;</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/profile" className="nav-item nav-link active text-muted navLink"><i className="fas fa-home"></i>Home &nbsp;&nbsp;</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/customer" className="nav-item nav-link active text-muted navLink"><i className="fas fa-box-open"></i> Send Packs &nbsp; </Link>
            </li>
            <li className="nav-item">
              <Link to="/carrier" className="nav-item nav-link text-muted navLink"><i className="fas fa-car-side"></i> Become Carrier</Link>
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
            <li className="nav-item my-auto">
              <i className="text-light">{this.state.user ? this.state.user.name : "Guest"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</i>
            </li>
            <li className="nav-item">
              {this.props.msg ? <span className="pulse"> {this.props.msg ? this.props.msg.length : 0}</span> : <span className="hide"></span>}
            </li>
            <li className="nav-item">
              <h3><i className="text-light nav-user far fa-envelope"></i></h3>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary btn-sm mr-auto" onClick={this.userLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
}

export default Nav;
