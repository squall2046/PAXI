import React, { Component } from "react";

// install react-bootstrap npm,
// for the bootstrap modal, we will import two parts:
// first is button to open popup window:
import { Button, ButtonToolbar } from 'react-bootstrap';
// second is customized component PopUp or whatever:
import PopUp from "./PopUp";
// codes in PopUp are also from react bootstrap.

import API from "../utils/API";
import Nav from "../components/Nav";
import { MapBtn, PickBtn } from "../components/Btn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Form, Input, FormBtn } from "../components/Form";
import "./style.css";
// import { Link } from "react-router-dom";
// import { relative } from "path";


class Carrier extends Component {
  state = {
    modalShow: false,
    pack: [],
    carry: [],
    userId: null,
    mapBtnA: null,
    mapBtnB: null,
    currentpackid: null,
    currentpacktitle: null,
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


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
      // .then(res => window.location.replace("/"))
      // .catch(err => console.log(err));
      // 刷新 mount 中全部内容!!!
    }
  }

  mapBtnSubmit = packId => {
    API.mapBtnSubmit(packId)
    // .then(res => this.loadBooks())
    // .catch(err => console.log(err));
  }

  searchMap() {
    // API.mapBtnSubmit(packId)
    // .then(res => this.loadBooks())
    // .catch(err => console.log(err));
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div>
        <Nav />

        <Container fluid>
          <div className="proContainer">
            <Row>
              <Col size="md-5">
                <div className="h2">Waiting List<hr /></div>
                <div className="packList">
                  {this.state.pack.length ? (
                    <List>
                      {this.state.pack
                        .map((pack, index) => (
                          <ListItem key={index} children={pack}>
                            {/* <ListItem key={pack._id} children={pack}> */}
                            <h4 data-id={pack._id}>{pack.title}</h4>
                            <div>From: {pack.from} - To: {pack.to}</div>
                            <div>Sender: ???</div>
                            <div>Receiver: {pack.receiver}</div>

                            <div>Package size: {pack.size}</div>
                            <div>Package weight: {pack.weight}</div>
                            <div>Shipping fee: $ {pack.fee}</div>
                            <div>Description: {pack.description}</div>
                            {pack.image ? <img className="col-12 mx-auto img" alt="pack-img" src={pack.image} /> : console.log("no image")}
                            <MapBtn onClick={() => this.mapBtnSubmit(pack._id)} />
                            {/* <MsgBtn onClick={() => this.msgBtnSubmit(pack._id)} /> */}
                            <PickBtn onClick={() => this.pickBtnSubmit(pack._id)} />

                            {/* ====================== send msg btn ====================== */}
                            {/* ===== react bootstrap modal (click to pop-up window) ===== */}
                            <div className="msg-btn">
                              <ButtonToolbar>
                                <Button
                                  variant="primary"
                                  onClick={() =>
                                    this.setState({
                                      modalShow: true,
                                      currentpackid: pack._id,
                                      currentpacktitle: pack.title
                                    })
                                  }
                                > Send Msg
                              </Button>
                                <PopUp
                                  show={this.state.modalShow}
                                  onHide={modalClose}
                                  packid={this.state.currentpackid}
                                  packtitle={this.state.currentpacktitle}
                                />
                              </ButtonToolbar>
                            </div>
                            {/* ===== react bootstrap modal (click to pop-up window) ===== */}
                            {/* ========================================================== */}
                          </ListItem>
                        ))
                      }
                    </List>
                  ) : (
                      <h3> &nbsp; No shipping packages </h3>
                    )}
                </div>
              </Col>
              <Col size="md-6">
                <div className="mapContainer">
                  <Form>
                    {/* <h5></h5> */}
                    <span>Search Start City</span>
                    <Input
                      name="start"
                      value={this.state.mapBtnA}
                      onChange={this.handleInputChange}
                      placeholder="Start"
                    />

                    <span>Search Destination</span>
                    <Input
                      name="end"
                      value={this.state.mapBtnB}
                      onChange={this.handleInputChange}
                      placeholder="End"
                    />

                    <FormBtn onClick={this.searchMap} btncolor="btn btn-sm btn-dark" >
                      <i className="text-light fas fa-globe-americas"> Search</i>
                    </FormBtn>
                  </Form>
                  <div className="googleMap">
                    {/* // // // // // // // //  */}
                    {/* // // // // // // // //  */}
                    {/* // // // // // // // //  */}
                    {/* // // // // // // // //  */}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Carrier;
