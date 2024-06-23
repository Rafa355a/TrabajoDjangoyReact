import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from './CustomNextArrow';
import CustomPrevArrow from './CustomPrevArrow';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
      <Slider {...settings}>
        <div>
          <img src="/images/slide1.jpg" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
