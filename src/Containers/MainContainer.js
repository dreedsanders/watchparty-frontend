import React from "react";
import { useSelector } from "react-redux";
import MainConHeader from "../Components/MainConHeader";
import MainNavBar from "../Components/MainNavBar";
import MovieList from "../Components/MovieList";
import SearchBar from "../Components/SearchBar";
import VideoClip from "../Components/VideoClip";
import VideoClip2 from "../Components/VideoClip2";
import VideoClip3 from "../Components/VideoClip3";
import MovieShow from "../Components/MovieShow";

function MainContainer(props) {
  let clicked = useSelector((state) => state.movieState.clicked);
  const logged_in = useSelector((state) => state.userState.logged_in);

  return (
    <>
      {clicked ? (
        <MovieShow
          getResponses={props.getResponses}
          getMoviesfromBack={props.getMoviesfromBack}
          getMovieWatches={props.getMovieWatches}
        />
      ) : (
        <div className="contain">
          <MainConHeader />
          <MainNavBar
            handleSignOut={props.handleSignOut}
            handleEditUser={props.handleEditUser}
            getMovieWatches={props.getMovieWatches}
          />
          <SearchBar />
          <div className="right=panel">
            <VideoClip />
            <VideoClip2 />
            <VideoClip3 />
          </div>
          <MovieList />
          {!logged_in ? props.history.push("/signin") : null}
        </div>
      )}
    </>
  );
}
export default MainContainer;
