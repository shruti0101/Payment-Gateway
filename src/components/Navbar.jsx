import React from 'react';
import { Navbar as BSNavbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.svg';


const Navbar = ({ cartCount }) => (
  <BSNavbar sticky="top" bg="light" expand="lg">
    <Container>
      <BSNavbar.Brand as={Link} to="/" >
      <img
          src={logo}
          alt="Logo"
          width="148"
          height="40"
          className="d-inline-block align-top"
        />
      
      </BSNavbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Courses</Nav.Link>
        <Nav.Link as={Link} to="/cart">
          <FaShoppingCart /> Cart <Badge bg="danger">{cartCount}</Badge>
        </Nav.Link>
      </Nav>
    </Container>
  </BSNavbar>
);

export default Navbar;
