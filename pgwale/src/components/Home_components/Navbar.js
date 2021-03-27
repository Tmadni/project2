import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import api from "../../services/api";

import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
const NavbarD = () => {
  const history = useHistory();
  const [status, setStatus] = useState(false);
  //eslint-disable-next-line
  useEffect(() => {
    if (sessionStorage.getItem("login")) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, []);

  const logout = (e) => {
    api
      .post("/api/signout")
      .then((res) => {
        console.log(res);
        sessionStorage.clear();
        setStatus(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function user(e) {
    e.preventDefault();
    api
      .get("/api/user")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Container fluid className="nav-bar ">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">Aboutus</Nav.Link>
            {status ? (
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={user}>username</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
              </NavDropdown>
            ) : null}
            <Button className="book" variant="success" href="/signin">
              Book Now
            </Button>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search by Location"
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
export default NavbarD;
