
import axios from 'axios';
import React,{ Fragment, useEffect ,useState,createContext} from 'react';
import {Routes,Route} from 'react-router-dom'
import { Container, Pagination } from 'react-bootstrap';
import './App.css';
import NavScroll from './Header';
import HighestRated from './HighestRated';
import MoviesDisply from './MoviesDisply';
import PaginationPage from './PaginationPage';
import MovieDetails from './MovieDetails';
import {GetAllMovies} from './redux/action/MoviesActions';
import {useDispatch,useSelector} from 'react-redux';

function App() {


  return (
    <Fragment>
    <NavScroll  />
   <div className='continr' >
   
   
   <Routes>

   <Route  path='/' element={<Fragment>
   
    <HighestRated />
    <MoviesDisply />
  
    </Fragment> }/>

   <Route path='/MovieDetails/:id' element={<MovieDetails/>} />
   
   
   
   </Routes>
    </div>
   
    </Fragment>
  );
}

export default App;
