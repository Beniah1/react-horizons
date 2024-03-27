import React from 'react';
import './App.css'; // You can create this CSS file to style your components
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={6}>
          <img src={require('../src/Shoe.jpeg')} alt="Stylish Shoes" className="img-fluid rounded" />
            <h1 className="text-primary mt-4">We Provide Super Quality Shoes</h1>
            <p className="text-muted">
              Discover our premium collection of shoes crafted with care and
              attention to detail. From sneakers to heels, we've got you covered.
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-column">
              <div className="mb-4">
                <i className="fas fa-shipping-fast fa-3x text-primary"></i>
                <h4 className="mt-2">Free Shipping</h4>
                <p>Enjoy free shipping on all orders!</p>
              </div>
              <div className="mb-4">
                <i className="fas fa-lock fa-3x text-primary"></i>
                <h4 className="mt-2">Secure Payment</h4>
                <p>Your payment information is safe and secure.</p>
              </div>
              <div>
                <i className="fas fa-hands-helping fa-3x text-primary"></i>
                <h4 className="mt-2">Love to Help You</h4>
                <p>Our friendly customer support team is here for you.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
