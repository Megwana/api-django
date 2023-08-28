import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <div>
        <Navbar collapseOnSelect expand="md" fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
            <Nav.Link>Posts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar