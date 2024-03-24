import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/users">Usuarios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/products">Productos</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
