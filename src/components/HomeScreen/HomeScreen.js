import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const HomeScreen = () => {
    return (
      <div id="home" className="homeScreenContainer">
        <Container>
          <Row>
            <Col lg={5} className="align-content-center">
              <img
                className="homeScreenImg1"
                alt="homeScreenImg"
                src="homeScreen_img1.png"
                loading="lazy"
              />
            </Col>
            <Col lg={4} className="text-start align-content-center main-text">
              <h1  className="h1-homeScreen">
                a SPACE to FIND
                <br />
                HEALING, GROWTH
                <br />
                and RENEWAL
              </h1>
              <a href="#contact" className="homeScreenBtn">
                GET IN TOUCH
              </a>
            </Col>
            <Col
              lg={3}
              className="text-end homeScreenImg2-col"
            >
              <img
                className="homeScreenImg2"
                alt="homeScreenImg"
                src="homeScreen_img2.png"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default HomeScreen

