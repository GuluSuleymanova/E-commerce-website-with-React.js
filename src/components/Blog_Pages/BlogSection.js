import React from 'react'
import BlogItem from './BlogItem'
import datablog from '../data/Blogdata'
import img from '../../assets/images/home-sec3/img.png'



const BlogSection = () => {
  return (
    <div className="homeblog-sec">
      <div className="container text-center">
      <h2 className="title-top">
               Our Latest<span> Blogs</span>
              <p className='mt-3'><img src={img} width={200} alt="" /></p>
          </h2>
        <div className="row">
          {datablog.blogData.map((item,index)=>{
            return(
              <BlogItem
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
             

      </div>
      
    </div>
  )
}

export default BlogSection