import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { Button } from "react-bootstrap";

const Prices = () => {
  let url = "https://www.bokadirekt.se/places/stilsaker-25916";

  return (
    <div id="prices" className="pricesContainer">
      <Container>
        <Row>
          <Col lg={6} style={{ paddingTop: "7%" }}>
            <Row className="text-start" style={{ marginLeft: "65px" }}>
              <h3>HERE YOU CAN FIND</h3>
              <h1 className="h1-prices">prices</h1>
            </Row>
            <Row style={{ marginLeft: "65px", marginTop: "30px" }}>
              <Row>
                <Col className="text-start">
                  <p>dam/herr klippning</p>
                </Col>
                <Col className="text-end">
                  <h3>550/450 SEK</h3>
                </Col>
              </Row>
              <Row>
                <Col className="text-start">
                  <p>barnklippning</p>
                </Col>
                <Col className="text-end">
                  <h3>300 SEK</h3>
                </Col>
              </Row>
              <Row>
                <Col className="text-start">
                  <p>färgning</p>
                </Col>
                <Col className="text-end">
                  <h3>fr 1550 SEK</h3>
                </Col>
              </Row>
              <Row>
                <Col className="text-start">
                  <p>balayage</p>
                </Col>
                <Col className="text-end">
                  <h3>fr 1190 SEK</h3>
                </Col>
              </Row>
              <Row>
                <Col className="text-start">
                  <p>foljeslingor</p>
                </Col>
                <Col className="text-end">
                  <h3>fr 1850 SEK</h3>
                </Col>
              </Row>
              <Row>
                <Col className="text-start">
                  <p>luggklippning</p>
                </Col>
                <Col className="text-end">
                  <h3>100 SEK</h3>
                </Col>
              </Row>
            </Row>
            <Row
              className="justify-content-center"
              style={{ marginLeft: "65px", marginTop: "60px" }}
            >
              <Button
                onClick={() => {
                  window.location.href = url;
                }}
                style={{ width: "100px" }}
              >
                book
              </Button>
            </Row>
          </Col>
          <Col lg={6} className="text-end" style={{ paddingRight: "0.5%" }}>
            <img
              className="pricesImg"
              src="pricesScreen_img.png"
              alt="prices_img"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Prices;
