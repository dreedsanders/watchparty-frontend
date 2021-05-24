import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainConHeader from "../Components/MainConHeader";
import MainNavBar from "../Components/MainNavBar";
import MovieList from "../Components/MovieList";
import SearchBar from "../Components/SearchBar"
import VideoClip from "../Components/VideoClip"


function MainContainer(props) {
  const logged_in = useSelector((state) => state.userState.logged_in);
 

  return (
    <Router>
      <Switch>
      <div className="contain">
        <MainConHeader />
        <MainNavBar handleSignOut={props.handleSignOut} handleEditUser={props.handleEditUser} />
        <SearchBar />
        <VideoClip />
            <MovieList />
          {!logged_in ? props.history.push("/signin") : null}
        </div>
      </Switch>
    </Router>
  );
}
export default MainContainer;
