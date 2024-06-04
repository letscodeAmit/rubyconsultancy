import React from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  // $('.center').slick({
  //     centerMode: true,
  //     centerPadding: '60px',
  //     slidesToShow: 3,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           arrows: false,
  //           centerMode: true,
  //           centerPadding: '40px',
  //           slidesToShow: 3
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           arrows: false,
  //           centerMode: true,
  //           centerPadding: '40px',
  //           slidesToShow: 1
  //         }
  //       }
  //     ]
  //   });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="blob:https://xd.adobe.com/c75c96e6-986e-4d02-86f3-eb7037a39621" />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
};

export default ImageSlider;
