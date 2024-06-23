import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // Esto asegura que se deslicen 1 elemento a la vez
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const BrandCarousel = () => {
  const brandImages = [
    { src: "/images/brand1.png", alt: "Brand 1" },
    { src: "/images/brand2.png", alt: "Brand 2" },
    { src: "/images/brand3.png", alt: "Brand 3" },
    { src: "/images/brand4.png", alt: "Brand 4" },
    { src: "/images/brand5.png", alt: "Brand 5" }
  ];

  return (
    <div style={{ padding: '20px 0' }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {brandImages.map((brand, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={brand.src} alt={brand.alt} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
