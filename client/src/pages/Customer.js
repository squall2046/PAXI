import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import { Form, Input, FormBtn } from "../components/Form";
import "./style.css";
// import { relative } from "path";
class Customer extends Component {
  state = {
    title: "",
    from: "",
    to: "",
    size: "",
    weight: "",
    image: "",
    Description: "",
    receiver: "",
    fee: "",
  };

  componentDidMount() {
    // this.loadPacks();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  createPackBtn = () => {
    // console.log(this.state)
    API.createPackBtn(this.state)
      .then(res => alert(`Your ${res.data.title} has posted!`))
      .then(res => window.location.replace("/"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Results>
                <div className="h3">Start to Send your Package</div>
                <Form>
                  <h5>Package Information</h5>
                  <span>What's your pack? (required)</span>
                  <Input
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    placeholder="Javascript Books"
                  />

                  <span>pack Size (required)</span>
                  <Input
                    name="size"
                    value={this.state.size}
                    onChange={this.handleInputChange}
                    placeholder="45x70"
                  />

                  <span>pack weight (required)</span>
                  <Input
                    name="weight"
                    value={this.state.weight}
                    onChange={this.handleInputChange}
                    placeholder="5lbs"
                  />

                  <span>From (required)</span>
                  <Input
                    name="from"
                    value={this.state.from}
                    onChange={this.handleInputChange}
                    placeholder="100 W.Broad St, Glen Allen, VA 23233"
                  />

                  <span>To (required)</span>
                  <Input
                    name="to"
                    value={this.state.to}
                    onChange={this.handleInputChange}
                    placeholder="212 District Ave 400, Fairfax, VA 22033"
                  />

                  <span>Receiver (required)</span>
                  <Input
                    name="receiver"
                    value={this.state.receiver}
                    onChange={this.handleInputChange}
                    placeholder="George W"
                  />

                  <div>Shipping Fee (required)</div>
                  <Input
                    name="fee"
                    value={this.state.fee}
                    onChange={this.handleInputChange}
                    placeholder="$ 10.00"
                  />

                  <div>Image Link (optional)</div>
                  <Input
                    name="image"
                    value={this.state.image}
                    onChange={this.handleInputChange}
                    placeholder="https://theverticalview.files.wordpress.com/2012/11/brown-paper-package.png"
                  />

                  <FormBtn
                    disabled={!(this.state.title && this.state.size && this.state.weight && this.state.from && this.state.to && this.state.receiver && this.state.fee)}
                    onClick={this.createPackBtn}
                  />
                </Form>
              </Results>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Customer;
