import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { HiPlayPause } from "react-icons/hi2";
import { MdOutlineRestartAlt } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      sessionTime: 25,
      breakTime: 5
    }
  this.decrementBreak = this.decrementBreak.bind(this);
  this.incrementBreak = this.incrementBreak.bind(this);
  };

  decrementBreak(str) {
    let checkId = str;

    if (checkId === "break-decrement") {
      this.setState(state => ({
        breakTime: state.breakTime - 1
      }));
    } else if (checkId === "session-decrement") {
      this.setState(state => ({
        sessionTime: state.sessionTime - 1
      }));
    }
  }

  incrementBreak(str) {
    let checkId = str;

    if (checkId === "break-increment") {
      this.setState(state => ({
        breakTime: state.breakTime + 1
      }));
    } else if (checkId === "session-increment") {
      this.setState(state => ({
        sessionTime: state.sessionTime + 1
      }));
    }
  }

  render () {
    return (
      <div className="App">
        <Container>
          <Row className="mx-auto">
            <h1>25 + 5 Clock</h1>
          </Row>
          <Row>
            <Col>Break Length</Col>
            <Col>Session Length</Col>
          </Row>
          <Row>
            <Col>
              <i id="break-decrement" onClick={ () => this.decrementBreak("break-decrement")}><FaArrowDown /></i>
              {this.state.breakTime}
              <i id="break-increment" onClick={ () => this.incrementBreak("break-increment")}><FaArrowUp /></i>
            </Col>
            <Col>
              <i id="session-decrement" onClick={ () => this.decrementBreak("session-decrement")}><FaArrowDown /></i>
              {this.state.sessionTime}
              <i id="session-increment" onClick={ () => this.incrementBreak("session-increment")}><FaArrowUp /></i>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Card bg={'secondary'} style={{ width: 'calc(25rem + 1vmin)', height: 'calc(12rem + 2vmin)'}}>
                <Row className="mx-auto">Session</Row>
                <Row className="mx-auto">Time Display</Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end">
              <i id="start_stop"><HiPlayPause /></i>
            </Col>
            <Col className="d-flex justify-content-start">
              <i id="reset"><MdOutlineRestartAlt /></i>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
