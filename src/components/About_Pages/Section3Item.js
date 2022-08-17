import React from 'react'

const Section3Item = (props) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12">
        <div className="card">
        <div className="face front-face">
          <img src={props.img} alt="" className="profile" />
          <div className="pt-3 text-uppercase name">
            {props.name}
          </div>
          <div className="designation">{props.title}</div>
        </div>
        <div className="face back-face">
          
          <div className="icon">
           <li style={{ "--clr": "#25d366"}}><a href=""><i className="fa-brands fa-whatsapp"></i></a></li>
           <li style={{ "--clr":"#c32aa3" }}><a href=""><i className="fa-brands fa-instagram"></i></a></li>
           <li style={{ "--clr":"#1da1f2" }}><a href=""><i className="fa-brands fa-twitter"></i></a></li>
           <li style={{ "--clr": "#1877f2"}}><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Section3Item