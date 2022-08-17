import React from 'react'
import CollecSecItem from './CollecSecItem'
import collectionData from '../data/Collectiondata'
import img from '../../assets/images/home-sec3/img.png'


const CollectionSection = () => {
  return (
    <div className='collections top-section'>
      <div className="top-container">
      <h2 className="title-top">
                Discover the <span>Collections</span>
                <p className='mt-3'><img src={img} width={200} alt="" /></p>
            </h2>
        <div className="row gy-3">
        {collectionData.allcollecdata.map((item,index)=>{
            return(
              <CollecSecItem
              img={item.img}
              title={item.title}
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

export default CollectionSection