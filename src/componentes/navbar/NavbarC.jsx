import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

const NavbarC = () => {
  return (
    <>
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container className='text-white'>
        <NavLink className="nav-link nav-logo" to="/">
        <img src="/logo.jpeg" alt="Logo" className="logo"/>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">Bienvenidos</NavLink>
            <NavLink to="/Sobre_Nosotros" className="nav-link">Sobre Nosotros</NavLink>
            <NavLink to="/Consulta_Legal" className="nav-link">Consulta Legal</NavLink>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarC