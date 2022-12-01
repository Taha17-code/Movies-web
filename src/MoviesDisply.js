import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import NotFound from './images/error-404.png'
// import { Row,Col, Card } from 'react-bootstrap'
import './MoviesDisply.css'
import PaginationPage from './PaginationPage'
import { GetAllMovies } from './redux/action/MoviesActions'


const MoviesDisply = () => {



  const [Popular,popularState]= useState([]);

     // Get most Popular movies
     const dataSelector=useSelector((state)=>state.movies)
     


  const dispatch=useDispatch();

  
  useEffect(()=>{
    dispatch(GetAllMovies());

    
  },[])


  useEffect(()=>{  
    popularState(dataSelector)
  },[dataSelector])
  


  return (
    <Fragment>
   
    <div className='homeBgClr' >
    <h3 className='titleP' style={{color:'#2fecd8'}}> جميع الأفلام </h3>
   
    
    
    <div  sm='6' md='6' lg='12' className='fatherFlex'>
    
    {
      
      Popular.length>=1?( Popular.map((item,key)=>{

        return(<div   className='card mx-4   chidlFlex' key={key}>
        
        <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='AllMoviesImage' alt='./images/error-404.png' />
        <Link to={`/MovieDetails/${item.id}`} >
        <div className='card__overlay'>
        <div className='overlay__text text-center w-100 p-2'>
  
        <p>اسم الفلم:{item.title}</p>
        <p>تاريخ الإصدار :{item.release_date}</p>
        <p>عدد المقيمين :{item.vote_count} </p>
        <p>التقييم:{item.vote_average}</p>
        </div>
    
        </div>
        </Link>
    
       </div>
        )

      })):<h2 className='NotFoundMovies'>لاتوجد أفلام...</h2>
        
    }
 


    </div>


{Popular.length>=1?( <PaginationPage />):null}
   


    </div>
    </Fragment>
  )
}

export default MoviesDisply
