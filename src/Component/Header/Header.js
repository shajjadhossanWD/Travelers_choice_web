import React from 'react';
import { ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" className="header" sticky="top" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/home" className="fs-2"><span style={{color: "tomato"}}>TRA\</span>/ELO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
             
                {user.email ? <>
                <Nav.Link  as={Link} to="/my_orders">My Orders</Nav.Link>
                <Nav.Link as={Link} to="/manage_all_orders">Manage All Orders</Nav.Link>
                <Nav.Link as={Link} to="/add_new_offers">Add New Offers</Nav.Link>
                <Nav.Link>SignIn as: <b>{user.displayName}</b></Nav.Link>
                <Nav.Link style={{color: "tomato", borderBottom:"1px solid tomato"}} onClick={logOut}>Logout</Nav.Link>
                </>:
                <Nav.Link style={{color: "tomato", borderBottom:"1px solid tomato"}} as={Link} to="/signIn" >SignIn</Nav.Link>} 
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;