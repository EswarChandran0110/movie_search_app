import React from 'react'

function MovieCard({movie2}) {
  return (
   
     <div className='movie'>
       <div>
       <p>{movie2.Year}</p>
       </div>
             
      <div>
       <img 
       src={movie2.Poster !== 'N/A' ? movie2.Poster : 'https://via.placeholder.com/400'}
       alt={movie2.Title}/>
      </div>
      <div>
       <span>{movie2.Type}</span>
       <h3>{movie2.Title}</h3>
      </div>
   </div>
    
  )
}

export default MovieCard