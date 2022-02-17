import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar({ setInputSearch, inputSearch }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to={"/Home"}>
                
                <Button variant="secondary">Home</Button>
              </Link>
              <Link to={"/Home/MouvieList"}>
                
                <Button variant="primary">Movie List</Button>
              </Link>
              <Link to={"/Home/Add"}>
                
                <Button variant="info">Add New</Button>
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
