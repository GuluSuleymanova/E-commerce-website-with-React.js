import React from 'react'
 import {Link} from 'react-router-dom'
import Section1 from '../About_Pages/Section1'
import video from '../../assets/images/icons/video-bg.mp4'
import Section2 from '../About_Pages/Section2'
import Section3 from '../About_Pages/Section3'

const About = () => {
  return (
    <div className='about page'>
      <div className="bg">
      <video autoPlay muted loop >

             <source src={video} type="video/mp4" />
              </video>
        <div className="container text-center">
          <Link to="/" className="title1 title ">
             <span>A</span>BOUT  
          </Link>
          <span className="pages-link title">
            <Link className="link" to="/">
              Home
            </Link>
            /
            <Link className="link" >
              About
            </Link>
          </span>
        </div>
     </div>
         <Section1/>
         <Section2/>
         <Section3/>
    </div>
  )
}

export default About