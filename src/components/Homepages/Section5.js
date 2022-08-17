import React from 'react'
import video from '../../assets/images/icons/sec5-video1.mp4'
import cat2 from '../../assets/images/icons/category2.jpg'
import cat3 from '../../assets/images/icons/category3.jpg'
import cat4 from '../../assets/images/icons/category4.jpg'

const Section5 = () => {
  return (
    <div className='sec5' >
        <div className="cat-container">
        <div className="image-category">
            <div className="category-box">
            <video  autoPlay muted loop>
             <source src={video} type="video/mp4" />
               </video>
            </div>
            <div className="category-box">
            <img src={cat4} alt="" />
            <div className="info1">
                    <p>Top Sale Diamond</p>
                    <h2>Deal Of The Day</h2>
                     <h1>35%</h1>
                   <p>Off for all items!</p>
                   <div className="btn btn">
                       Shop Now
                   </div>

            </div>
            </div>
            <div className="category-box">
            <img src={cat3} alt="" />
            <div className="info2">
                <h3>Earrings</h3>
                <div className="btn btn">
                       Shop Now
                   </div>
            </div>
            </div>
            <div className="category-box">
            <img src={cat2} alt="" />
            <div className="info2 text-center">
                <h3>Pendants <br /> & <br />
                    Necklaces</h3>
                <div className="btn btn">
                       Shop Now
                   </div>
            </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Section5