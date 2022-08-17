import React from 'react'
import logo from '../assets/images/logo/safir-logo-white.png'
import gallery1 from '../assets/images/footer-gallery/gallery-1.jpg'
import gallery2 from '../assets/images/footer-gallery/gallery-2.jpg'
import gallery3 from '../assets/images/footer-gallery/gallery-3.jpg'
import gallery4 from '../assets/images/footer-gallery/gallery-4.jpg'
import gallery5 from '../assets/images/footer-gallery/gallery-5.jpg'
import gallery6 from '../assets/images/footer-gallery/gallery-6.jpg'

const Footer = () => {
return (
<footer>
<div className="my-container">
<div className="footer-top">

<div className="row gy-5">

<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
<div className="logo-img">
<img src={logo} width={200} alt="" />
</div>
<p>Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche Lorem Ipsum ist einfach Dummy-Text der Druck- und Satzindustrie. Lorem Ipsum war der Standard der Branche</p>
</div>
<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
<h4>Quick Links</h4>
<ul className="footer-list">
<li><a href="#">Company History</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Contact Us</a></li>
<li><a href="#">Services</a></li>
<li><a href="#">Privacy Policy</a></li>
</ul>
</div>


<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
<h4>Gallery</h4>
<div className="row d-flex gx-1 gy-3">
<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12"><img src={gallery1} width={100} alt="" /></div>
<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12"><img src={gallery2} width={100} alt="" /></div>
<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12"><img src={gallery3} width={100} alt="" /></div>
<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12"><img src={gallery4} width={100} alt="" /></div>
<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12"><img src={gallery5} width={100} alt="" /></div>
<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-12"><img src={gallery6} width={100} alt="" /></div>
</div>
</div>

<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12">
<h4>Information</h4>
<ul className="address1">
<li><i className="fal fa-map-marker-alt"></i>Lorem Ipsum 132 xyz Lorem Ipsum</li>
<li><i class="fal fa-mail-bulk"></i><a href="mailto:#"> info@test.com</a></li>
<li><i class="fad fa-mobile-alt" aria-hidden="true" /> <a href="tel:12 34 56 78 90">12 34 56 78 90</a></li>
</ul>
<ul className="social-icon">
<li><a href="#"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
<li><a href="#">< i className="fab fa-instagram" aria-hidden="true" /></a></li>
<li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
</ul>
</div>
</div>
</div>
<div className="footer-bottom">
<div className="row d-flex">
<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
<div className="copyright">
<p>© 2022 Safir - Personal  Template.</p>
<p> Design by<a href="#">GuluSuleymanova</a>- All rights reserved.</p>
</div>
</div>
</div>
</div>

</div>

</footer>
)
}

export default Footer