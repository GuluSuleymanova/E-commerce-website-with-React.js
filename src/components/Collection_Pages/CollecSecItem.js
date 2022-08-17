import React from 'react'
import { Link } from 'react-router-dom'


const CollecSecItem = (props) => {
  return (
    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12'>
      <div className="collec-box">
       <div className="image-card-box">
         <img src={props.img} alt="" />
              
             </div> 
            <p>{props.title}</p>
            
              <div className="box-info">
             <Link className="link" to="/shop"> 
             <button>Shop Now</button>
             </Link> 
      </div> 
      </div>

    </div>
  )
}

export default CollecSecItem