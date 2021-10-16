//bootstrap
import { Navbar, Container, Nav } from "react-bootstrap";

//rutes
import { Link } from "react-router-dom";

//styles
import "./navbar.css"


const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
              <Link className='link-to-nav' to="/">Home</Link>
              <Link className='link-to-nav' to="/cart-shop">Shopping Cart</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
};

export default NavBar;
