import React from "react";
import { Modal } from 'react-bootstrap';
import { Form, Input, FormBtn, Textarea } from "../components/Form";
import API from "../utils/API";
import "./style.css";

class PopUp extends React.Component {
  // this.handleShow = this.handleShow.bind(this);
  // this.handleClose = this.handleClose.bind(this);

  state = {
    show: false,
    title: null,
    content: null,
    packid: null,
    // msgSender: this.props.senderid,
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  createMsgBtn = () => {
    // const { title, content, packid, msgSender } = this.state;
    // const msgInfo = { title, content, packid, msgSender };
    const { title, content, packid } = this.state;
    const msgInfo = { title, content, packid };
    // console.log("==== msgInfo ====: ", msgInfo)
    API.createMsgBtn(msgInfo)
      .then(res => console.log("response to popup message: ", res.data))
      // .then(res => alert(`Your message has sent!`))
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.props)
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <span>
              {this.props.packtitle}
              <div className="subtitle"> Pack ID ({this.props.packid})</div>
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Input
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
            />
            <Textarea
              name="content"
              value={this.state.message}
              onChange={this.handleInputChange}
              placeholder="Content"
            />
          </Form>

        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={this.props.onHide}>Close</Button> */}
          <FormBtn
            onClick={() => {
              this.setState({ packid: this.props.packid },
                () => { this.createMsgBtn() });
            }}
            btncolor="btn btn-success"
          >
            <i className="fas fa-envelope-open"> Send</i>
          </FormBtn>
          <FormBtn
            onClick={this.props.onHide}
            btncolor="btn btn-secondary"
          >
            <i className="fas fa-trash"> Cancel</i>
          </FormBtn>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PopUp;
