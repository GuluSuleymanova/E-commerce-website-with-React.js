import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'


const Section2 = () => {
    const{t}=useTranslation();
  return (
    <div className='sec2'>
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center w-100 gy-3">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
                   <div className="bg bg-img-1 kenburns-top">
                       <div className="content">
                           <p className="title">{t("home-sec2.title1")}</p>
                           <h5 className="desc">{t("home-sec2.desc1")}</h5>
                           <Link to="/shop"><button className='shop'>{t("home-sec2.button")}</button></Link>
                       </div>
                       </div> 
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
                   <div className="bg bg-img-2">
                       <div className="content">
                           <p className="title">{t("home-sec2.title2")}</p>
                           <h5 className="desc2">{t("home-sec2.desc2")}</h5>
                           <Link to="/shop"><button className='shop'>{t("home-sec2.button")}</button></Link>
                       </div>
                       </div> 
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12">
                   <div className="bg bg-img-3">
                       <div className="content">
                           <p className="title">{t("home-sec2.title3")}</p>
                           <h5 className="desc">{t("home-sec2.desc3")}</h5>
                           <Link to="/shop"><button className='shop'>{t("home-sec2.button")}</button></Link>
                       </div>
                       </div> 
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section2