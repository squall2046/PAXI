import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import { MapBtn, MsgBtn, PickBtn } from "../components/Btn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Form, Input, FormBtn } from "../components/Form";
import "./style.css";
// import { Link } from "react-router-dom";
// import { relative } from "path";
// import Description from "../components/Description";
class Carrier extends Component {
  state = {
    pack: [],
    carry: [],
    userId: null,
    mapBtnA: null,
    mapBtnB: null,
    msg: [1,2,3]
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
    return (
      <div>
        <Nav msg={this.state.msg} />
        <Container fluid>
          <div className="proContainer">
            <Row>
              <Col size="md-5">
                <div className="h2">Waiting List<hr /></div>
                <div className="packList">
                  {this.state.pack.length ? (
                    <List>
                      {this.state.pack
                        .map(pack => (
                          <ListItem key={pack._id} children={pack}>
                            <h4>{pack.title}</h4>
                            <div>From: {pack.from} - To: {pack.to}</div>
                            <div>Sender: ???</div>
                            <div>Receiver: {pack.receiver}</div>

                            <div>Package size: {pack.size}</div>
                            <div>Package weight: {pack.weight}</div>
                            <div>Shipping fee: $ {pack.fee}</div>
                            <div>Description: {pack.description}</div>
                            <MapBtn onClick={() => this.mapBtnSubmit(pack._id)} />
                            <MsgBtn onClick={() => this.msgBtnSubmit(pack._id)} />
                            <PickBtn onClick={() => this.pickBtnSubmit(pack._id)} />
                            {pack.image ? <img className="col-12 mx-auto img" alt="pack-img" src={pack.image} /> : console.log("no image")}
                            {/* {pack.image ? <img className="col-md-3 mx-auto img" alt="pack" src={require(pack.image)} /> : <img className="col-md-3 mx-auto img" alt="pack" src={require("")} />} */}
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

                    <FormBtn
                      onClick={this.searchMap}
                    />
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
