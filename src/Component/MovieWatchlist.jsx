import React, { useState } from 'react';
import './MovieWatchlist.css';

function MovieWatchlist() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState('');

  const addMovie = () => {
    if (newMovie) {
      setMovies([...movies, { name: newMovie, watched: false, like: null }]);
      setNewMovie('');
    }
  };

  const toggleWatched = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].watched = !updatedMovies[index].watched;
    updatedMovies[index].like = null;
    setMovies(updatedMovies);
  };

  const handleLike = (index, value) => {
    const updatedMovies = [...movies];
    updatedMovies[index].like = value;
    setMovies(updatedMovies);
  };

  const deleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Enter movie title"
      />
      <button onClick={addMovie}>Add</button>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <span onClick={() => toggleWatched(index)} className="watch-toggle">
              {movie.watched ? '✅' : '⬜'}
            </span>
            {movie.name}
            {movie.watched && (
              <div>
                <button
                  className={`like ${movie.like === 'like' ? 'active' : ''}`}
                  onClick={() => handleLike(index, 'like')}
                >
                  Like
                </button>
                <button
                  className={`dislike ${movie.like === 'dislike' ? 'active' : ''}`}
                  onClick={() => handleLike(index, 'dislike')}
                >
                  Dislike
                </button>
              </div>
            )}
            <button onClick={() => deleteMovie(index)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieWatchlist;