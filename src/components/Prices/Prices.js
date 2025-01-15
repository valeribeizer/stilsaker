import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { Button } from "react-bootstrap";
import { AnimatedOnScroll } from "react-animated-css-onscroll";


const Prices = () => {
  let url = "https://www.bokadirekt.se/places/stilsaker-25916";

  const prices_arr = [
    {
      title: "dam/herr klippning",
      price: "599/499 SEK",
    },
    {
      title: "barnklippning",
      price: "350 SEK",
    },
    {
      title: "färgning",
      price: "fr 1150 SEK",
    },
    {
      title: "balayage",
      price: "fr 1990 SEK",
    },
    {
      title: "foljeslingor",
      price: "fr 1490 SEK",
    },
    {
      title: "luggklippning",
      price: "120 SEK",
    },
  ];

  return (
    <div id="prices" className="pricesContainer">
      <AnimatedOnScroll
        animationIn="fadeInUp"
        animationInDelay="3"
        style={{
          animationDuration: "4000ms",
        }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} style={{ paddingTop: "7%" }}>
              <Row className="text-start" style={{ marginLeft: "10%" }}>
                <h3>HERE YOU CAN FIND</h3>
                <h1 className="h1-prices">prices</h1>
              </Row>
              <Row style={{ marginLeft: "10%", marginTop: "5%" }}>
                {prices_arr.map(({ title, price }, index) => (
                  <Row key={index}>
                    <Col className="text-start">
                      <p>{title}</p>
                    </Col>
                    <Col className="text-end">
                      <h3>{price}</h3>
                    </Col>
                  </Row>
                ))}
              </Row>
              <Row
                className="justify-content-center"
                style={{ marginLeft: "10%", marginTop: "10%" }}
              >
                <Button
                  onClick={() => {
                    window.location.href = url;
                  }}
                  style={{ width: "auto" }}
                  className="btn-prices"
                >
                  BOKA TID
                </Button>
              </Row>
            </Col>
            <Col lg={6} md={6} className="text-end col-prices-img">
              <img
                className="pricesImg"
                src="pricesScreen_img.png"
                alt="prices_img"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </AnimatedOnScroll>
    </div>
  );
};

export default Prices;
