import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Components/MovieCard";
import MovieShow from "../Components/MovieShow";

function MovieList() {
  const movies = useSelector((state) => state.movieState.backendmovies[0]);
  const filtered = useSelector((state) => state.movieState.filtered);
  const filtering = useSelector((state) => state.movieState.filtering);
  let clicked = useSelector((state) => state.movieState.clicked);

  return (
    <div className="center-panel">
      {!filtering
        ? movies.map((movie) => <MovieCard movie={movie} />).sort()
        : filtered.map((movie) => <MovieCard movie={movie} />).sort()}
    </div>
  );
}
export default MovieList;
