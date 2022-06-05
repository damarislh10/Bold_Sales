import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export const NavBar = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="colorBacknav mb-5"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="logo_bold"
              src="https://res.cloudinary.com/df90q7vvj/image/upload/v1654370459/boldPruebatecnica/logobold_nyl6zp.png"
              alt="logo_Bold"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="link-nav" href="#deets">
                Mi negocio
              </Nav.Link>
              <Nav.Link className="link-nav" href="#deets">
                Ayuda
                <img
                  className="ms-2 iconHelp"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1654368923/boldPruebatecnica/icons8-ayuda-24_pgmhsd.png"
                  alt="iconHelp"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
