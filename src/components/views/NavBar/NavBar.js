// import styles from './NavBa.module.scss';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar
      bg='primary'
      variant='dark'
      expand='lg'
      className='mt-4 mb-4 rounded'
    >
      <Navbar.Brand href='#home'>Blog.app</Navbar.Brand>
      <Nav className='flex-sm-column flex-md-row'>
        <Nav.Link as={NavLink} to='/'>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to='/about'>
          About
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
