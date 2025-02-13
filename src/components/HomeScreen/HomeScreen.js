import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const HomeScreen = () => {
    return (
      <div id="home" className="homeScreenContainer">
        <AnimatedOnScroll
          animationIn="fadeIn"
          style={{
            animationDuration: "4000ms",
          }}
        >
          <Container>
            <Row>
              <Col
                lg={5}
                md={5}
                className={
                  window.innerWidth > 576
                    ? "align-content-start"
                    : "align-content-center order-2"
                }
              >
                <img
                  className="homeScreenImg1"
                  alt="homeScreenImg"
                  src="homeScreen_img1.png"
                  loading="lazy"
                />
              </Col>
              <Col
                lg={4}
                md={4}
                className={
                  window.innerWidth > 576
                    ? "text-start align-content-center main-text"
                    : "text-center align-content-center main-text order-1"
                }
              >
                <h1 className="h1-homeScreen">
                 a SPACE to FIND
                  <br />
                  HEALING, GROWTH
                  <br />
                  and RENEWAL
                </h1>
                <a href="#kontakt" className="homeScreenBtn">
                  GET IN TOUCH
                </a>
              </Col>
              <Col lg={3} md={3} className="text-end homeScreenImg2-col">
                <img
                  className="homeScreenImg2"
                  alt="homeScreenImg"
                  src="homeScreen_img2.png"
                  loading="lazy"
                />
              </Col>
            </Row>
          </Container>
        </AnimatedOnScroll>
      </div>
    );
}

export default HomeScreen

