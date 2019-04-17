import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Carrier from "./pages/Carrier";
import Customer from "./pages/Customer";
import Status from "./pages/Status";
import NoMatch from "./pages/NoMatch";

class App extends Component {

  state = {
    user: null
  }
  componentDidMount() {
    console.log("session check: ", sessionStorage.getItem("user"))
    const userInfo = sessionStorage.getItem("user");
    if (userInfo) {
      this.setState({ user: userInfo })
    }
  }

  render() {
    return (
      <Router>
        {this.state.user ? this.loggedInRoutes() : this.loggedOutRoutes()}
      </Router>
    )
  }

  loggedInRoutes = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Login} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/profile/:id" component={Profile} /> */}
          <Route path="/customer" component={Customer} />
          <Route path="/carrier" component={Carrier} />
          <Route path="/status" component={Status} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }

  loggedOutRoutes = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App;
