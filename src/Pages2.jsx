import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './App.css'; // Import the CSS file with the styles

function HomePage() {
  return (
    <Container style={{ backgroundColor: 'SeaBlue', marginTop: 60 }}>
      <Row className="mb-5">
        {[1, 2, 3, 4, 5, 6].map((cardNum) => (
          <Col md={4} key={cardNum}>
            <Card className="card">
              <Card.Body>
                <Card.Title className="card-title">Nike Shoes</Card.Title>
                <Card.Text className="card-text">
                  Discover the perfect shoes for your journey. Lorem ipsum, dolor sit amet consectetur adipiscing elit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;