import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { HiPlayPause } from "react-icons/hi2";
import { MdOutlineRestartAlt } from "react-icons/md";
import buzzer from './assets/buzzer2.mp3';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props); 
    
    this.state = { 
      sessionTime: 25,
      breakTime: 5,
      displayTime: 25 * 60,
      displayTitle: "Session",
      timerInterval: undefined,
      playing: false
    }
  this.decrementBreak = this.decrementBreak.bind(this);
  this.incrementBreak = this.incrementBreak.bind(this);
  this.decrementSession = this.decrementSession.bind(this);
  this.incrementSession = this.incrementSession.bind(this);
  this.convertDisplayTime = this.convertDisplayTime.bind(this);
  this.handlePlayPause = this.handlePlayPause.bind(this);
  this.handleReset = this.handleReset.bind(this);
  };

  handlePlayPause() {
    const { playing } = this.state;

    if (playing === true) {
      clearInterval(this.timerInterval);

      this.setState({
        playing: false
      });
    } else {
      this.setState({
        playing: true 
      });

      this.timerInterval = setInterval(() => {
        const { displayTime, displayTitle, breakTime, sessionTime } = this.state;
        let audio = document.getElementById("beep");

        if (displayTime === 0) {
          this.setState({
            displayTitle: (displayTitle === "Session") ? "Break" : "Session",
            displayTime: (displayTitle === "Session") ? (breakTime * 60) : (sessionTime * 60)
          });

          audio.play();
        } else {
          this.setState({
            displayTime: displayTime - 1
          });
        }
      }, 1000);
    }
  }

  handleReset() {
    let audio = document.getElementById("beep");

    this.setState({
      sessionTime: 25,
      breakTime: 5,
      displayTime: 25 * 60,
      displayTitle: "Session",
      timerInterval: undefined,
      playing: false
    });

    clearInterval(this.timerInterval);

    audio.pause();
    audio.currentTime = 0;
  }

  convertDisplayTime(num) {
    let minutes = Math.floor(num/60);
    let seconds = num % 60;

    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;

    return `${minutes}:${seconds}`;
  }

  decrementBreak() {
    const { breakTime } = this.state;

    if (breakTime <= 1) {
      this.setState({
        breakTime: breakTime 
      });
    } else {
      this.setState({
        breakTime: breakTime - 1
      });
    }
  }

  incrementBreak() {
    const { breakTime } = this.state;

    if (breakTime >= 60) {
      this.setState({
        breakTime: breakTime 
      });
    } else {
      this.setState({
        breakTime: breakTime + 1
      });
    }
  }

  decrementSession() {
    const { playing, displayTitle, displayTime, sessionTime } = this.state;

    if (playing === true || displayTitle === "Break") {
      console.log("cannot complete action");
    }  else if (sessionTime <= 1) {
      this.setState({
        sessionTime: sessionTime 
      });
    } else {
      this.setState({
        sessionTime: sessionTime - 1,
        displayTime: displayTime - (1 * 60)
      });
    }
  }

  incrementSession() {
    const { playing, displayTime, displayTitle, sessionTime } = this.state;

    if (playing === true || displayTitle === "Break") {
      console.log("cannot complete action");
    } else if (sessionTime >= 60) {
      this.setState({
        sessionTime: sessionTime 
      });
    } else {
      this.setState({
        sessionTime: sessionTime + 1,
        displayTime: displayTime + (1 * 60)
      });
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
            <Col id="break-label">Break Length</Col>
            <Col id="session-label">Session Length</Col>
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
                <Row className="mx-auto">
                  <h2 id="timer-label">{this.state.displayTitle}</h2>
                </Row>
                <Row className="mx-auto">
                  <h2 id="time-left">{this.convertDisplayTime(this.state.displayTime)}</h2>
                </Row>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end">
              <i id="start_stop" onClick={this.handlePlayPause}><HiPlayPause /></i>
              <audio id="beep" src={buzzer} className="clip"></audio>
            </Col>
            <Col className="d-flex justify-content-start">
              <i id="reset" onClick={this.handleReset}><MdOutlineRestartAlt /></i>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
