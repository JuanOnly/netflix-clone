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
    <div className="row text-white ml-10 ">
      <h2 className={`pl-5 font-bold text-2xl ${isLargeRow && "pt-10"}`}>{title}</h2>
      
      <div className="row_posters scrollbar-hide flex overflow-y-hidden overflow-x-scroll pl-5 pb-14 pt-5">
        
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row_poster max-h-28 rounded object-contain mr-2 w-full transition transform hover:scale-110 delay-300 ${
                  isLargeRow && "row_posterLarge max-h-80"
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
