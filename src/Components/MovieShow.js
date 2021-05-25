import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Respond from "../Components/Respond";

function MovieShow(props) {
  let dispatch = useDispatch();
  let respond = useSelector((state) => state.movieState.respond);

  let movie = useSelector((state) => state.movieState.currentMovie);
  let reviews = useSelector((state) => state.movieState.reviews[0]);
  let currentreview = useSelector((state) => state.movieState.currentReview);
  let currentreviews = reviews.filter((review) => review.movie_id === movie.id);
  let users = useSelector((state) => state.userState.users);
  let currentuser = useSelector((state) => state.userState.current_user);
  let currentmovie = useSelector((state) => state.movieState.currentMovie);

  let handleBacktoMovies = (e) => {
    e.preventDefault();
    dispatch({ type: "BACK" });
  };

  let handleRespond = (e, review) => {
    e.preventDefault();
    dispatch({ type: "GOTORESPOND", currentReview: review });
  };

  let handleResponseReply = (e, history, dispatch) => {
    e.preventDefault();
    let response = {
      response: e.target[0].value,
      review_id: currentreview.id,
      user_id: currentuser.id,
    };
    let recPakk = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(response),
    };
    fetch("http://localhost:3000/api/v1/responses", recPakk)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_RESPONSE", response: data }))
      .then(props.getResponses);
    e.target.reset();
  };
  let handleLikes = (e) => {
    e.preventDefault();
    let newlike = currentmovie.likes + 1;

    let update = {
      title: currentmovie.title,
      description: currentmovie.description,
      year: currentmovie.year,
      genres: currentmovie.genres,
      IMDB_rating: currentmovie.IMDB_rating,
      poster: currentmovie.poster,
      fanart: currentmovie.fanart,
      starring: currentmovie.starring,
      directors: currentmovie.directors,
      likes: newlike,
    };

    let reqPack = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(update),
    };
    fetch(`http://localhost:3000/api/v1/movies/${currentmovie.id}`, reqPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "NEWMOVIE", currentMovie: data }))
      .then(props.getMoviesfromBack);
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
    fetch("http://localhost:3000/api/v1/movie_watches", reqPack)
      .then(props.getMovieWatches)
  };
  return (
    <>
      {respond ? (
        <Respond handleResponseReply={handleResponseReply} />
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <br></br>
          <img
            src={movie.fanart}
            className={"p-avatar"}
            alt=""
            style={{ height: "250px" }}
          ></img>
          <h1>
            {movie.title}:{movie.year}
            <br></br>
            <button className="btn btn-primary" onClick={(e) => handleLikes(e)}>
              Like 🍿 {movie.likes} likes
            </button>
            <button
              className="btn btn-primary"
              onClick={(e) => addWatchlist(e)}
            >
              Add To Watchlist
            </button>
            <br></br>
            <Link to="/moviereview" className="btn btn-primary">
              Leave a review
            </Link>
            <br></br>
            <button
              className="btn btn-primary"
              onClick={(e) => handleBacktoMovies(e)}
              style={{ backgroundColor: "red" }}
            >
              Back to Movies
            </button>
            <br></br>
          </h1>
          <h3>🎬IMDB RATING | {movie.IMDB_rating}🎬</h3>
          <br></br>
          Directed by:
          <h5>{movie.directors}</h5>
          <br></br>
          Starring ⭐:
          <h5>{movie.starring}</h5>
          <p>
            <strong>Description</strong>: {movie.description}
          </p>
          <h3>
            <strong>Reviews</strong>
          </h3>
          <ul>
            {currentreviews
              ? currentreviews.map((review) => (
                  <li style={{ fontSize: "medium" }}>
                    {users.find((user) => user.id === review.user_id).name} - "
                    {review.review}"
                    <button
                      value="REPLY"
                      className="btn btn-primary"
                      onClick={(e) => handleRespond(e, review)}
                    >
                      Respond
                    </button>
                  </li>
                ))
              : "Be the first to review this movie"}
          </ul>
        </div>
      )}
    </>
  );
}
export default MovieShow;
