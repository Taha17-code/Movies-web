
import axios from "axios";

import {allMovies} from '../types/MoviesType'

   // Get most Popular movies

   
 export  const GetAllMovies=()=>{



  return async (dispatch)=>{
    
    const Popular= await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=e5640f9ce1f851438fa483aede2abba8&language=ar&page=1')
    
    dispatch({  type:allMovies,data:Popular.data.results,pages:Popular.data.total_pages})
  
  }
   


  }


  

  
 export  const GetMoviesSearch=(Result)=>{

  return async (dispatch)=>{
    
    const PopularVar= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e5640f9ce1f851438fa483aede2abba8&&query=${Result}&language=ar&page=1&include_adult=false`);
    
    dispatch({  type:allMovies,data:PopularVar.data.results,pages:PopularVar.data.total_pages})
  
  }
  
   


  }



  export  const GetPageNum=(pageNum)=>{

    return async (dispatch)=>{
      
      const Popular= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e5640f9ce1f851438fa483aede2abba8&language=ar&page=${pageNum}`)
      console.log(Popular.data.total_pages)
      
      dispatch({  type:allMovies,data:Popular.data.results,pages:Popular.data.total_pages})
    
    }
    
     
  
  
    }
