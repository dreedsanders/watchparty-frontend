import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

const MovieCard = (props) => {
  let dispatch = useDispatch();
  let history = useHistory()

  let handleMovieClick = (e) => {
    dispatch({ type: "CLICKED", currentMovie: props.movie });
    history.push("/movieshow")
  };

  return (
    <div onClick={(e) => handleMovieClick(e)} className="card">
      <img
        src={props.movie.poster}
        style={{ width: "200px", height: "200px" }}
        alt=""
      ></img>
      <h1>
        {props.movie.title}
        <br></br>
        {props.movie.year}
        <br></br>
        <br></br>
      </h1>
    </div>
  );
};

export default MovieCard;
