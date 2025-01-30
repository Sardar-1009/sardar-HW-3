import React, { useState } from 'react';
import './MovieWatchlist.css';

function MovieWatchlist() {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState('');

  function addMovie(event) {
    event.preventDefault();
    
    if (movieInput === '') {
      return;
    }

    setMovies([...movies, movieInput]);
    setMovieInput('');
  }

  function deleteMovie(indexToDelete) {
    const newMovies = movies.filter((_, index) => index !== indexToDelete);
    setMovies(newMovies);
  }

  return (
    <div className="watchlist">
      {/* Form to add new movies */}
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieInput}
          onChange={(event) => setMovieInput(event.target.value)}
          placeholder="Enter movie name..."
        />
        <button type="submit">Add</button>
      </form>

      {}
      <h3>To watch list:</h3>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <span>{movie}</span>
            <button 
              onClick={() => deleteMovie(index)}
              className="delete-button"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieWatchlist;