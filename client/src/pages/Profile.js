import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import { MapBtn } from "../components/Btn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";

class Profile extends Component {
  state = {
    pack: [],
    carrier: [],
    user: null,
    msg: [1,2,3]
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
        // this.setState({ pack: res.data.pack },
        this.setState({ pack: res.data.pack, carrier: res.data.carrier },
          () => console.log("profile user: \n packs: ", this.state.pack, "\n carried: ", this.state.carrier)
        )
      })
      .catch(err => console.log(err));
  };

  updateDelivered = packId => {
    if (prompt("Did you complete the delivery?") === "yes") {
      API.updateDelivered(packId)
        .then(res => { console.log(res.data); this.componentDidMount() });
    }
  }

  render() {
    return (
      <div>
        <Nav msg={this.state.msg}/>
        <Container fluid>
          <div className="proContainer">
            <Row>
              <Col size="md-6">
                <div className="h3">Shipped packages</div>
                {this.state.pack.length ? (
                  <List>
                    {this.state.pack
                      .map(pack => (
                        <ListItem key={pack._id}>
                          <div className="status">Picked: {pack.isPicked ? <span>yes</span> : <span>no</span>}</div>
                          <div className="status2">Delivered: {pack.isDelivered ? <span>yes</span> : <span>no</span>}</div>
                          <div className="status3">carrier: ???</div>

                          <h4>{pack.title}</h4>
                          <div>From: {pack.from} - To: {pack.to}</div>
                          <div>Receiver: {pack.receiver}</div>
                          <div>Package size: {pack.size}</div>
                          <div>Package weight: {pack.weight}</div>
                          <div>Shipping fee: $ {pack.fee}</div>
                          <div>Description: {pack.description}</div>
                          <div>Issue (UTC): {pack.date}</div>
                          {pack.image ? <img className="col-12 mx-auto img" alt="pack" src={pack.image} /> : console.log("no image")}
                        </ListItem>
                      ))
                    }
                  </List>
                ) : (
                    <h3> &nbsp; No shipping packages </h3>
                  )}
              </Col>
              <Col size="md-6">
                <div className="h3">Carried packages</div>
                {this.state.carrier.length ? (
                  <List>
                    {this.state.carrier
                      .map(pack => (
                        <ListItem key={pack._id}>
                          {/* <div className="status">Picked: {pack.isPicked ? <span>yes</span> : <span>no</span>}</div> */}
                          {/* <div className="status">Delivered: {pack.isDelivered ? <span>yes</span> : <span>no</span>}</div> */}
                          {/* <div className="status3">carrier: me</div> */}
                          <MapBtn onClick={() => this.mapBtnSubmit(pack._id)} />
                          <button onClick={() => this.updateDelivered(pack._id)} className={pack.isDelivered ? "btn btn-secondary text-light fadeBtn" : "btn btn-success text-light fadeBtn"} disabled={pack.isDelivered}>
                            {pack.isDelivered ? <span> Delivered </span> : <span>Confirm Delivery</span>}
                          </button>


                          <h4>{pack.title}</h4>
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
                    <h3> &nbsp; No carried packages </h3>
                  )}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }

  // let id = window.location.pathname.split("profile/").slice(1);
  // console.log(id)
  // findUser() {
  //   API.findUser(id)
  //     .then(res => {
  //       // alert(`welcome ${res.data[0].name}!`);
  //       this.setState({ user: res.data[0] });
  //       console.log("state user:", this.state.user);
  //     })
  //     .catch(err => console.log(err));
  // }

}

export default Profile;
