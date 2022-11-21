import axios from 'axios'
import React, { Fragment, useState ,useEffect} from 'react'

import { Row ,Col} from 'react-bootstrap'
import { Link ,useParams} from 'react-router-dom'
import './MovieDetails.css'
import NotFound from './images/error-404.png'


const MovieDetails = () => {

const[movieDetails,movieDetailsState]=useState([]);
  const parm=useParams();

  const GetMovieDetails =async()=>{
    const movie= await axios.get(`https://api.themoviedb.org/3/movie/${parm}?api_key=a3bc77df23b1530fd313b52e56d03260&language=ar`)
    movieDetailsState(movie.data);
  }
  
  // to run when component create
  useEffect(()=>{
    
    GetMovieDetails();
    
  },[])
  return (
    <Fragment>
    <div className='styleDetais'>
    
    <Row  className='w-100 d-flex justify-content-center'>
      <Col sm='5'> <img src={'https://image.tmdb.org/t/p/w500/'+movieDetails.poster_path  } className='imageD' alt={NotFound}/>  </Col>
      <Col sm='7' className=' '  >  

      <div className='detailsContent'>
      <p className='card-text-details  ' style={{'color':'whitesmoke'}}>
       إسم الفيلم : {movieDetails.title}
      </p>



      <p className='card-text-details  ' style={{'color':'whitesmoke'}}>
       تاريخ الفلم: {movieDetails.release_date}
      </p>


      

      <p className='card-text-details  ' style={{'color':'whitesmoke'}}>
      التقييم: {movieDetails.vote_average}
      </p>

    

      </div>


      <div className='w-100 Story'>
    <p>القصة:</p>
    <p style={{'fontWeight':'normal', 'fontSize':'15px'}}>{movieDetails.overview} </p>
    </div>


      
      </Col>

    </Row>



    </div>

    

    <div className='butns'>
   
    <Link to='/'> <button>  العودة للرئيسية   </button></Link>
    <a href={movieDetails.homepage}>
    <button>مشاهدة الفلم</button>
    </a>
    </div>

    </Fragment>
  )
}

export default MovieDetails
