// import styles from './NavBa.module.scss';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar
      bg='primary'
      variant='dark'
      expand='lg'
      className='mt-4 mb-4 rounded'
    >
      <Container>
        <Navbar.Brand href='/'>Blog.app</Navbar.Brand>
        <Nav className='flex-sm-row'>
          <Nav.Link className='py-0 me-2' as={NavLink} to='/'>
            Home
          </Nav.Link>
          <Nav.Link className='py-0' as={NavLink} to='/about'>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
