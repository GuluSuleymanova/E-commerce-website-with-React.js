import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import basket from '../../assets/images/icons/basket.jfif';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Cart = () => {

 const myFunction=()=>{
    alert("Siz bu mehsulu silmek isteyirsiz?");
  }

const{isEmpty,
totalUniqueItems,
totalItems,
items,
updateItemQuantity,
cartTotal,
removeItem,
emptyCart
}= useCart();

if (isEmpty) return <div className="text-center d-flex align-items-center justify-content-center py-5">
   <div className="image">
  <img src={basket} width="100%" height="100%" alt="" /> 
 <h1>Your Cart Empty</h1>
  <Link to='/'><button className='btn-back'>Back to Shop</button></Link>
</div>
</div>
return (
<div className='cartpage'>
  
<div className="title text-center"><h1>Shopping Cart</h1>
<p className='pb-3 item-title'>Your Cart({totalItems} items)</p>
</div>
<div className="container">
  

<div className="row">
<div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 col-12">

{items.map((item,index)=>{
return(
  <div className="card mb-3" key={index}>
  <div className="row g-0">
    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 col-12">
      <Carousel infiniteLoop>
                <div className='image'>
                    <img src={item.img} width="100%"/>
                    
                </div>
                <div className='image'>
                    <img src={item.imghover} />
                    
                </div>
                <div className='image'>
                    <img src={item.imghover}/>
                   
                </div>
            </Carousel>
    </div>










    <div className=" col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 col-12">
      <div className="card-body">
        <div className="card-content">
        <h5 className="card-title">{item.title}</h5>
        <p className='card-desc'>{item.desc}</p>
        <ul className="rating">
            <li className="fas fa-star" />
            <li className="fas fa-star" />
            <li className="fas fa-star" />
            <li className="far fa-star" />
            <li className="far fa-star" />
          </ul>
        <h4 className="card-text">${item.price}</h4>
        </div>
        <hr />
        <div className="button-group">
         <button className='btn btn-danger'
         onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
        <div className="say">{item.quantity}</div>
         <button className='btn btn-success'
          onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
        </div>
        <hr />
          <div className="footer-button">
        <button onClick={()=>{{removeItem(item.id);myFunction()}}} className="trash-button"> <span> <i className="fa-solid fa-trash"></i></span></button>
        <Link to="/check"><button className="btn"><i className="fas fa-arrow-right me-2"></i><span> Buy Now</span></button>
      </Link> 
            </div>
      </div>
    </div>
  </div>
</div>
)
})}
</div>

<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 col-12 ">
  <div className="card card-total">
    <h3 className='pt-3 pb-3 mx-2'>Summary</h3>
    <div className="d-flex mx-3 ">
    Subtotal<span className='ms-auto'>{totalUniqueItems}</span>
    </div>
    <hr />
    <div className="d-flex mx-3 ">
    Total Items<span className='ms-auto'>{totalItems}</span>
    </div>
    <hr />
    <div className="d-flex mx-2 ">
    <h3>Total</h3><span className='ms-auto'>& {cartTotal}</span>
    </div>

    <button onClick={()=>emptyCart()} className="btn-empty">Empty Cart</button>
    <div className="link-button d-flex justify-content-space-between">
    <Link to="/check"><button className="btun-check">Checkout Now</button>
      </Link> 
      <Link to="/"><button className="btn-back">Back to Home</button>
      </Link> 
      </div>
</div>


</div>
</div>
</div>

</div>

)
}

export default Cart