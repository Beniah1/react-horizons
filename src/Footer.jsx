import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // You can create this CSS file to style your components

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <h5>RESOURCES</h5>
            <ul>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Shipping</a></li>
              <li><a href="/">Returns</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>HELP</h5>
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Customer Support</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>COMPANY</h5>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>PROMOTIONS & DISCOUNTS</h5>
            <ul>
              <li><a href="/">Subscribe</a></li>
              <li><a href="/">Special Offers</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="social-icons">
          <Col md={12}>
            <a href="/" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
