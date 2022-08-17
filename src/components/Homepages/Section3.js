import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import img from '../../assets/images/home-sec3/img.png'
import { useTranslation } from "react-i18next";



const Section3 = () => {
const {t}=useTranslation();

    var settings = {
        dots: false,
        //fade: true,
        nextArrow: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    };
  return (
    <div className='top-section '>
        <div className="top-container">
            <h2 className="title-top">
            {t("home-sec3.title1")} <span>{t("home-sec3.title11")}</span>
                <p className='mt-3'><img src={img} width={200} alt="" /></p>
            </h2>
            
            <div className="slider-content-top">
              <Slider {...settings}>
                  <div>
                <div className="top-bg top-bg-1">
                    <Link className="link" to="/collection"> 
                  <p>{t("home-sec3.desc1")}</p>
                 </Link> 
                </div>
                
                 </div>
                 <div>
                 <div className="top-bg top-bg-2"> 
                 <Link className="link" to="/collection"> 
                  <p>{t("home-sec3.desc2")}</p>
                 </Link>
                 </div>
               
                 </div>
                 <div>
                 <div className="top-bg top-bg-3"> 
                <Link className="link" to="/collection"> 
                  <p>{t("home-sec3.desc3")}</p>
                 </Link>
                 </div>
                
                 </div>
                 <div>
                 <div className="top-bg top-bg-4"> 
                <Link className="link" to="/collection"> 
                  <p>{t("home-sec3.desc4")}</p>
                 </Link>
                 </div>
                
                 </div>
                 <div>
                 <div className="top-bg top-bg-5"> 
                <Link className="link" to="/collection"> 
                  <p>{t("home-sec3.desc5")}</p>
                 </Link>
                 </div>
                
                 </div>
                 </Slider>
            </div>
        </div>

    </div>
  )
}

export default Section3