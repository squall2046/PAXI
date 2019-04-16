import React, { Component } from "react";
import API from "../utils/API";
import { FormBtn } from "../components/Form";
import "./style.css";

class Login extends Component {

  state = {
    email: "",
    password: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  findUserBtn = () => {
    // const {email, password} = this.state;
    // const userObj = {email, password};
    // API.findUserBtn(userObj)
    console.log("login:",this.state)
    API.findUserBtn(this.state)
      .then(res => {
        this.setState({ user: res.data });
        console.log(this.state)
      })
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><i className="fas fa-sign-in-alt"></i>Login</h1>
            {/* <% include ./partials/messages %> */}
            <form action="/login" method="POST">
            {/* <form> */}
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
              <FormBtn type="submit" className="btn btn-primary btn-block" onClick={this.findUserBtn} />
            </form>
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
