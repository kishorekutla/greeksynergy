// MovieList.js
import React, { useEffect, useState } from 'react';
import "./index.css"
const MovieList = () => {

  const [movies, setMovies] = useState([]);
const defaultResponseHeaders = new Headers({
  "Server": "JSON-RPC 2.0 Server",
  "Allow": "OPTIONS, POST",
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=UTF-8",
  "Content-Language": "en-US",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
});

  useEffect(() => {
    // Make a POST request to fetch movie data from the API
    fetch('https://hoblist.com/api/movieList', {
      mode:'no-cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
         "Content-Type": "application/json",
      "Authorization": "Bearer 29fea2ddebd08ed73a0fe7952968ca60b9e56e678a367578825b6c4c8824d248",
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      }),
    })
    .then(function (response) {
      
      return response.json();
  
  }).then(data => {
        // Work with JSON data here
        console.log(data);
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
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
}

export default MovieList;
