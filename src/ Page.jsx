import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function HomePage() {
  return (
    <Container style={{ paddingTop: 60 }}>
      <Row>
        <Col md={6}>
          <h1>Welcome to Nike Shoes</h1>
          <p>
            Discover the perfect shoes for your journey. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. In egestas consequat eros,
            imperdiet viverra nunc congue ac. Cras nec tincidunt nisi. Donec
            pulvinar quis augue id interdum. Suspendisse blandit odio in ipsum
            vestibulum, vitae efficitur augue condimentum. Quisque accumsan
            purus quis sagittis tincidunt. Donec nec dapibus mauris. Sed sit
            amet leo consectetur adipiscing elit. Fusce nec imperdiet augue,
            quis facilisis tellus. Phasellus consequat, et est.
          </p>
          <Button variant="primary" className="me-2">
            Explore Nike Shoes
          </Button>
          <Button variant="outline-primary">Learn more about Nike Shoes</Button>
        </Col>
        <Col md={6}>
          <img src={require('../src/Welcome.jpeg')} alt="Stylish Shoes" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
