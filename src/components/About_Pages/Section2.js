import React from "react";
import Section2Item from "./Section2Item";
import aboutdata from "../data/Aboutsec2data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../../assets/images/home-sec3/img.png'

//import { useTranslation } from "react-i18next";

const Section2 = () => {
 // const { t } = useTranslation();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="aboutsec2">
      <div className="top-container">
        <h2 className="title-top">
                Our <span>Clients</span> Say
                <p className='mt-3'><img src={img} width={200} alt="" /></p>
            </h2>
        
      
      <Slider {...settings}>
        {aboutdata.clientData.map((item, index) => {
          return (
            <Section2Item
              img={item.img}
              name={item.name}
              desc={item.desc}
              title={item.title}
              item={item}
              key={index}
            />
          );
        })}
      </Slider>
    </div>
    </div>
  );
};
export default Section2;
