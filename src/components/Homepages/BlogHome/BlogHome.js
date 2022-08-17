import React from 'react'
import { Link } from 'react-router-dom'
import BlogHomeItems from './BlogHomeItems'
import homedatablog from '../../data/HomeBlogdata';
import img from '../../../assets/images/home-sec3/img.png'



const BlogHome = () => {
  return (
    <div className="homeblog-sec" data-aos="zoom-in-up">
      <div className="container text-center">
      <h2 className="title-top">
               Our Latest<span> Blogs</span>
              <p className='mt-3'><img src={img} width={200} alt="" /></p>
          </h2>
        <div className="row">
          {homedatablog.homeblogData.map((item,index)=>{
            return(
              <BlogHomeItems
              img={item.img}
              title={item.title}
              desc={item.desc}
              date={item.date}
              item={item}
              key={index}
              />
            )
          })}
          
        </div>
             <Link to="/blog" className="show">
               <button className='learn-btn'><span>Learn More</span></button>
             </Link>

      </div>
      
    </div>
  )
}

export default BlogHome