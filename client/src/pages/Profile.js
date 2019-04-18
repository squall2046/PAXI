import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";
// import { Link } from "react-router-dom";


// let id = window.location.pathname.split("profile/").slice(1);
// console.log(id)

class Profile extends Component {
  state = {
    pack: [],
    carrier: [],
    user: null
  };

  componentDidMount() {
    const userInfo = sessionStorage.getItem("user");
    const userObj = JSON.parse(userInfo);
    if (userInfo) {
      this.setState({ user: userObj },
        () => {
          console.log("profile userObj: ", this.state.user);
          this.findUserPacks();
        }
      )
    };
  };

  findUserPacks() {
    const userId = this.state.user._id;
    API.findUserPacks(userId)
      .then(res => {
        this.setState({ pack: res.data.pack },
          // this.setState({ pack: res.data.pack, carrier: res.data.carrier },
          () => console.log("profile user packs and carried: ", this.state.pack, this.state.carrier)
        )
      })
      .catch(err => console.log(err));
  };

  // findUserPicked() {
  //   const userId = this.state.user._id;
  //   API.findUserPacks(userId)
  //     .then(res => {
  //       this.setState({ pack: res.data.pack },
  //         () => console.log("profile user packs: ", this.state.pack)
  //       )
  //     })
  //     .catch(err => console.log(err));
  // };

  // findUser() {
  //   API.findUser(id)
  //     .then(res => {
  //       // alert(`welcome ${res.data[0].name}!`);
  //       this.setState({ user: res.data[0] });
  //       console.log("state user:", this.state.user);
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-5">
              <div className="h3">Shipped packages</div>
              {this.state.pack.length ? (
                <List>
                  {this.state.pack
                    .map(pack => (
                      <ListItem key={pack._id}>
                        <div className="status">Picked: {pack.isPicked ? <span>yes</span> : <span>no</span>}</div>
                        <div className="status2">Delivered: {pack.isDelivered ? <span>yes</span> : <span>no</span>}</div>
                        <div className="status3">carrier: ???</div>

                        <h3>{pack.title}</h3>
                        <div>From: {pack.from} - To: {pack.to}</div>
                        <div>Receiver: {pack.receiver}</div>
                        <div>Package size: {pack.size}</div>
                        <div>Package weight: {pack.weight}</div>
                        <div>Shipping fee: $ {pack.fee}</div>
                        <div>Description: {pack.description}</div>
                        <div>Issue (UTC): {pack.date}</div>
                        {pack.image ? <img className="col-md-3 mx-auto img" alt="pack" src={pack.image} /> : <img className="col-md-3 mx-auto img" alt="pack" src="" />}
                      </ListItem>
                    ))
                  }
                </List>
              ) : (
                  <h3> &nbsp; No shipping packages </h3>
                )}
            </Col>
            <Col size="md-5">
              <div className="h3">Carried packages</div>
              {this.state.carrier.length ? (
                <List>
                  {/* {this.state.carrier
                    // {this.state.user.pack
                    .map(pack => (
                      <ListItem >
                        <div className="status">Picked: {pack.isPicked ? <span>yes</span> : <span>no</span>}</div>
                        <div className="status2">Delivered: {pack.isDelivered ? <span>yes</span> : <span>no</span>}</div>
                        <div className="status3">carrier: ???</div>

                        <h3>{pack.title}</h3>
                        <div>From: {pack.from} - To: {pack.to}</div>
                        <div>Receiver: {pack.receiver}</div>
                        <div>Package size: {pack.size}</div>
                        <div>Package weight: {pack.weight}</div>
                        <div>Shipping fee: $ {pack.fee}</div>
                        <div>Description: {pack.description}</div>
                        <div>Issue (UTC): {pack.date}</div>
                        {pack.image ? <img className="col-md-3 mx-auto img" alt="pack" src={pack.image} /> : <img className="col-md-3 mx-auto img" alt="pack" src="" />}
                      </ListItem>
                    ))
                  } */}
                </List>
              ) : (
                  <h3> &nbsp; No carried packages </h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
