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
      desc: '<a class="a-contact" href="tel:0733708990">073-730-89-90</a>',
    },
    {
      src: "pin.png",
      alt: "pin",
      title: "LOCATED AT",
      desc: '<a class="a-contact" href="https://maps.app.goo.gl/MCdeUi9HfFUGh51v5">norrbackagatan 48</a>',
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
            <Col lg={4} md={4} sm={12} key={index}>
              <Row className="align-items-center col-contact col-pad">
                <Col
                  className={
                    window.innerWidth > 576 ? "text-end col-4" : "text-center col-4"
                  }
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="icons"
                  />
                </Col>
                <Col className="col-8">
                  <h4>{title}</h4>
                  <p className="p-contact" dangerouslySetInnerHTML={{ __html: desc }}></p>
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
