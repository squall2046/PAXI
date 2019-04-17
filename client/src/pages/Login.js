import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import "./style.css";

class Login extends Component {

  state = {
    email: "",
    password: "",
    showPassword: false,
    redirectTo: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value.trim() });
  };

  userLogin = () => {
    const { email, password } = this.state;
    const userObj = { email, password };
    API.userLogin(userObj)
      .then(res => {
        if (res.data.userData) {
          console.log("login response: %O", res.data.userData);
          sessionStorage.setItem("user", JSON.stringify(res.data.userData));
          this.setState({ redirectTo: "/profile" })
        }
      })
      .catch(err => console.log(err))
  };

  // findUserBtn = () => {
  //   // const {email, password} = this.state;
  //   // const userObj = {email, password};
  //   // API.findUserBtn(userObj)
  //   console.log("login:",this.state)
  //   API.findUserBtn(this.state)
  //     .then(res => {
  //       this.setState({ user: res.data });
  //       console.log(this.state)
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    }
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>Login</h1>
            {/* <form action="/login" method="POST"> */}
            <div className="form-group">
              <span>Email</span>
              <input
                type="email"
                name="email"
                className="form-control"
                value={this.state.email}
                onChange={this.handleInputChange}
                placeholder="Enter Email"
              />

              <span>Password</span>
              <input
                type="password"
                name="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="Enter Password"
              />
            </div>
            <button className="btn btn-success btn-block" onClick={this.userLogin}>
              <i className="fas fa-book-open"> Submit</i>
            </button>
            {/* </form> */}
            <p className="lead mt-4">
              No Account? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>

    )
  }
}

export default Login;
