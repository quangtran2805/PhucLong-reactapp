import React from "react";
import Slider from "react-slick";
import "./Slider.scss"

import banner from "../../img/banner-thuc-uong.jpg";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <React.Fragment>
      <Slider {...settings}>
        <div>
          <img src={banner} alt="" />
        </div>
         <div>
          <img src={banner} alt="" />
        </div>
       {/* <div>
          <img src={banner} alt="" />
        </div> */}
      </Slider>
    </React.Fragment>
  );
};

export default Slide;
