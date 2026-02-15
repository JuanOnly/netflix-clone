import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./Requests";

function Banner({ onMovieClick }) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const movies = request.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching banner:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const handlePlay = () => {
    if (movie) {
      onMovieClick(movie);
    }
  };

  if (loading) {
    return (
      <div className="banner skeleton" style={{ height: '80vh' }}>
        <div className="banner__contents">
          <div className="skeleton" style={{ width: '200px', height: '40px', marginBottom: '15px' }}></div>
          <div className="skeleton" style={{ width: '300px', height: '20px', marginBottom: '10px' }}></div>
          <div className="skeleton" style={{ width: '250px', height: '20px' }}></div>
        </div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie?.poster_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button 
            className="banner__button banner__button--play"
            onClick={handlePlay}
          >
            <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>▶</span>
            Play
          </button>
          <button className="banner__button">
            <span style={{ marginRight: '8px', fontSize: '1.2rem' }}>ℹ</span>
            More Info
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
