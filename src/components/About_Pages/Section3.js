import React from 'react'
import img from '../../assets/images/home-sec3/img.png'
import Section3Item from './Section3Item'
import teamdata from '../data/Aboutsec3data'

const Section3 = () => {
  return (
    <div className="aboutsec3">
      <div className="top-container">
      <h2 className="title-top">
                Our <span>Teams</span>
                <p className='mt-3'><img src={img} width={200} alt="" /></p>
            </h2>

            <div className="row">
             {teamdata.teamData.map((item,index)=>{
               return(
                 <Section3Item 
                 img={item.img}
                 name={item.name}
                 title={item.title}
                 item={item}
                 key={index}
               />)
             })}

            </div>
      </div>
    </div>
  )
}

export default Section3