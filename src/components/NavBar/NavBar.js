import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import "./style.css";

const NavBar = () => {
  let url = "https://www.bokadirekt.se/places/stilsaker-25916";
  const [navbar, setNavbar] = useState(false);

  const handleCollapse = () => {
    var nav = document.getElementById("basic-navbar-nav");
    nav.classList.remove("show");
  };

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Navbar
      expand="lg"
      className={navbar ? "bg-body-tertiary-active" : "bg-body-tertiary"}
      sticky="top"
      style={{ marginTop: "2%", marginRight: "4%", marginLeft: "4%", padding: "10px 80px" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          {window.innerWidth > 600 ? (
            <img src="logo.png" alt="logo" style={{ width: "240px" }} />
          ) : (
            <img src="logo.png" alt="logo" style={{ width: "120px" }} />
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="navBtn" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto align-items-end">
            <Nav.Link href="#about" onClick={handleCollapse}>
              om oss
            </Nav.Link>
            <Nav.Link href="#prices" onClick={handleCollapse}>
              prislista
            </Nav.Link>
            <Nav.Link href="#feedback" onClick={handleCollapse}>
              feedback
            </Nav.Link>
            <Nav.Link href="#kontakt" onClick={handleCollapse}>
              kontakt
            </Nav.Link>
          </Nav>
          <Button
            onClick={() => {
              window.location.href = url;
            }}
          >
            BOKA TID
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
