import React from 'react'

const Section2Item = (props) => {
  return (
    <div>
        <div className="card">
            <div className="card-body">
            <div className='icon'>
            <i className="left fa-solid fa-quote-left"></i>
            
               </div>
                <p className='desc'>{props.desc}</p>
                <div className='icon'>
            <i className="right fa-solid fa-quote-right"></i>
            
               </div>
            </div>
            <div className="image">
                <div className="image-box">
                    <img src={props.img} alt="" />
                </div>
                <div className="info">
                <h5 className="name">{props.name}</h5>
                <p className="title">{props.title}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section2Item