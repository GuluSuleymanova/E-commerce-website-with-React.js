import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'

const ProductItem_Sec4 = (props) => {
  const {addItem}=useCart();
  const myFunction=()=>{
    alert("Your product added!");
  }
  return (
    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12'>
       
       <div className="card">
        <div className="card-image">
          <div className="image">
            <img className="pic-1" src={props.sekil} />
            <img className="pic-2" src={props.sekilhover} />
          </div>
          <span className="product-hot-label">{props.hot}</span>
          <ul className="product-links">
            <li><a href="#" data-tip="Add to Wishlist"><i className="far fa-heart" /></a></li>
            <li><a href="#" data-tip="Compare"><i className="fa fa-random" /></a></li>
            <li><a href="#" data-tip="Quick View"><i className="fa fa-search" /></a></li>
          </ul>
        </div>
        <div className="card-body">
          <button onClick={() => {addItem(props.item);myFunction()}} className=" add-to-cart">
            <i className="fas fa-plus" />Add to cart
          </button>
          <h3 className="title">{props.basliq}</h3>
          <ul className="rating">
            <li className="fas fa-star" />
            <li className="fas fa-star" />
            <li className="fas fa-star" />
            <li className="far fa-star" />
            <li className="far fa-star" />
          </ul>
          <div className="price">${props.qiymet}</div>
        </div>
      </div>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        {/* <div className="card">
        <div className="image">
        <img src={props.sekil} className="card-img-top" alt="..." />

        </div>
        <div className="card-body"> 
        <div className="center">
          <div className="card-title">
            <h5>{props.basliq}</h5>
            </div>
            <div className="star-icon">
            <div class="star"><i class="fas fa-star"></i></div>
            <div class="star"><i class="fas fa-star"></i></div>
            <div class="star"><i class="fas fa-star"></i></div>
            <div class="star"><i class="fas fa-star"></i></div>
            <div class="star"><i class="fas fa-star"></i></div>
            </div>
            <div className="card-text"><p >${props.qiymet}</p></div>
            <div className='icons'>
      <a href="#"><i className="fa-regular fa-clone"/></a>
      <a href="#"><i className="fa-regular fa-heart-circle-plus" /></a>
      <a href="#"><i className="far fa-eye"/></a>
      <a href="#"><i className="far fa-search"/></a>
    </div>
    <button onClick={() => addItem(props.item)} className="btn addtocard">
           <i class="fas fa-shopping-basket"></i>
        </button>

          </div>
        </div>
      </div> */}
    </div>


  )
}

export default ProductItem_Sec4