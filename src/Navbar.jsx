import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NikeShoesNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white shadow-sm">
      <Container>
        <Navbar.Brand href="#home">Nike Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#shoes">All Shoes</Nav.Link>
            <Nav.Link href="#sneaker-release">Sneaker Releases</Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#women">Women</NavDropdown.Item>
              <NavDropdown.Item href="#men">Men</NavDropdown.Item>
              <NavDropdown.Item href="#kids">Kids</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="primary" href="#signup">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NikeShoesNavbar;
