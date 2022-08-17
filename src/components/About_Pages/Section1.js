import React from 'react'
import about from '../../assets/images/logo/about.jpg';

const Section1 = () => {
return (
<div className='about-sec1'>
<div className="container">
<div className="row w-100">
<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
<div className="image">
<img src={about} alt="" />
</div>
</div>

<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
<div className="text-caption">
<div className="title">
<h1>Why Choose Us</h1>

<p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
<hr />
</div>
<div className="desc">
<div className="item">
<div className="icon-box"><span>1</span></div>
<div className="text-box">
<h4>100% Certified Jewelleryg</h4>
<p>Every piece you get is fully checked for quality by reputed agencies.</p>
</div>
</div>
<div className="item">
<div className="icon-box"><span>2</span></div>
<div className="text-box">
<h4>100% Refund</h4>
<p>We will refund 100% of your money back wintin 30 days of delivery.</p>
</div>
</div>
<div className="item">
<div className="icon-box"><span>3</span></div>
<div className="text-box">
<h4>Free Shipping</h4>
<p>Free shipping on order over 100$.</p>
</div>
</div>
<div className="item">
<div className="icon-box"><span>4</span></div>
<div className="text-box">
<h4>Lifetime Exchange &amp; Buy Back</h4>
<p>Exchange the product for its current value.</p>
</div>
</div>
</div>
</div>



</div>
</div>
</div>
</div>


)
}

export default Section1