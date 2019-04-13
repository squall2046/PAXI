import React, { Component } from "react";
import API from "../utils/API";
// import Results from "../components/Results";
// import SaveBtn from "../components/SaveBtn";
// import UnsaveBtn from "../components/UnsaveBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";
// import { Link } from "react-router-dom";
// import { relative } from "path";
// import Description from "../components/Description";
class Carrier extends Component {
  state = {
    books: [],
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadPacks = () => {
  //   API.findPacks()
  //     .then(res => {
  //       // this.setState({ pack: res.data }),
  //       console.log(res.data)
  //     })
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  saveBtnSubmit = bookId => {
    API.saveTheBook(bookId)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="h3">All Shipping Requests</div>
            <List>
              {/* {this.state.pack
                .map(pack => (
                  <ListItem key={pack._id} children={pack}>
                    <h3>{pack.title}</h3>
                    <div>From: {pack.from} - To: {pack.to}</div>
                    <div>Receiver: {pack.receiver}</div>

                    <div>Package size: {pack.size}</div>
                    <div>Package weight: {pack.weight}</div>
                    <div>Shipping fee: $ {pack.fee}</div>
                    <SaveBtn onClick={() => this.saveBtnSubmit(pack._id)} />
                    {pack.image ? <img className="col-md-3 mx-auto img" alt="pack" src={pack.image} /> : console.log(" pack w/o image")}
                    <div>Description: {pack.description}</div>
                  </ListItem>
                ))
              } */}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Carrier;
