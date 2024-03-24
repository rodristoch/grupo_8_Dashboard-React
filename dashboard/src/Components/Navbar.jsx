import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link de react-router-dom

function Navbar() {
  return (
    <Container className="text-center mt-4 mx-8">
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
    </Container>
  );
}

export default Navbar;
