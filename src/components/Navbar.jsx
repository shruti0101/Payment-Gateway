import React from 'react';
import { Navbar as BSNavbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => (
  <BSNavbar bg="light" expand="lg">
    <Container>
      <BSNavbar.Brand as={Link} to="/" >
      <img src="https://skillzrevo.com/wp-content/uploads/2024/10/SkillzRevomainlogo-Photoroom-1-296x86.png" alt="Logo" width="148" height="40" className="d-inline-block align-top" />{' '}
      
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
