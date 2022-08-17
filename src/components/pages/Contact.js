import React from 'react'
import ContactSection from '../Contact_Pages/ContactSection'
import video from '../../assets/images/icons/video-bg.mp4'
import {Link} from 'react-router-dom'



const Contact = () => {
  return (
    <div className='contact page'>
    <div className="bg">
    <video autoPlay muted loop >

           <source src={video} type="video/mp4" />
            </video>
      <div className="container text-center">
        <Link to="/" className="title1 title ">
           <span>C</span>ONTACT
        </Link>
        <span className="pages-link title">
          <Link className="link" to="/">
            Home
          </Link>
          /
          <Link className="link" >
            Contact
          </Link>
        </span>
      </div>
   </div>
       <ContactSection/>
       
  </div>
  )
}

export default Contact