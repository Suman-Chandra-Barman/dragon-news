import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import LeftSideNave from "./LeftSideNave";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <Navbar
      className="mb-5"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Dragon News
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            {user?.displayName && (
              <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            )}
            <Nav className="d-flex align-items-center">
              {user?.uid ? (
                <>
                  <Button onClick={handleLogout} variant="light">
                    Logout
                  </Button>
                </>
              ) : (
                <li className="d-flex align-items-center">
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <FaUserCircle className="fs-4" />
                </li>
              )}
            </Nav>
            <Nav>
              {user?.uid && (
                <Nav.Link to="/profile" as={Link}>
                  <Image
                    style={{ height: "30px", width: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  />
                </Nav.Link>
              )}
            </Nav>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNave />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
