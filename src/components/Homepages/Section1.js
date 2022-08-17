import React from 'react'
import icon1 from '../../assets/images/icons/fast-delivery.png'
import icon2 from '../../assets/images/icons/salary.png'
import icon3 from '../../assets/images/icons/24-hours.png'
import { useTranslation } from "react-i18next";


const Section1 = () => {
const {t}=useTranslation();

  return (
<div className="sec1">
<div className="container">
<div className="row gy-3">

<div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 card-all ">
<div className="card ">
    
<div className="icon-img" >
<img src={icon1}  className="card-img-top" alt="Err"  />
</div>
<div className="card-body" >
<h5 className="card-title" >{t("home-sec1.title1")}</h5>
<p className="card-text">{t("home-sec1.desc1")}</p>
</div>
</div>
</div>

<div className=" col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 card-all">
<div className="card">
<div className="icon-img">
<img src={icon2} width={50} className="card-img-top" alt="Err" />
</div>
<div className="card-body">
<h5 className="card-title">{t("home-sec1.title2")}</h5>
<p className="card-text">{t("home-sec1.desc2")}</p>
</div>
</div>
</div>

<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 card-all">
<div className="card">
<div className="icon-img">
<img src={icon3} width={50} className="card-img-top" alt="Err" />
</div>
<div className="card-body">
<h5 className="card-title">{t("home-sec1.title3")}</h5>
<p className="card-text">{t("home-sec1.desc3")}</p>
</div>
</div>
</div>

</div>
</div>
</div>
)
}

export default Section1