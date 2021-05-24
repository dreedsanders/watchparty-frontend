import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Components/MovieCard";

function MovieList() {
  const movies = useSelector((state) => state.movieState.movies);
  const filtered = useSelector((state) => state.movieState.filtered)
  const movie_imgs = useSelector((state) => state.movieState.movieimgs);
   const filtering = useSelector((state) => state.movieState.filtering);
    
    return (
      <div className="center-panel">
        {!filtering
          ? movies.map((movie) => (
              <MovieCard
                movie={movie}
                movieimg={movie_imgs.filter(
                  (img) => img.IMDB === movie.imdb_id
                )}
              />
            ))
          : filtered.map((movie) => (
              <MovieCard
                movie={movie}
                movieimg={movie_imgs.filter(
                  (img) => img.IMDB === movie.imdb_id
                )}
              />
            ))}
      </div>
    );
}
export default MovieList