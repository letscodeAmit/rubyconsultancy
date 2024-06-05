import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../constant/dummyData";

const ImageSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
  };
  return (
    <div className="slider-container max-w-4xl mx-10 bg-black p-10 ">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="rounded-xl bg-gray-100 flex flex-col items-center ">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />

            <div className="text-start"> {item.title}</div>
            <div className="flex flex-row space-x-4 ">
              <h3>${item.price}</h3>
              <h3>{item.star}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
