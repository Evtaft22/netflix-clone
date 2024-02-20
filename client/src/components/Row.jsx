import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from '../services/axios'; // the variable "instance" was exported as default, so we rename it when we import it here
import '../styles/Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // If [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(title, request);
      return request.data.results;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '640', // 100%
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      console.log('movie.name: ', movie.name);
      movieTrailer(movie?.name || movie?.title || movie?.original_title || '')
      // movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log('url: ', url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log('urlParams: ', urlParams);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log('THIS IS YOUR ERROR: ', error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
