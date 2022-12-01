

import {allMovies} from '../types/MoviesType'


// 2- Create Reducer
export const moviesReducer=(state={movies:[],pageC:0},actions)=>{
   
     switch(actions.type){

        case allMovies :
            return{movies:actions.data,pageC:actions.pages}

        default:
            return state;

     }

}