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
      src: "img1.png",
      alt: "img1",
    },
    {
      src: "img2.png",
      alt: "img2",
    },
    {
      src: "img4.png",
      alt: "img4",
    },
    {
      src: "img5.png",
      alt: "img5",
    },
    {
      src: "img6.png",
      alt: "img6",
    },
    {
      src: "img7.png",
      alt: "img7",
    },
    {
      src: "img8.png",
      alt: "img8",
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
