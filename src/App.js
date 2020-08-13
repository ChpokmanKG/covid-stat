import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import CountryDropdown from "./components/Dropdown";
import Statistic from "./components/Statistic";
import RecoverStatistic from "./components/Top";

function App() {
  return (
    <Container>
      <Row className="mb-4 mt-4">
        <Col md={3}>
          <CountryDropdown />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Statistic />
        </Col>
        <Col md={4}>
          <RecoverStatistic />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
