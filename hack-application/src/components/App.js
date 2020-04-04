import React from 'react';
import '../css/App.css';
import Form from '../components/Form';
import petr from '../assets/petr.png';
import { Container, Row, Col} from 'react-bootstrap';

function App() {

  return (
    <div className="App" >
      <Container fluid>
        <Row xs = {1} md ={2} >
          <Col>
            <Form/>
          </Col>
          <Col className="Col-Style">
            <img className="petr"  src={petr} alt="petr"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
