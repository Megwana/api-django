import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/logo.png"
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className={styles.NavBar} collapseOnSelect expand="md" fixed="top">
      <Container>
        <NavLink to="/">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="45" />
        </Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink 
            exact
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/">
              <i className='fas fa-home'></i> Home
            </NavLink>
            <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/profile">
              <i className='fas fa-user'></i> Profile</NavLink>
            <NavLink 
            className={styles.NavLink} 
            activeClassName={styles.Active} 
            to="/posts"
            >
              <i className="fa-solid fa-list-ul"></i> Posts
              </NavLink>
          </Nav>
          <Nav>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin"><i className='fas fa-sign-in-alt'></i> Sign In</NavLink>
            <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/register"><i className='fas fa-user-plus'></i> Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar