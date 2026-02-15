import axios from "./axios";
import React, { useEffect, useState, useRef } from "react";

function Row({ title, fetchURL, isLargeRow = false, onMovieClick, filterGenre }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef(null);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const request = await axios.get(fetchURL);
        setMovies(request.data.results || []);
      } catch (error) {
        console.error("Error fetching row:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchURL]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredMovies = filterGenre
    ? movies.filter(movie => 
        movie.genre_ids?.includes(parseInt(filterGenre)) ||
        movie.genre_ids?.includes(filterGenre)
      )
    : movies;

  const handleMovieClick = (movie) => {
    if (onMovieClick) {
      onMovieClick(movie);
    }
  };

  const renderSkeletons = () => {
    const skeletonCount = isLargeRow ? 8 : 12;
    return Array.from({ length: skeletonCount }).map((_, index) => (
      <div
        key={`skeleton-${index}`}
        className={`skeleton ${isLargeRow ? 'skeleton__posterLarge' : 'skeleton__poster'}`}
        style={{ 
          width: isLargeRow ? '200px' : '150px', 
          height: isLargeRow ? '300px' : '225px',
          marginRight: '10px',
          animationDelay: `${index * 0.05}s`
        }}
      />
    ));
  };

  return (
    <div className="row" ref={rowRef}>
      <h2 className="row__title">{title}</h2>
      
      <div className="row__posters">
        {loading ? (
          renderSkeletons()
        ) : (
          filteredMovies.map((movie, index) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"} ${
                  isVisible ? "row--animate" : ""
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
                onClick={() => handleMovieClick(movie)}
                style={{
                  animationDelay: isVisible ? `${index * 0.05}s` : '0s',
                  opacity: isVisible ? undefined : 0
                }}
                loading="lazy"
              />
            )
          )
        )}
      </div>
    </div>
  );
}

export default Row;
