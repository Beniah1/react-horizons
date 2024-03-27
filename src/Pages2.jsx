import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  return (
    <Container>
      
      <Row className="mb-5">
        <Col md={4}>
          <h3 className="text-danger">necessitabus iste impedit?</h3>
        </Col>
        <Col md={8}>
          <p className="bg-danger text-white p-3">
            Necessitabus iste impedit? Lorem ipsum, dolor sit amet consectetur adipiscing elit. Adipisci opto veniam, laborum amet sunt eos, quibudam veniam praeparatus corpore saepe quis inceptos! Asus quas qua odio repudiandae placeat. Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesentium adipisci possimus fubita solitem. Aut provident exceptum consectetur, aperiores molestas.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={4}>
          <h3 className="text-danger">necessitabus iste impedit?</h3>
        </Col>
        <Col md={8}>
          <p className="bg-danger text-white p-3">
            Necessitabus iste impedit?
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h3 className="text-danger">necessitabus iste impedit?</h3>
        </Col>
        <Col md={8}>
          <p className="bg-danger text-white p-3">
            Necessitabus iste impedit?
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;