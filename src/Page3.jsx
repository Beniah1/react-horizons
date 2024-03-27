import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <Col md={12}>
          <h1 style={{ color: '#2c8cbf' }}>What Our Customers Say</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumenda minima fugiat quas nesciunt aperiam. Atque, quibusdam modi</p>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5">
        <Col md={5}>
          <Card className="bg-light mb-3">
            <Card.Body>
              <Card.Title>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-circle me-3" />
                  <span style={{ color: '#2c8cbf' }}>Morich Brown</span>
                </div>
              </Card.Title>
              <Card.Text>
                The attention to detail and the quality of the product exceeded my expectations. Highly recommended!
              </Card.Text>
              <i className="bi bi-star-fill" style={{ color: '#2c8cbf' }}></i>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card className="bg-light mb-3">
            <Card.Body>
              <Card.Title>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-circle me-3" />
                  <span style={{ color: '#2c8cbf' }}>Lily Mongesar</span>
                </div>
              </Card.Title>
              <Card.Text>
                The product not only met but exceeded my expectations. I'll definitely be a returning customer!
              </Card.Text>
              <i className="bi bi-star-fill" style={{ color: '#2c8cbf' }}></i>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="bg-light py-4">
        <Col md={12} className="text-center">
          <h3 style={{ color: '#2c8cbf' }}>Sign Up from Updates and Newsletter</h3>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter email" />
            <button className="btn btn-primary" style={{ backgroundColor: '#2c8cbf', borderColor: '#2c8cbf' }}>
              Sign Up
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;