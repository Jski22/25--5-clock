import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>Break Length</Col>
          <Col>Session Length</Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
          <Card bg={'secondary'} style={{ width: 'calc(30rem + 1vmin)', height: 'calc(16rem + 2vmin)'}}>This will be time display</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
