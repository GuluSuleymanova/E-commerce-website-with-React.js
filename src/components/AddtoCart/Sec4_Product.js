import React, {useState} from 'react'
import data1 from '../data/data1'
import img from '../../assets/images/home-sec3/img.png'
import ProductItem_Sec4 from './ProductItem_Sec4'
import ReactPaginate from 'react-paginate'



   

const Sec4_Product= () => {
  const [users, setUsers] = useState(data1.productData.slice(0, 16));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
   
  const displayUsers = users
  .slice(pagesVisited, pagesVisited + usersPerPage)

  .map((item,index)=>{
    return(
    <ProductItem_Sec4 
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
   })
   const pageCount = Math.ceil(users.length / usersPerPage);

   const changePage = ({ selected }) => {
     setPageNumber(selected);
     //window.scrollTo(0, 0);
   };

  return (
    <div className="sec4" data-aos="fade-down-right">
      <div className="pro-container text-center">
      <h2 className="title-top">
                 Recommended<span> For You </span>
                <p className='mt-3'><img src={img} width={200} alt="" /></p>
            </h2>

             <div className="row gy-3 ">
               

             {displayUsers}
       
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
   

   </div>
    
  )
}

export default Sec4_Product