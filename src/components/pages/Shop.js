import React from 'react'
 import {Link} from 'react-router-dom'
import video from '../../assets/images/icons/video-bg.mp4'
import Section3 from '../Homepages/Section3'
//import ShopSection from '../Shop_Pages/ShopSection'
import Sec6_Product from '../AddtoCart/Sec6_Product'


const Shop = () => {
  return (
    <div className='shop page'>
      <div className="bg">
      <video autoPlay muted loop >

             <source src={video} type="video/mp4" />
              </video>
        <div className="container text-center">
          <Link to="/" className="title1 title ">
             <span>S</span>HOP
          </Link>
          <span className="pages-link title">
            <Link className="link" to="/">
              Home
            </Link>
            /
            <Link className="link" >
              Shop
            </Link>
          </span>
        </div>
     </div>
          <Sec6_Product/>
          <Section3/>
         {/* <ShopSection/> */}
    </div>
  )
}

export default Shop