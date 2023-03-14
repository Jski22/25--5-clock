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
      breakTime: 5,
      displayTime: 25 * 60
    }
  this.decrementBreak = this.decrementBreak.bind(this);
  this.incrementBreak = this.incrementBreak.bind(this);
  this.decrementSession = this.decrementSession.bind(this);
  this.incrementSession = this.incrementSession.bind(this);
  this.convertDisplayTime = this.convertDisplayTime.bind(this);
  };

  convertDisplayTime(num) {
    let minutes = Math.floor(num/60);
    let seconds = num % 60;

    seconds = seconds < 10 ? ('0' + seconds) : seconds;

    return `${minutes}:${seconds}`;
  }

  decrementBreak() {
    if (this.state.breakTime <= 1) {
      this.setState(state => ({
        breakTime: state.breakTime 
      }));
    } else {
      this.setState(state => ({
        breakTime: state.breakTime - 1
      }));
    }
  }

  incrementBreak() {
    if (this.state.breakTime >= 60) {
      this.setState(state => ({
        breakTime: state.breakTime 
      }));
    } else {
      this.setState(state => ({
        breakTime: state.breakTime + 1
      }));
    }
  }

  decrementSession() {
    if (this.state.sessionTime <= 1) {
      this.setState(state => ({
        sessionTime: state.sessionTime 
      }));
    } else {
      this.setState(state => ({
        sessionTime: state.sessionTime - 1
      }));
    }
  }

  incrementSession() {
    if (this.state.sessionTime >= 60) {
      this.setState(state => ({
        sessionTime: state.sessionTime 
      }));
    } else {
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
              <i id="break-decrement" onClick={this.decrementBreak}><FaArrowDown /></i>
              <span id="break-length">{this.state.breakTime}</span>
              <i id="break-increment" onClick={this.incrementBreak}><FaArrowUp /></i>
            </Col>
            <Col>
              <i id="session-decrement" onClick={this.decrementSession}><FaArrowDown /></i>
              <span id="session-length">{this.state.sessionTime}</span>
              <i id="session-increment" onClick={this.incrementSession}><FaArrowUp /></i>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Card bg={'secondary'} style={{ width: 'calc(25rem + 1vmin)', height: 'calc(12rem + 2vmin)'}}>
                <Row className="mx-auto">Session</Row>
                <Row className="mx-auto">{this.convertDisplayTime(this.state.displayTime)}</Row>
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
