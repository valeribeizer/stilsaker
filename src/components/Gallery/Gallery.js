import React from "react";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import "./style.css";

const Gallery = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const gallery = [
    {
      src: "blond-hair.png",
      alt: "blond-hair",
    },
    {
      src: "balayage.png",
      alt: "balayage",
    },
    {
      src: "balayage2.png",
      alt: "balayage2",
    },
    {
      src: "hair-styling.png",
      alt: "hair-styling",
    },
    {
      src: "blond-styling.png",
      alt: "blond-styling",
    },
    {
      src: "klippning.png",
      alt: "klippning",
    },
    {
      src: "klippning-long-hair.png",
      alt: "klippning-long-hair",
    },
  ];

  return (
    <div className="galleryContainer">
      <Container>
        <div className="slider-container gallery-slider">
          <Slider {...settings}>
            {gallery.map(({ src, alt }, index) => (
              <div key={index}>
                <img
                  className="img-slider"
                  src={src}
                  alt={alt}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
