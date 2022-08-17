import React from 'react'

const BlogHomeItems = (props) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12">
        <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={props.img} />
            <h5>{props.title}</h5>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
           <h2><i className="fa-solid fa-calendar-days pe-3"></i>{props.date}</h2>
            <h6>{props.desc}</h6>
            <button className='blog'>Read More<i className="fas fa-arrow-right ps-1 pe-3"></i></button>
            
            
          </div>
        </div>
      </div>
      
      
      </div>
  
  )
}

export default BlogHomeItems