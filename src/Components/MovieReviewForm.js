import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function MovieReviewForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  let currentmovie = useSelector((state) => state.movieState.currentMovie);

  return (
    <div>
      <h1>Movie Review Form</h1>
      <br></br>
      <img src={currentmovie.fanart} alt="movie poster"></img>
      <br></br>
      <h3>{currentmovie.title}</h3>
      <form onSubmit={(e) => props.handleReview(e, history, dispatch)}>
        <label>Review</label>
        <input type="textarea"></input>
        <br></br>
        <input
          type="submit"
          className="btn btn-primary"
          value="Publish"
        ></input>
      </form>
    </div>
  );
}
export default MovieReviewForm;
