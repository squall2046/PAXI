import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./style.css";


class NoMatch extends Component {

  // location.reload();

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div className="pg404" >
              <h1>404 Page Not Found</h1>
              <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
              </span>
              </h1>
              <br />
              <br />
              <br />
              <a className="btn btn-dark" href="/">Go back</a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NoMatch;
