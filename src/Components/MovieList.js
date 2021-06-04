import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Components/MovieCard";


function MovieList() {
  const movies = useSelector((state) => state.movieState.backendmovies[0]);
  const filtered = useSelector((state) => state.movieState.filtered);
  const filtering = useSelector((state) => state.movieState.filtering);


  return (
    <div className="center-panel">
      {!filtering
        ? movies
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
            .sort()
        : filtered
            .map((movie) => <MovieCard movie={movie} key={movie.id} />)
            .sort()}
    </div>
  );
}
export default MovieList;
