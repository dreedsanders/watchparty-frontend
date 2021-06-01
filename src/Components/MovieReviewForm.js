import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function MovieReviewForm(props) {
  let currentmovie = useSelector((state) => state.movieState.currentMovie);
  const history = useHistory();
  const dispatch = useDispatch();
  
  let handleBackToMovie = (e) => {
    dispatch({ type: "BACKTOMOVIE" });
    history.push("/movieshow");
  };


  return (
    <div className="review">
      <h1 style={{ color: "ivory" }}>Movie Review Form</h1>
      <br></br>
      <img src={currentmovie.fanart} alt="movie poster"></img>
      <br></br>
      <h3 style={{ color: "ivory" }}>{currentmovie.title}</h3>
      <form onSubmit={(e) => props.handleReview(e)}>
        <label style={{ color: "ivory" }}>Review</label>
        <input type="textarea"></input>
        <br></br>
        <input
          style={{ backgroundColor: "black" }}
          type="submit"
          className="btn btn-primary"
          value="Publish"
        ></input>
      </form>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "black" }}
        onClick={(e) => handleBackToMovie(e)}
      >
        Back To Movie
      </button>
    </div>
  );
}
export default MovieReviewForm;
