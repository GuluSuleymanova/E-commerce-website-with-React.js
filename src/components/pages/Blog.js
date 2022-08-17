import React from 'react'
 import {Link} from 'react-router-dom'
import video from '../../assets/images/icons/video-bg.mp4'
import BlogSection from '../Blog_Pages/BlogSection'

const Blog = () => {
  return (
    <div className='blog page'>
      <div className="bg">
      <video autoPlay muted loop >

             <source src={video} type="video/mp4" />
              </video>
        <div className="container text-center">
          <Link to="/" className="title1 title ">
             <span>B</span>LOG 
          </Link>
          <span className="pages-link title">
            <Link className="link" to="/">
              Home
            </Link>
            /
            <Link className="link" >
              Blog
            </Link>
          </span>
        </div>
     </div>
         <BlogSection/>
    </div>
  )
}

export default Blog