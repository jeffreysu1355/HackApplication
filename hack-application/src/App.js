import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Form from './components/Form';
import petr from './petr.png';
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
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
