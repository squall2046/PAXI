import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import PickBtn from "../components/PickBtn";
import MapBtn from "../components/MapBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";
// import { Link } from "react-router-dom";
// import { relative } from "path";
// import Description from "../components/Description";
class Carrier extends Component {
  state = {
    pack: [],
    carry: [],
    userId: null
  };

  componentDidMount() {
    const userInfo = sessionStorage.getItem("user");
    const userObj = JSON.parse(userInfo);
    if (userInfo) {
      this.setState({ userId: userObj._id },
        () => {
          console.log("carrier userId: ", this.state.userId);
        }
      )
    };

    this.findUnpicked();
  };

  findUnpicked() {
    API.findUnpicked()
      .then(res => {
        this.setState({ pack: res.data });
        console.log("Carrier find unpicked: ", this.state.pack)
      })
      .catch(err => console.log(err));
  };

  pickBtnSubmit = packId => {
    if (prompt("Do you want to carry this pack? Input 'yes' or 'no'") === "yes") {
      // console.log("carrier req userId:", this.state.userId, "\n carrier req packId:", packId)
      API.updateCarrier(this.state.userId, packId)
        .then(res => { console.log(res.data); this.componentDidMount() });
      // API.updatePackStatus(packId)
      //   // .then(res => this.findUnpicked())
      //   .then(res => this.componentDidMount())
      // 刷新 mount 中全部内容!!!
    }
  }
  // .then(res => window.location.replace("/"))
  // .catch(err => console.log(err));

  mapBtnSubmit = packId => {
    API.mapBtnSubmit(packId)
    // .then(res => this.loadBooks())
    // .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-5">
              <div className="h3">Waiting List</div>
              {this.state.pack.length ? (
                <List>
                  {this.state.pack
                    .map(pack => (
                      <ListItem key={pack._id} children={pack}>
                        <h3>{pack.title}</h3>
                        <div>From: {pack.from} - To: {pack.to}</div>
                        <div>Sender: ???</div>
                        <div>Receiver: {pack.receiver}</div>

                        <div>Package size: {pack.size}</div>
                        <div>Package weight: {pack.weight}</div>
                        <div>Shipping fee: $ {pack.fee}</div>
                        <MapBtn onClick={() => this.mapBtnSubmit(pack._id)} />
                        <PickBtn onClick={() => this.pickBtnSubmit(pack._id)} />
                        {pack.image ? <img className="col-md-3 mx-auto img" alt="pack" src={pack.image} /> : <img className="col-md-3 mx-auto img" alt="pack" src="" />}
                        <div>Description: {pack.description}</div>
                      </ListItem>
                    ))
                  }
                </List>
              ) : (
                  <h3> &nbsp; No shipping packages </h3>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Carrier;
