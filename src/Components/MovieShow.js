import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import MainConHeader from "../Components/MainConHeader";

function MovieShow(props) {
  let dispatch = useDispatch();
  let history = useHistory();

  let movie = useSelector((state) => state.movieState.currentMovie);
  let reviews = useSelector((state) => state.movieState.reviews[0]);

  let currentreviews = reviews.filter((review) => review.movie_id === movie.id);
  let users = useSelector((state) => state.userState.users);
  let currentuser = useSelector((state) => state.userState.current_user);
  let currentmovie = useSelector((state) => state.movieState.currentMovie);
  let moviewatches = useSelector((state) => state.movieState.moviewatches[0]);
  let currentwatches = moviewatches.filter(
    (watch) => watch.user_id === currentuser.id
  );
  let added = currentwatches.find(
    (watch) => watch.movie_id === currentmovie.id
  ); //returns array of booleans

  let likes = useSelector((state) => state.movieState.likes);
  let currentuserlikes = likes.filter(
    (like) => like.user_id === currentuser.id
  );
  let liked = currentuserlikes.find((like) => like.movie_id === movie.id);

  let handleRespond = (e, review) => {
    dispatch({ type: "GOTORESPOND", currentReview: review });
    history.push("/reply");
  };

  let handleLikes = (e) => {
    e.preventDefault();
    let newlike = {
      user_id: currentuser.id,
      movie_id: currentmovie.id,
    };
    let reqPack = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newlike),
    };
    fetch("http://localhost:3000/api/v1/likes", reqPack).then(props.getLikes);
  };

  let addWatchlist = (e) => {
    e.preventDefault();
    let newwatch = {
      movie_id: movie.id,
      user_id: currentuser.id,
    };
    let reqPack = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newwatch),
    };
    fetch("http://localhost:3000/api/v1/movie_watches", reqPack).then(
      props.getMovieWatches
    );
  };

  let handleRemovefromLiked = (e, liked) => {
    e.preventDefault();
    let reqPack = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    fetch(`http://localhost:3000/api/v1/likes/${liked.id}`, reqPack).then(
      props.getLikes
    );
  };

  let handleRemovefromWatchlist = (e, added) => {
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
      `http://localhost:3000/api/v1/movie_watches/${added.id}`,
      reqPack
    ).then(props.getMovieWatches);
  };

  const takeToReview = () => {
    history.push("/moviereview");
  };
  return (
    <div className="show">
      <div className="header">
        <MainConHeader />
        <br></br>
        <br></br>
        <MainNavBar />
      </div>
      <div className="beody">
        <div class="beodycolumn1">
          <div>
            <h1 style={{ color: "ivory" }}>{movie.title}</h1>
            <br></br>
            <img
              src={movie.fanart}
              className={"p-avatar"}
              alt=""
              style={{ height: "250px" }}
            ></img>
          </div>
          <br></br>
          <div>
            {" "}
            {liked ? (
              <>
                <button
                  style={{ backgroundColor: "black", color: "red" }}
                  onClick={(e) => {
                    handleRemovefromLiked(e, liked);
                  }}
                >
                  Unlike
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "black" }}
                onClick={(e) => handleLikes(e)}
              >
                Like 🍿
              </button>
            )}
            {added ? (
              <>
                <button
                  style={{ backgroundColor: "black", color: "red" }}
                  onClick={(e) => {
                    handleRemovefromWatchlist(e, added);
                  }}
                >
                  Remove from Watchlist
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "black" }}
                onClick={(e) => addWatchlist(e)}
              >
                Add To Watchlist
              </button>
            )}
            <br></br>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: "black" }}
              onClick={() => takeToReview()}
            >
              Leave a Review
            </button>
          </div>
        </div>
        <div className="beodycolumn1">
          {/* <button
            className="btn btn-primary"
            style={{ backgroundColor: "black" }}
            onClick={() => handleBacktoMovies()}
          >
            Back to Movies
          </button> */}
          <h3 style={{ color: "ivory" }}>
            🎬IMDB RATING | {movie.IMDB_rating}🎬
          </h3>
          <br></br>
          <h5 style={{ color: "ivory" }}>
            Directed by:
            <br></br>
            {movie.directors}
          </h5>
          <br></br>
          <h5 style={{ color: "ivory" }}>
            Starring ⭐:
            <br></br>
            {movie.starring}
          </h5>
          <p style={{ color: "ivory" }}>
            <strong>Description</strong>: <br></br>
            {movie.description}
          </p>
          <h3 style={{ color: "ivory" }}>
            <strong>Reviews</strong>
          </h3>
          <ul style={{ color: "ivory" }}>
            {currentreviews
              ? currentreviews.map((review) => (
                  <li style={{ fontSize: "medium" }}>
                    {users.find((user) => user.id === review.user_id).name} - "
                    {review.review}"
                    <button
                      value="REPLY"
                      className="btn btn-primary"
                      style={{ backgroundColor: "black" }}
                      onClick={(e) => handleRespond(e, review)}
                    >
                      Respond
                    </button>
                  </li>
                ))
              : "Be the first to review this movie"}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default MovieShow;
