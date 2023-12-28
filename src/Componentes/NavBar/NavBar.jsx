import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

const NavBar = () => {
  return (
    <header>


      <Navbar className="custom-navbar">
        <Container>
          <h1> Don Gato</h1>
          <Nav className="nav-links">
            <Nav.Link className="nav-link" href="">Alimentos</Nav.Link>
            <Nav.Link className="nav-link" href="">Juguetes</Nav.Link>
            <Nav.Link className="nav-link" href="">Recipientes </Nav.Link>
            <Nav.Link className="nav-link" href="">Camitas</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>

    </header>
  )
}

export default NavBar