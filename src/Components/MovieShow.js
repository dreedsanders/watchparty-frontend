import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function MovieShow() {
  let dispatch = useDispatch();
  let clicked = useSelector((state) => state.movieState.clicked);

  let movie = useSelector((state) => state.movieState.currentMovie);
  let reviews = useSelector((state) => state.movieState.reviews[0])
  let currentreviews = reviews.filter(review => review.movie_id === movie.id)
  let users = useSelector((state) => state.userState.users)
    console.log(users)
    
    let handleBacktoMovies = (e) => {
        e.preventDefault()
        console.log("back to movies")
        dispatch({ type: "BACK"})
    }

  return (
    <>
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
          <button className="btn btn-primary">
            Like 🤍 {movie.likes} likes
          </button>
          <button className="btn btn-primary">Add To Watchlist</button>
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
        <p><strong>Reviews</strong></p>
        <ul>
          {currentreviews ? currentreviews.map(review => <li>{users.find((user) => user.id == review.user_id ).name} - "{review.review}"</li>) : null }
        </ul>
        <br></br>
        <button
          className="btn btn-primary"
          onClick={(e) => handleBacktoMovies(e)}
        >
          Back to Movies
        </button>
      </div>
    </>
  );
}
export default MovieShow;
