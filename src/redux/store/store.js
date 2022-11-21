import { legacy_createStore as createStore ,applyMiddleware} from 'redux'
import {moviesReducer} from '../reducer/movieReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// to insert a Middleware in between which would help to handle async operations.
import thunk from "redux-thunk" ;


// 1- create Store
export const store= createStore(moviesReducer,applyMiddleware(thunk));