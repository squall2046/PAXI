import React, { Component } from "react";
// import API from "../utils/API";
import { FormBtn } from "../components/Form";
import "./style.css";

class Register extends Component {
  state = {
    name: "",
    password: "",
    password2: "",
    email: "",
    phone: "",
    address: "",
    dl: "",
    portrait: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // createUserBtn = () => {
  //   console.log(this.state)
  //   API.createUserBtn(this.state)
  //     .then(res => {
  //       console.log(res);
  //       alert(`Thank you for register ${res.data.name}, please login...`);
  //       window.location.replace("/login")
  //     })
  //     .catch(err => console.log(err));
  // }

  // render() {
  //   return (
  //     <div className="row mt-5">
  //       <div className="col-md-6 m-auto">
  //         <div className="card card-body">
  //           <h1 className="text-center mb-3">
  //             <i className="fas fa-user-plus"></i> Register </h1>
  //           {/* <% include ./partials/messages %> */}
  //           <form>
  //             <div className="form-group">
  //               <span>User ID (email)</span>
  //               <input
  //                 type="email"
  //                 id="email"
  //                 name="email"
  //                 className="form-control"
  //                 value={this.state.email}
  //                 onChange={this.handleInputChange}
  //                 placeholder="Enter Email"
  //               />

  //               <span>Password</span>
  //               <input
  //                 type="password"
  //                 id="password"
  //                 name="password"
  //                 className="form-control"
  //                 value={this.state.password}
  //                 onChange={this.handleInputChange}
  //                 placeholder="Enter Password"
  //               />

  //               <span>Confirm Password</span>
  //               <input
  //                 type="password"
  //                 id="password2"
  //                 name="password2"
  //                 className="form-control"
  //                 value={this.state.password2}
  //                 onChange={this.handleInputChange}
  //                 placeholder="Confirm Password"
  //               />
  //               <span>Full Name</span>
  //               <input
  //                 name="name"
  //                 className="form-control"
  //                 value={this.state.name}
  //                 onChange={this.handleInputChange}
  //                 placeholder="Enter Name"
  //               />

  //               <span>Phone Number</span>
  //               <input
  //                 name="phone"
  //                 className="form-control"
  //                 value={this.state.phone}
  //                 onChange={this.handleInputChange}
  //                 placeholder="Enter Phone Number"
  //               />

  //               <span>Address</span>
  //               <input
  //                 name="address"
  //                 className="form-control"
  //                 value={this.state.address}
  //                 onChange={this.handleInputChange}
  //                 placeholder="Enter Address"
  //               />

  //               <span>Driver's License</span>
  //               <input
  //                 name="dl"
  //                 className="form-control"
  //                 value={this.state.dl}
  //                 onChange={this.handleInputChange}
  //                 placeholder="Enter DLN"
  //               />

  //               <div>Image Link (optional)</div>
  //               <input
  //                 name="portrait"
  //                 className="form-control"
  //                 value={this.state.portrait}
  //                 onChange={this.handleInputChange}
  //                 placeholder="Image Link"
  //               />
  //             </div>
  //             <FormBtn
  //               disabled={!(this.state.email && this.state.password && this.state.password2 && this.state.name && this.state.phone && this.state.address && this.state.dl)}
  //               onClick={this.createUserBtn}
  //             />
  //           </form>

  //           <p className="lead mt-4">Have An Account? <a href="/login">Login</a></p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }


  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"><i className="fas fa-user-plus"></i> Register</h1>
            <form action="/register" method="POST">
            {/* <form> */}
              <div className="form-group">
                <span>Name</span>
                <input
                  type="name"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <span>Password</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Create Password"
                />
              </div>
              <div className="form-group">
                <span>Confirm Password</span>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.handleInputChange}
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              {/* <FormBtn type="submit" onClick={this.createUserBtn} className="btn btn-primary btn-block"> Register</FormBtn> */}
              <FormBtn type="submit" className="btn btn-primary btn-block"> Register</FormBtn>
            </form>
            <p className="lead mt-4">Have An Account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>

    )
  }


}

export default Register;
