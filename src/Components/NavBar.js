import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar className="mb-5" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Bold</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Mi negocio</Nav.Link>
            <Nav.Link href="#deets">Ayuda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
