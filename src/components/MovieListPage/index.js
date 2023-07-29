// MovieList.js
import React, { useEffect, useState } from 'react';
import "./index.css"
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Make a POST request to fetch movie data from the API

    //info is object about detials you have asked
      const info={category: "movies",

      language: "kannada", genre: "all",
      sort: "voting",}

      const option={
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(info),    //make it string format
      }
      fetch("https://hoblist.com/api/movieList",option)
     .then((response)=>response.json()).then((data)=>{
      setMovies(data.result)  // setting movie details into movies 
      console.log(data.result)})
     .catch((error) => console.error('Error:', error))
          
  }, []);

  return (
    <div className='full'>
      
      <ul>
        {movies.map((movie) => (
          <li key={movie._id} className='movie-con'>
            <div className="poster-details-con">
              <div className='arrow-con'>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1024px-Red_Arrow_Down.svg.png" className='arrow' alt="arrow"/>
                 <p  className='votes'> {movie.totalVoted} +</p>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_Arrow_Up.svg/1200px-Red_Arrow_Up.svg.png" className='arrow' alt="arrow"/>
                <p className='votes'>Votes</p>
            </div>
                 <img src={movie.poster} alt="movie poster" className="poster"/>
           
               <div className='con'>
                <p className='title'>Title: <span>{movie.title} </span></p>
              
                <p className='genre'>Genre: <span>{movie.genre}</span></p>
                <p className='starring'>Starring: <span> {movie.stars}</span></p>
                <p className='min'>Min | {movie.language}  </p>
                <p className='view'>  Viewed by {movie.pageViews} People</p>
                
                </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
