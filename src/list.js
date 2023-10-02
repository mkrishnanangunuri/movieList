import React, { useEffect, useState } from 'react';
import './list.css';
import { Link } from 'react-router-dom';
import Company from './company'; // Assuming you have a Company component

function MovieList() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint and request parameters
    const apiUrl = 'https://hoblist.com/api/movieList';
    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: 'movies',
        language: 'kannada',
        genre: 'comedy',
        sort: 'voting',
      }),
    };

    // Make the API request
    fetch(apiUrl, requestData)
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 id="movie-heading">Telugu Movies List</h2>
      <Link to="/Company" id="company-link">Company Info</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
            
          {movieData.map((movie) => (
            <li key={movie.poster} style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  width="100"
                  height="120"
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <strong style={{ fontSize: '25px', fontFamily: 'revert' }}>{movie.title}</strong>
                <br />
                <strong style={{ color: 'grey' }}>Genre:</strong> {movie.genre}
                <br />
                <strong style={{ color: 'grey' }}>Director:</strong> {movie.director}
                <br />
                <strong style={{ color: 'grey' }}>Starring:</strong> {movie.stars}
                <br />
                <strong style={{ color: 'black', fontSize: '12px' }}> {movie.runTime} Mins | {movie.language} | {movie.releasedDate}</strong>
                <br />
                <strong style={{ color: '#1E90FF', fontSize: '13px' }}> {movie.pageViews} Views | Voted by {movie.totalVoted} People </strong>
                <br />
                <button className="button" style={{ width: '500px', marginTop: '10px', backgroundColor: "Blue" }}>Watch Trailer</button> {/* Adjust button style */}
              </div>
              <div style={{ marginLeft: '20px' }}>
                
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieList;
