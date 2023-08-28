import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/logo.png"
import styles from "../styles/NavBar.module.css"

function NavBar() {
  return (
    <Navbar className={styles.NavBar} collapseOnSelect expand="md" fixed="top">
      <Container>
        <Navbar.Brand><img src={logo} alt="logo" height="45" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><i className='fas fa-home'></i> Home</Nav.Link>
            <Nav.Link><i className='fas fa-user'></i> Profile</Nav.Link>
            <Nav.Link><i className="fa-solid fa-list-ul"></i> Posts</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link ><i className='fas fa-sign-in-alt'></i> Login</Nav.Link>
            <Nav.Link><i className='fas fa-user-plus'></i> Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar