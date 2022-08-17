import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/home-sec3/img.png'
import ProductItem_Sec6 from './ProductItem_Sec6'
import ShopCatagory from '../data/ShopCatagorydata'
import ReactPaginate from 'react-paginate'



const Sec6_Product = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [users, setUsers] = useState(ShopCatagory.allData.slice(0, 16));
  const [users1, setUsers1] = useState(ShopCatagory.forwomenData.slice(0, 16));
  const [users2, setUsers2] = useState(ShopCatagory.formenData.slice(0, 16));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
   
  const displayUsers = users
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item,index)=>{
    return(
    <ProductItem_Sec6 
   sekil={item.img}
   sekilhover={item.imghover}
   basliq={item.title}
   desc={item.desc}
   hot={item.hot} 
   qiymet={item.price}
   item={item} 
   key={index}
   />
   )
   });
   const displayUsers1 = users1
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item,index)=>{
    return(
    <ProductItem_Sec6 
   sekil={item.img}
   sekilhover={item.imghover}
   basliq={item.title}
   desc={item.desc}
   hot={item.hot} 
   qiymet={item.price}
   item={item} 
   key={index}
   />
   )
   });
   const displayUsers2 = users2
  .slice(pagesVisited, pagesVisited + usersPerPage)
  .map((item,index)=>{
    return(
    <ProductItem_Sec6 
   sekil={item.img}
   sekilhover={item.imghover}
   basliq={item.title}
   desc={item.desc}
   hot={item.hot} 
   qiymet={item.price}
   item={item} 
   key={index}
   />
   )
   });
   const pageCount = Math.ceil(users.length / usersPerPage);

   const changePage = ({ selected }) => {
     setPageNumber(selected);
     //window.scrollTo(0, 0);
   };
  return (
    <div className="sec6 sec4" data-aos="zoom-in-up">
    <div className="pro-container text-center">
    <h2 className="title-top">
               Shop by<span> Category </span>
              <p className='mt-3'><img src={img} width={200} alt="" /></p>
          </h2>

          <div className="button-parts">
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>All Jewellery</button>
            <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>For Women</button>
            <button  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>For Men</button>
          </div>
           <div className="content-parts">
           <div
          className={toggleState === 1 ? "content  active-content" : "content"}
                 >
          <div className="row gy-3">
          
                   {displayUsers}
              
          </div>
        </div>


        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <div className="row gy-3">
           {displayUsers1}
          </div>
        </div>


        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="row gy-3">
           
          {displayUsers2}
          </div>
        </div>


            </div>
            <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

             <Link to="/shop" className="show">
               <button  className='learn-btn'><span>Show More</span></button>
             </Link>

             </div>
             </div>
             
             )
             
}

export default Sec6_Product