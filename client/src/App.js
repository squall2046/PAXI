import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Carrier from "./pages/Carrier";
import Customer from "./pages/Customer";
import Status from "./pages/Status";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/carrier" component={Carrier} />
            <Route exact path="/customer" component={Customer} />
            <Route exact path="/status" component={Status} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
