import axios from "./axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row text-white">
      <h2>{title}</h2>
      {movies.map(movie => (
          <img src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
          }`} alt={movie.name}/>
      ))}
    </div>
  );
}

export default Row;
