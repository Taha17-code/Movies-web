import axios from 'axios';
import { useEffect, useState } from 'react';
import {Pagination} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import './PaginationPage.css'
import {  GetPageNum } from './redux/action/MoviesActions';
import {} from './redux/reducer/movieReducer'
function PaginationPage() {

  const [PageCounter,PageCountState]= useState(0);
  const dispatch=useDispatch();
  const dataSelector=useSelector(state=>{
    // console.log(state,'why');
    return state.pageC;
  })
   
    
  
  // console.log(PageCounter)
  

  
useEffect(()=>{
  PageCountState(dataSelector);
}, [dataSelector])


  const GetPageNumber=(pageNum)=>{ 

    dispatch(GetPageNum(pageNum))
    

  }



  const handlePageClick=(data)=>{
   
    console.log(data.selected+1)
    GetPageNumber(data.selected+1)

  }

    return (
   
      <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      pageCount={PageCounter}
      previousLabel="< السابق"
      

      containerClassName={"pagination w-100 justify-content-center  p-4"}
      pageClassName={"page-item StyleItem"}
      pageLinkClassName={"page-link StyleItem"}
      previousClassName={"page-link StyleItem"}
      nextClassName={"page-link StyleItem"}
      breakClassName={"page-item StyleItem"}
      breakLinkClassName={"page-link StyleItem "}
      activeClassName={" activeStyle"}
      
    />
      
    );
  }
  
  export default PaginationPage;