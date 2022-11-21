

import {allMovies} from '../types/MoviesType'

 const initialValue={movies:[],pageCount:0}
// 2- Create Reducer
export const moviesReducer=(state=initialValue,actions)=>{
   
     switch(actions.type){

        case allMovies :
            return{movies:actions.data}

        default:
            return state;

     }

}