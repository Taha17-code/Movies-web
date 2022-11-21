import {Pagination} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './PaginationPage.css'
function PaginationPage({GetPageNum , PageCount}) {

  console.log(PageCount)
  const handlePageClick=(data)=>{

    console.log(data.selected+1)
    GetPageNum(data.selected+1)

  }

    return (
   
      <ReactPaginate
      breakLabel="..."
      nextLabel="التالي >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      pageCount={PageCount}
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