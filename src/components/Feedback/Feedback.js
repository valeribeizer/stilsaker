import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="feedback" className="feedbackContainer">
      <AnimatedOnScroll
        animationIn="fadeIn"
        style={{
          animationDuration: "4000ms",
        }}
      >
        <Container>
          <Row className="row-feedback">
            <Col lg={2} className="col-feedback-img">
              <img
                style={{ opacity: "0.8" }}
                src="feedback_img.png"
                alt="feedback_img"
                loading="lazy"
              />
            </Col>
            <Col lg={12} className="text-end">
              <h3>NOT SURE YET?</h3>
              <h1 className="h1-feedback">words we love hearing</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <Row>
                    <h1 className="h1-feedback-sign">"</h1>
                  </Row>
                  <Row>
                    <p className="p-feedback">
                      Superbra, supernöjd. Sneja har klippt och schamponerat
                      mitt hår och min sons, så många och alltid med nit och
                      skicklighet.
                    </p>
                  </Row>
                  <Row>
                    <h3 className="h3-feedback">PETER</h3>
                  </Row>
                </div>
                <div>
                  <Row>
                    <h1 className="h1-feedback-sign">"</h1>
                  </Row>
                  <Row>
                    <p className="p-feedback">
                      Litar inte på någon annan frisör än Sneja, hon har tagit
                      hand om mitt hår under en lång tid och jag är mer än nöjd
                      med resultatet varje gång.
                    </p>
                  </Row>
                  <Row>
                    <h3 className="h3-feedback">KARINA</h3>
                  </Row>
                </div>
                <div>
                  <Row>
                    <h1 className="h1-feedback-sign">"</h1>
                  </Row>
                  <Row>
                    <p className="p-feedback">
                      Nyss hemkommen från en lååång, underbar behandling hos
                      favoritfrissan! Känner mej alldeles NY. Så lyxigt att vara
                      helt själv i salongen, eftersom det bara är en frisör på
                      denna salong. Tryggt o säkert inte minst i dessa tider!
                      Kan varmt rekommenderas.
                    </p>
                  </Row>
                  <Row>
                    <h3 className="h3-feedback">MARION</h3>
                  </Row>
                </div>
              </Slider>
            </div>
          </Row>
        </Container>
      </AnimatedOnScroll>
    </div>
  );
};

export default Feedback;
