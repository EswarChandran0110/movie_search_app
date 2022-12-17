import { useState,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const Api = 'http://www.omdbapi.com?apikey=c032e2d7';
// const movie1 ={
//   "Title": "Amazing Spiderman Syndrome",
//   "Year": "2012",
//   "imdbID": "tt2586634",
//   "Type": "movie",
//   "Poster": "N/A"
// };

function App() {

  const [movies,setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const searchMovies = async (title) => {
      const response = await fetch(`${Api}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('movies')
  },[])

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
        placeholder="search for movies"
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt="Search"
        onClick={()=>searchMovies(searchTerm)}/>
      </div>
         
         {movies.length > 0 
          ? (
            <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie2={movie}/>
            ) )}
         </div>
          ) : (
            <div className='empty'> 
             <h2>No movies found</h2>
            </div>
          )}
     
    </div>
  );
}

export default App;
