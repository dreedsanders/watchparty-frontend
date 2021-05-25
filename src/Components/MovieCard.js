import React from "react";
import { useDispatch } from "react-redux";

const MovieCard = (props) => {
  let dispatch = useDispatch();

  let handleMovieClick = (e) => {
    e.preventDefault();
    dispatch({ type: "CLICKED", currentMovie: props.movie });
  };

  return (
    <div onClick={(e) => handleMovieClick(e)}>
      <img
        src={props.movie.poster}
        style={{ width: "200px", height: "200px" }}
        alt=""
      ></img>
      <h1>
        {props.movie.title}:{props.movie.year}
        <br></br>
        <h5> 🤍 {props.movie.likes} likes 🤍 </h5>
        <br></br>
      </h1>
    </div>
  );
};

export default MovieCard;
