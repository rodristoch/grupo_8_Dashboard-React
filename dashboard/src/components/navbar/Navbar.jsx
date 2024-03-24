import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const location = useLocation();

  return (
    <Container className="text-center mt-4 mx-8">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link className='tittle-ji' as={Link} to="/" active={location.pathname === '/'}>Estado</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='tittle-navbar' as={Link} to="/users" active={location.pathname === '/users'}>Usuarios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  className='tittle-navbar' as={Link} to="/products" active={location.pathname === '/products'}>Productos</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default Navbar;
