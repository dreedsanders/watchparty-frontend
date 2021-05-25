import React, { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const MovieCard = (props) => {
  let dispatch = useDispatch();
  let clicked = useSelector((state) => state.movieState.clicked);

  let handleMovieClick = (e) => {
    e.preventDefault();
    console.log(props.movie);
    dispatch({ type: "CLICKED", currentMovie: props.movie });
  };

  return (
    <div
      // style={{ backgroundColor: "green" }}
      onClick={(e) => handleMovieClick(e)}
    >
      <img
        src={props.movie.poster}
        style={{ width: "200px", height: "200px" }}
        alt=""
      ></img>
      <h1>
        {props.movie.title}:{props.movie.year}
        <br></br>
        <button className="btn btn-primary">Like 🤍 {props.movie.likes} likes</button>
        <button className="btn btn-primary">Add To Watchlist</button>
        <br></br>
      </h1>
      {/* <h5> 🎥 Trailer 🎞</h5> */}
      {/* <YoutubeEmbed embedId={props.movie.youtube_trailer_key} /> */}
    </div>
  );
};

export default MovieCard;
