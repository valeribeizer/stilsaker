import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const Contact = () => {
  const contact_arr = [
    {
      src: "phone.png",
      alt: "phone",
      title: "HAVE QUESTIONS?",
      desc: "073-730-89-90",
    },
    {
      src: "pin.png",
      alt: "pin",
      title: "LOCATED AT",
      desc: "norrbackagatan 48",
    },
    {
      src: "schedule.png",
      alt: "schedule",
      title: "BUSINESS HOURS",
      desc: "mon-sun 10am-8pm",
    },
  ];
  return (
    <div id="kontakt" className="contactContainer">
      <Container>
        <Row>
          {contact_arr.map(({ src, alt, title, desc }, index) => (
            <Col lg={4} sm={12} key={index}>
              <Row className="align-items-center col-contact col-pad">
                <Col
                  className={
                    window.innerWidth > 576 ? "text-end" : "text-start"
                  }
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    style={{ width: "35%" }}
                  />
                </Col>
                <Col>
                  <h4>{title}</h4>
                  <p className="p-contact">{desc}</p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
