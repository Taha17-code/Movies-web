
import axios from "axios";
import {allMovies} from '../types/MoviesType'

   // Get most Popular movies


 export  const GetAllMovies=()=>{

  const Popular=  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a3bc77df23b1530fd313b52e56d03260&language=ar&page=1')

    return{
        type:allMovies,
        data:Popular.data.results,
        pageCount:Popular.data.total_pages
    }

  }
