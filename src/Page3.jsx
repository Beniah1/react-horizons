import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (
    <Container>
      <Row className="my-5">
        <Col md={12} className="text-center mb-4">
          <h1 className="text-danger">Unveiling the Metaverse: A new era of virtual Experiences</h1>
        </Col>
        <Col md={12} className="text-center mb-4">
          <div>
            <i className="bi bi-headphones text-danger me-3"></i>
            <i className="bi bi-camera text-danger me-3"></i>
            <i className="bi bi-display text-danger me-3"></i>
            <i className="bi bi-globe text-danger me-3"></i>
            <i className="bi bi-heart text-danger"></i>
          </div>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <h2 className="text-primary mb-4">Unleashing virtual experiences everywhere</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="d-flex">
            <Button variant="danger" className="me-3">Basic Website</Button>
            <Button variant="outline-danger" className="me-3">Basic Website</Button>
            <Button variant="outline-danger">Basic Website</Button>
          </div>
        </Col>
        <Col md={6}>
          <img src="metaverse-image.jpg" alt="Metaverse" className="img-fluid" />
        </Col>
      </Row>
      <Row className="bg-dark text-white py-5">
        <Col md={12} className="text-center">
          <h3 className="mb-4">Get started with NISSI.Verse</h3>
          <Button variant="light">
            <i className="bi bi-apple me-2"></i>
            App Store
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;