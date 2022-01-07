import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import brandLogo from "../../images/infinity-logo.png";
import './Header.css'
const Header = () => {
  const{user,logOut}= useAuth();
  const history = useHistory();
  const handleLoginBtn = ()=>{
    history.push('/login')
  }
  return (
    <>
      <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img className="brand-logo" src={brandLogo} alt="" />
            <small>Infinity Tour</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-container mx-auto">
            <Nav.Link className="nav-item"   as={Link}   to="/home">Home</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/travels">Travels</Nav.Link>
              {
                user.email  && <><Nav.Link className="nav-item all-booking" as={Link} to="/allbooking">All Booking</Nav.Link>
                <Nav.Link className="nav-item" as={Link} to="/mybooking">My Booking</Nav.Link>
                <Nav.Link className="nav-item" as={Link} to="/addnewtour">Add New Tour</Nav.Link></>
              }
              <Nav.Link className="nav-item" as={Link} to="/about">About</Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/contact">Contact</Nav.Link>
              
            </Nav>
           <span className="text-white"> {user.displayName}</span>
            {
              user.email ? <Button variant="dark" onClick={logOut}>LogOut</Button> :<Button onClick={handleLoginBtn} variant="dark">Login</Button>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
