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
import LinkBar from "../Components/LinkBar"

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
            <br></br>
            <LinkBar />
            <br></br>
          <MainNavBar
            handleSignOut={props.handleSignOut}
            handleEditUser={props.handleEditUser}
            getMovieWatches={props.getMovieWatches}
            />
            <SearchBar />
            <br></br>
          <VideoClip />
          <VideoClip2 />
            <VideoClip3 />
            <br></br>
            <br></br>
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
            <br></br>
            <img
              src="https://lh3.googleusercontent.com/proxy/dyUIkOSS-LhIgVilahAdiin9BVIDbs50RE6yozCfmIVKs20Q2cDMWVRD8RUGL9iAQS2mN-ut1rjc6vCyd7O_Jsn61A"
              style={{
                height: "50px",
              }}
            ></img>
          </h5>
          <MovieList />
          {!logged_in ? props.history.push("/signin") : null}
        </div>
      )}
    </>
  );
}
export default MainContainer;
