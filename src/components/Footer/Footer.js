import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./style.css";

const Footer = () => {
  let url = "https://www.bokadirekt.se/places/stilsaker-25916";

  return (
    <div id="footer" className="footerContainer">
      <Container>
        <Row className="align-items-center">
          <Col lg={2}>
            <img
              className="img-footer"
              src="footer_img.png"
              alt="footer_img"
              loading="lazy"
            />
          </Col>
          <Col lg={4} className="text-center">
            <img
              className="logo_footer"
              src="logo.png"
              alt="logo"
              loading="lazy"
            />
          </Col>
          <Col lg={6} className="text-center">
            <h3 className="h3-footer">073-730-89-90</h3>
            <Button className="btn-footer"
              onClick={() => {
                window.location.href = url;
              }}
            >
              BOKA TID
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
