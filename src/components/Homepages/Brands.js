import React, { Component } from "react";
import Slider from "react-slick";
import brand1 from '../../assets/images/brends/brand1.1.jpg';
import brand2 from '../../assets/images/brends/brand2.2.jpg';
import brand3 from '../../assets/images/brends/brand3.3.jpg';
import brand4 from '../../assets/images/brends/brand4.4.jpg';
import brand5 from '../../assets/images/brends/brand5.5.jpg';
import brand6 from '../../assets/images/brends/brand6.6.jpg';
//import brand7 from '../../../assets/images/brends/brand7.webp';
import brand8 from '../../assets/images/brends/brand8.8.jpg';
import brand9 from '../../assets/images/brends/brand9.9.jpg';
import brand10 from '../../assets/images/brends/brand10.1.jpg';

export default class Brands extends Component {
  render() {
    var settings = {
      dots: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };
    return (
      <div className="brands">
      <div className="m-container">
        <h2 className="title-brand">
          <span>Our</span> Brends
        </h2>
        <div className="slider-content ">
        <Slider {...settings}>
          <div className="slider-img ">
           <img src={brand1}  alt="" />
          </div>
          <div className="slider-img ">
           <img src={brand2} alt="" />
          </div>
          <div className="slider-img">
           <img src={brand3} alt="" />
          </div>
          <div className="slider-img">
           <img src={brand4} alt="" />
          </div>
          <div className="slider-img">
           <img src={brand5} alt="" />
          </div>
          <div className="slider-img">
           <img src={brand6} alt="" />
          </div>
          {/* <div className="slider-img">
           <img src={brand7} alt="" />
          </div> */}
          <div className="slider-img">
           <img src={brand8} alt="" />
          </div>
          <div className="slider-img">
           <img src={brand9} alt="" />
          </div>
          <div className="slider-img">
           <img src={brand10} alt="" />
          </div>
        </Slider>
        </div>
      </div>
      </div>
    );
  }
}