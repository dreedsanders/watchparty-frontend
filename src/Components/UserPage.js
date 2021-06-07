import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import FootBar from "./FootBar"
import MainConHeader from "./MainConHeader"

function UserPage(props) {
  let history = useHistory()
  let dispatch = useDispatch()
  let current_user = useSelector((state) => state.userState.current_user);
  let backendmovies = useSelector((state) => state.movieState.backendmovies)[0];
  let reviews = useSelector((state) => state.movieState.reviews);
  let current_user_reviews = reviews.map((reviewlist) =>
    reviewlist.filter((review) => review.user_id === current_user.id)
  )[0];
  let actualreviews = current_user_reviews.map((review) => review.review);
  let actualreviewedmovies = current_user_reviews.map(
    (review) => review.movie_id
  )[0];
  let movie = backendmovies.filter(
    (movie) => movie.id === actualreviewedmovies
  );
  let moviewatches = useSelector((state) => state.movieState.moviewatches)[0];
  let currentmovies = moviewatches.filter(
    (watches) => watches.user_id === current_user.id
  );

  let handleClick = (e, moviewatch) => {
    e.preventDefault();
    let reqPack = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    fetch(
      `http://localhost:3000/api/v1/movie_watches/${moviewatch.id}`,
      reqPack
    ).then(props.getMovieWatches);
  };

  // let taketoshow = (e, moviewatch) => {
  //   e.preventDefault()
  //   movie = backendmovies.find(
  //     (selectmovie) => selectmovie.id === moviewatch.movie_id);
  //     dispatch({type: "CLICKED", currentMovie: movie})
  // }

  let handleMovieClick = (moviewatch) => {
    movie = backendmovies.find((selectmovie) => selectmovie.id === moviewatch.movie_id);
    dispatch({ type: "CLICKED", currentMovie: movie });
    history.push("/movieshow");
  };

  return (
    <div>
      <div>
        <MainConHeader />
        <br></br>
        <br></br>
        <MainNavBar />
      </div>
      <div className="usrinfo">
        <div>
          <h1 className="neonText">{current_user.name}</h1>
          <br></br>
          <img
            src={current_user.profile_picture}
            style={{ width: "100px" }}
            alt="profile pic"
          ></img>
          <br></br>
          <h5 style={{ color: "ivory" }}>{current_user.email}</h5>
          <br></br>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "red" }}
            onClick={(e) => props.handleSignOut(e, history)}
          >
            Sign Out
          </button>
          <Link
            to="/editprofile"
            className="btn btn-primary"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Edit Account
          </Link>
        </div>
        <br></br>
        <div>
          <h3 style={{ color: "ivory" }}>Reviews</h3>
          <ul>
            {actualreviews.length > 0 ? (
              actualreviews.map((review) => (
                <li style={{ color: "ivory" }}>
                  {" "}
                  Movie:
                  {movie[0].title} - "{review}"
                </li>
              ))
            ) : (
              <h4 style={{ color: "magenta" }}>Go leave your first review!</h4>
            )}
          </ul>
        </div>
      </div>
      <br></br>
      <h3 style={{ color: "ivory" }}>Watchlist</h3>
      <div className="profcard">
        {currentmovies.length > 0 ? (
          currentmovies.map((moviewatch) => (
            <li>
              <img
                onClick={() => handleMovieClick(moviewatch)}
                alt="movie poster"
                src={
                  backendmovies.find(
                    (selectmovie) => selectmovie.id === moviewatch.movie_id
                  ).poster
                }
              ></img>{" "}
              <h5 style={{ color: "ivory" }}>
                {
                  backendmovies.find(
                    (selectmovie) => selectmovie.id === moviewatch.movie_id
                  ).title
                }
              </h5>
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "black" }}
                onClick={(e) => handleClick(e, moviewatch)}
              >
                Remove from Watchlist
              </button>
              <br></br>
            </li>
          ))
        ) : (
          <h4 style={{ color: "ivory" }}>Go add a movie!</h4>
        )}
      </div>
      <div>
        <FootBar />
      </div>
    </div>
  );
}
export default UserPage;
