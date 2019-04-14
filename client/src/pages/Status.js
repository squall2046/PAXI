import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
// import SaveBtn from "../components/SaveBtn";
// import UnsaveBtn from "../components/UnsaveBtn";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import "./style.css";
// import { Link } from "react-router-dom";
// import { relative } from "path";
// import Description from "../components/Description";
class Status extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  UnsaveBtnSubmit = bookId => {
    API.unsaveTheBook(bookId)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Results>
            </Results>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Status;
