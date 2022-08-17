import React from 'react';
import OwlCarousel  from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from "react-i18next";



const options = {
  dots:false,
  nav:true,
  navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
  responsiveClass: true,
  loop: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  // animateOut: 'fadeOutLeft',
  // animateIn: 'fadeInRight',
  autoplay: true,
  autoplayTimeout: 15000,
  items:1,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 1,
      },
      1000: {
          items: 1,

      }
  },
};



 

  const MainCarousel = () => {

const {t}=useTranslation();


  
    return (
        <div className='main-slider'>
          <div className='container'>   
          <OwlCarousel   className="owl-theme"  {...options} >  
          <div className='bg-img bg-1 ' > 
          
            <div className="caption caption1 " data-aos="fade-left" data-aos-duration="9000">
              <div className="title1">
                <h1 data-aos="flip-left" data-aos-duration="3000">{t("main-carousel.title1")}</h1>
              </div>
              <div className="desc1">
                <p data-aos="fade-right">{t("main-carousel.desc1")}</p>
              </div>
               <div className="shops">
                <button className='shop1 type1'>{t("main-carousel.button1")}</button>
              </div>
             </div>
             </div>
          <div className='bg-img bg-2 ' >
          <div className="caption caption2" data-aos="fade-right">
              <div className="title2">
                 <p className='animate__animated animate__bounceInRight animate__delay-1s'>{t("main-carousel.title2")}</p>
              </div>
              <div className="desc2">
               <h1>{t("main-carousel.desc2")}</h1>
              </div>
              <div className="shops">
                <button className='shop2'>{t("main-carousel.button1")}</button>
              </div>

            </div>
            </div>  
          <div className='bg-img bg-3 ' >
          <div className="caption caption3">
              <div className="title3">
                <p>{t("main-carousel.title3")}</p>
              </div>
              <div className="desc3">
                <h1>{t("main-carousel.desc3")}</h1>
              </div>
              <div className="shops">
                <button className='shop3'>{t("main-carousel.button2")}</button>
              </div>

            </div>
            </div>  
          <div className='bg-img bg-4' >
          <div className=" caption caption4">
              <div className="title4">
                <p>{t("main-carousel.title4")}</p>
              </div>
              <div className="desc4">
                <h1>{t("main-carousel.desc4")}</h1>
              </div>
              <div className="shops">
                <button className='shop4'>{t("main-carousel.button1")}</button>
              </div>

            </div>
            </div>  
            
     
      </OwlCarousel>  
      </div> 
        </div>
    );
  }


export default MainCarousel;
