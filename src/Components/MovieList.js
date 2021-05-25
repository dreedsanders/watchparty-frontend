import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Components/MovieCard";
import MovieShow from "../Components/MovieShow";

function MovieList() {
  const movies = useSelector((state) => state.movieState.backendmovies[0]);
  const filtered = useSelector((state) => state.movieState.filtered)
  // const movie_imgs = useSelector((state) => state.movieState.movieimgs);
  const filtering = useSelector((state) => state.movieState.filtering);
  let clicked = useSelector((state) => state.movieState.clicked);

  // console.log(movies)
  
    
    return (
      <div className="center-panel">
        <h5>Click each to View Movie</h5>
        {clicked ? <MovieShow /> : null}

        {!filtering
          ? movies.map((movie) => <MovieCard movie={movie} />)
          : filtered.map((movie) => <MovieCard movie={movie} />)}
      </div>
    );
}
export default MovieList