import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

// import { Row,Col, Card } from 'react-bootstrap'
import './MoviesDisply.css'
import PaginationPage from './PaginationPage'


const MoviesDisply = ({Popular,GetPageNum,PageCount}) => {


  return (
    <Fragment>
   
    <div className='homeBgClr' >
    <h3 className='titleP' style={{color:'#2fecd8'}}> جميع الأفلام </h3>
   
    
    
    <div  sm='6' md='6' lg='12' className='fatherFlex'>
    
    {
      
      Popular.length>=1?( Popular.map((item,key)=>{

        return(<div   className='card mx-4   chidlFlex' key={key}>
        
        <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='AllMoviesImage' alt='not found' />
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


{Popular.length>=1?( <PaginationPage  GetPageNum={GetPageNum}  PageCount={PageCount}/>):null}
   


    </div>
    </Fragment>
  )
}

export default MoviesDisply
