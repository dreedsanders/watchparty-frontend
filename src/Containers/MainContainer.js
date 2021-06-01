import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MainConHeader from "../Components/MainConHeader";
import MainNavBar from "../Components/MainNavBar";
import MovieList from "../Components/MovieList";
import SearchBar from "../Components/SearchBar";
import VideoClip from "../Components/VideoClip";
import FootBar from "../Components/FootBar";
import LowBar from "../Components/LowBar";
import useSound from "use-sound"
import boop from "../boop.mp3"
import {Howl, Howler } from "howler"

function MainContainer(props) {
  let history = useHistory();
  let dispatch = useDispatch();
  const logged_in = useSelector((state) => state.userState.logged_in);
  const movies = useSelector((state) => state.movieState.backendmovies[0]);


  const handleRandom = (props) => {
    let rand = movies[Math.floor(Math.random() * movies.length)];
    dispatch({ type: "RANDOM", currentMovie: rand });
    history.push("/movieshow");
  };

  return (
    <div className="maincontain">
      <MainConHeader />
      <br></br>
      <br></br>
      <MainNavBar
        handleSignOut={props.handleSignOut}
        handleEditUser={props.handleEditUser}
        getMovieWatches={props.getMovieWatches}
      />
      <VideoClip />
      <br></br>
      <SearchBar />
      <br></br>
      <div className="abovelist">
        <h5 className="neonText">
          <strong style={{ color: "white" }}>
            Click each to View Movie Card
          </strong>
          <br></br>
          <br></br>
          Where you can leave a review, respond to reviews,
          <br></br>
          add to your watchlist, and "like" each movie.
          <br></br>
          <span></span>
          <br></br>
          Click Popcorn for Random Movie
          <br></br>
          <span></span>
        </h5>
  <img
          src="https://pngimg.com/uploads/popcorn/popcorn_PNG41.png"
          style={{
            height: "80px",
            paddingBottom: "10px",
          }}
          onClick={(e) => handleRandom(e)}
        ></img>
      </div>
      <MovieList />

      {!logged_in ? props.history.push("/signin") : null}
      <FootBar />
    </div>
  );
}
export default MainContainer;
