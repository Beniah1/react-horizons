import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function HomePage() {
  return (
    <Container >
      <Row>
        <Col md={6}>
          <h1>Let's explore your own metaverse world.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas consequat eros, imperdiet viverra nunc congue ac. Cras nec tincidunt nisi. Donec pulvinar quis augue id interdum. Suspendisse blandit odio in ipsum vestibulum, vitae efficitur augue condimentum. Quisque accumsan purus quis sagittis tincidunt. Donec nec dapibus mauris. Sed sit amet leo consectetur adipiscing elit. Fusce nec imperdiet augue, quis facilisis tellus. Phasellus consequat, et est.</p>
          <Button variant="primary" className="me-2">Explore Now</Button>
          <Button variant="outline-primary">Learn more</Button>
        </Col>
        <Col md={6}>
          {/* Add your metaverse image here */}
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;