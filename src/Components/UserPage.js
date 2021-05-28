import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

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

  let taketoshow = (e, moviewatch) => {
    e.preventDefault()
    movie = backendmovies.find(
      (selectmovie) => selectmovie.id === moviewatch.movie_id);
      dispatch({type: "CLICKED", currentMovie: movie})
  }

  return (
    <div>
      <h1 className="neonText">{current_user.name}</h1>
      <br></br>
      <img
        src={current_user.profile_picture}
        style={{ width: "100px" }}
        alt="profile pic"
      ></img>
      <br></br>
      <h5 style={{ color: "yellow" }}>{current_user.email}</h5>
      <br></br>
      <div>
        <label style={{ color: "yellow" }}>Reviews</label>
        <ul>
          {actualreviews.map((review) => (
            <li style={{ color: "yellow" }}>
              {" "}
              Movie:
              {movie[0].title} - "{review}"
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <h3 style={{ color: "yellow" }}>Watchlist</h3>
      <div>
        {currentmovies.map((moviewatch) => (
          <li onClick={(e) => taketoshow(e, moviewatch)}>
            <img
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
              onClick={(e) => handleClick(e, moviewatch)}
              style={{backgroundColor: "magenta"}}
            >
              Remove from Watchlist
            </button>
            <br></br>
          </li>
        ))}
      </div>

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
      <span></span>
    </div>
  );
}
export default UserPage;
