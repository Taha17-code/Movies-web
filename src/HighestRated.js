import React, { useEffect, useState } from 'react'
import { Row ,Col } from 'react-bootstrap'
import './HighestRated.css';
import { MdArrowRight,MdArrowLeft } from "react-icons/md";
import axios from 'axios';


const HighestRated = () => {


  const [TopRated,TopRatedState]= useState([]);

  
  useEffect(()=>{

   
    GetTopRated();
    // 
    
  },[])


//Get Top rated movies
  const GetTopRated= async ()=>{
    const TopRated= await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=a3bc77df23b1530fd313b52e56d03260&language=ar&page=1')
    // console.log(TopRated.data.results)
    TopRatedState(TopRated.data.results)
   
    
    // console.log(TopRated.data.results)
  }




  // console.log(TopRated);
const MoveRight=()=>{
  let slide=document.getElementById('Slider');
  slide.scrollLeft=slide.scrollLeft+500;
}

const MoveLeft=()=>{
  let slide=document.getElementById('Slider');
  slide.scrollLeft=slide.scrollLeft-500;
}

  return (
    <div style={{'marginTop':'150px'}}>
    <h3 className='titleP mt-4' style={{color:'#2fecd8'}}>الأعلى تقييم </h3>
    
     <div    className='FatherFlex'>
    
     <MdArrowRight size={70} className='arrowScroll' onClick={MoveRight}/>
     
<div  id='Slider'  className='ParentBoxes  scrollbar-hide ' >

{TopRated.length>=1 ?  (TopRated.map((item,key)=>{

 return(
  <div   className='card mx-4   childFlex' key={key}>
  <img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} alt='not found' />
  
  <div className='card__overlay'>
  <div className='overlay__text text-center w-100 p-2'>
  
  <p>اسم الفلم:{item.original_title}</p>
  <p>تاريخ الإصدار :{item.release_date}</p>
  <p>عدد المقيمين :{item.vote_count} </p>
  <p>التقييم:{item.vote_average}</p>
  </div>
  
  </div>
  
  </div>
 )
})): <h2>لا توجد أفلام </h2>}





</div>
 
<MdArrowLeft size={70} className='arrowScroll' onClick={MoveLeft}/>
   </div> 
 
     
    </div>
  )
}

export default HighestRated


