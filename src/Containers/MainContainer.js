import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainConHeader from "../Components/MainConHeader";
import MainNavBar from "../Components/MainNavBar";
import MovieList from "../Components/MovieList";
import SearchBar from "../Components/SearchBar";
import VideoClip from "../Components/VideoClip";
import MovieShow from "../Components/MovieShow";


function MainContainer(props) {
  let clicked = useSelector((state) => state.movieState.clicked);
  const logged_in = useSelector((state) => state.userState.logged_in);

  return (
    <>
      {clicked ? (
        <MovieShow />
      ) : (
        <div className="contain">
          <MainConHeader />
          <MainNavBar
            handleSignOut={props.handleSignOut}
            handleEditUser={props.handleEditUser}
          />
          <SearchBar />
          <VideoClip />
          <MovieList />
          {!logged_in ? props.history.push("/signin") : null}
        </div>
      )}
      
    </>
  );
}
export default MainContainer;
