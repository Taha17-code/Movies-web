
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

  const dispatch=useDispatch();
  

  const [TopRated,TopRatedState]= useState([]);

  const [Popular,popularState]= useState([]);

  const [PageCount,PageCountState]= useState(0);



//Get Top rated movies
  const GetTopRated= async ()=>{
    const TopRated= await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=a3bc77df23b1530fd313b52e56d03260&language=ar&page=1')
    // console.log(TopRated.data.results)
    TopRatedState(TopRated.data.results)
   
    
    // console.log(TopRated.data.results)
  }



   // Get most Popular movies

 

  const GetMostPopular= async ()=>{
    const Popular= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a3bc77df23b1530fd313b52e56d03260&language=ar&page=1')
    // console.log(TopRated.data.results)
    popularState(Popular.data.results)
    PageCountState(Popular.data.total_pages);
    console.log(Popular.data.total_pages);
   
    
    // console.log(TopRated.data.results)
  }


  useEffect(()=>{
    dispatch(GetAllMovies())
    GetMostPopular();
    GetTopRated();
    // 
    
  },[])

  const OnSearch= async (Result)=>{
   
    if(Result===""||Result===" "){
      const Popular= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a3bc77df23b1530fd313b52e56d03260&language=ar&page=1')
      // console.log(TopRated.data.results)
      popularState(Popular.data.results)
      PageCountState(Popular.data.total_pages);
      console.log(PageCount);
    }
    else{
      const PopularVar= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a3bc77df23b1530fd313b52e56d03260&&query=${Result}&language=ar&page=1&include_adult=false`);
      // console.log(TopRated.data.results)
      popularState(PopularVar.data.results)
      PageCountState(PopularVar.data.total_pages);

    }

    

 
 
   
  }
  

  const GetPageNum=async(pageNum)=>{ 

    const Popular= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a3bc77df23b1530fd313b52e56d03260&language=ar&page=${pageNum}`)
    // console.log(TopRated.data.results)
    popularState(Popular.data.results)
    PageCountState(Popular.data.total_pages);

  }


  
  return (
    <Fragment>
    <NavScroll OnSearch={OnSearch} Popular={Popular}/>
   <div className='continr' >
   
   
   <Routes>

   <Route  path='/' element={<Fragment>
   
    <HighestRated TopRated={TopRated}/>
    <MoviesDisply Popular={Popular} GetPageNum={GetPageNum} PageCount={PageCount} />
  
    </Fragment> }/>

 


   <Route path='/MovieDetails/:id' element={<MovieDetails/>} />
   
   
   
   </Routes>
    </div>
   
    </Fragment>
  );
}

export default App;
