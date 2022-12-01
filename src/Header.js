import {Link} from 'react-router-dom'
import { Fragment, useState } from 'react';
import {NavDropdown,Navbar,Nav,Form,Container,Button, NavLink} from 'react-bootstrap';
import './Header.css';
import menu  from './images/menu.png';
import MoviesLogo from './images/MoviesLogo.png'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { GetAllMovies, GetMoviesSearch } from './redux/action/MoviesActions';

function NavScroll() {
  
  const [PageCount,PageCountState]= useState(0);

  const dispatch=useDispatch();

  

  // =====================Seacrch API filter =========================

  const OnSearch= async (Result)=>{
   
    if(Result===""||Result===" "){
      dispatch(GetAllMovies());
      // console.log(TopRated.data.results)
     
     PageCountState(GetMoviesSearch(Result));
      console.log(PageCount);
    }
    else{
      dispatch(GetMoviesSearch(Result))
      // console.log(TopRated.data.results)
     
      // PageCountState(PopularVar.data.total_pages);

    }


   
  }
  
//================================= On change ===========================
  
  const Search=(SearchResult)=>{
    // e.preventDefault()
    OnSearch(SearchResult);
  
    window.scrollTo(0, 500);
   
  }

  return (

  
    <div className="bgColor">
    <Navbar  expand="lg" style={{backgroundColor:'#141414'}}>
      <Container fluid>
        <Navbar.Brand href="#"><NavLink to='/'><img src={MoviesLogo} alt='not found' id='Logoimage'/></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" > <img src={menu} alt='not found' id='NavToggle' /></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-5 my-2 my-lg-5"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="بحث عن إسم الفلم"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>Search(e.target.value)}
             style={{'width':'800px'}}
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
 
</div>
  );
}

export default NavScroll;