import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const Contact = () => {
  return (
    <div id="kontakt" className="contactContainer">
      <Container>
        <Row>
          <Col lg={4} sm={12}>
            <Row
              className="align-items-center col-contact"
              style={{ padding: "5% 10%" }}
            >
              {/* <Col className="text-end"> */}
              <Col
                className={window.innerWidth > 576 ? "text-end" : "text-center"}
              >
                <img
                  src="phone.png"
                  alt="phone"
                  loading="lazy"
                  style={{ width: "40%" }}
                />
              </Col>
              <Col>
                <h4>HAVE QUESTIONS?</h4>
                <h4>073-730-89-90</h4>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={12}>
            <Row
              className="align-items-center col-contact"
              style={{ padding: "5% 10%" }}
            >
              <Col
                className={window.innerWidth > 576 ? "text-end" : "text-center"}
              >
                <img
                  src="pin.png"
                  alt="pin"
                  loading="lazy"
                  style={{ width: "35%" }}
                />
              </Col>
              <Col>
                <h4>LOCATED AT</h4>
                <p className="p-contact">norrbackagatan 48</p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={12}>
            <Row
              className="align-items-center col-contact"
              style={{ padding: "5% 10%" }}
            >
              <Col
                className={window.innerWidth > 576 ? "text-end" : "text-center"}
              >
                <img
                  src="schedule.png"
                  alt="schedule"
                  loading="lazy"
                  style={{ width: "35%" }}
                />
              </Col>
              <Col>
                <h4>BUSINESS HOURS</h4>
                <p className="p-contact">mon-sun 10am-8pm</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
