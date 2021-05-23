import React from "react";
import { useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainConHeader from "../Components/MainConHeader";
import MainNavBar from "../Components/MainNavBar";
import MovieList from "../Components/MovieList";
import SearchBar from "../Components/SearchBar"
import VideoClip from "../Components/VideoClip"
import UserPage from "../Components/UserPage"

function MainContainer(props) {
  const logged_in = useSelector((state) => state.userState.logged_in);

  return (
    <Router>
      <div className="contain">
        <MainConHeader />
        <MainNavBar handleSignOut={props.handleSignOut} />
        <SearchBar />
        <VideoClip />
        <Switch>
          <Route path="/users"></Route>
        </Switch>
      </div>
      <div>
        <div>
          <div className="center-panel">
            <MovieList />
            
            {!logged_in ? props.history.push("/signin") : null}
          </div>
        </div>
      </div>
    </Router>
  );
}
export default MainContainer;
