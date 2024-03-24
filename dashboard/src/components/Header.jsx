import { Container, Row, Col } from 'react-bootstrap';
import LogoHead from '../assets/LogoHead.png'; 

function Header() {
    return (
      <Container className="text-center mt-4 mx-8">
        <Row>
          <Col xs={1}>
            <h3>Dashboard</h3>
          </Col>
          <Col xs={11} className="d-flex justify-content-end">
            <img src={LogoHead} className="icono" alt="Icono" style={{ width: '100px', height: '50px' }} /> {/* Utiliza la imagen importada */}
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Header;
  