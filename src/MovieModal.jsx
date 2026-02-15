import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./Requests";

function MovieModal({ movie, onClose }) {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSimilar() {
      if (!movie?.id) return;
      
      try {
        const request = await axios.get(
          `/movie/${movie.id}/similar?api_key=${requests.apiKey}`
        );
        setSimilarMovies(request.data.results?.slice(0, 6) || []);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchSimilar();
  }, [movie?.id]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!movie) return null;

  const base_url = "https://image.tmdb.org/t/p/original/";
  const rating = movie.vote_average ? Math.round(movie.vote_average * 10) : null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>×</button>
        
        <div 
          className="modal__backdrop"
          style={{
            backgroundImage: `url(${base_url}${movie.backdrop_path || movie.poster_path})`
          }}
        />
        
        <div className="modal__info">
          <h1 className="modal__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          
          <div className="modal__meta">
            {rating && (
              <span className="modal__rating">{rating}% Match</span>
            )}
            <span>{movie.release_date?.split("-")[0] || movie.first_air_date?.split("-")[0]}</span>
            {movie.adult && <span style={{ border: '1px solid #666', padding: '0 4px', fontSize: '0.7rem' }}>18+</span>}
            <span>HD</span>
          </div>
          
          <div className="modal__actions">
            <button className="modal__actionBtn modal__actionBtn--primary">
              <span style={{ fontSize: '1.2rem' }}>▶</span> Play
            </button>
            <button className="modal__actionBtn modal__actionBtn--secondary">
              <span style={{ fontSize: '1.2rem' }}>+</span> Add to List
            </button>
          </div>
          
          <p className="modal__overview">
            {movie.overview || "No description available."}
          </p>

          {!loading && similarMovies.length > 0 && (
            <div style={{ marginTop: '30px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', fontWeight: '600' }}>
                More Like This
              </h3>
              <div className="row__posters" style={{ padding: 0 }}>
                {similarMovies.map((simMovie) => (
                  <img
                    key={simMovie.id}
                    className="row__poster"
                    src={`${base_url}${simMovie.poster_path || simMovie.backdrop_path}`}
                    alt={simMovie.title}
                    style={{ width: '140px', height: '210px' }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
