import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import "./App.css";

function NikeShoesNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar1 shadow-sm" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Nikey Shoes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="text-white">
            <Nav.Link href="#shoes" className="text-white">
              All Shoes
            </Nav.Link>
            <Nav.Link href="#sneaker-release" className="text-white">
              Sneaker Releases
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#women" className="text-white">
                Women
              </NavDropdown.Item>
              <NavDropdown.Item href="#men" className="text-white">
                Men
              </NavDropdown.Item>
              <NavDropdown.Item href="#kids" className="text-white">
                Kids
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="dark" href="#signup" className="text-white">
            Sign Up
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NikeShoesNavbar;