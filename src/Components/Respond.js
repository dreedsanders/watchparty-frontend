import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ReviewResponse(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  let currentreview = useSelector((state) => state.movieState.currentReview);
  let responses = useSelector((state) => state.movieState.responses[0]);
  let currentresponses = responses.filter(
    (response) => response.review_id === currentreview.id
  );

  let handleBackToMovie = (e) => {
    dispatch({ type: "BACKTOMOVIE" });
    history.push('/movieshow')
  };

  return (
    <div style={{ color: "ivory" }} className="respond">
      <h1>Review</h1>
      <h2>"{currentreview.review}"</h2>
      <h5>Responses</h5>
      <ul>{currentresponses.map((response) => (
        <li>{response.response}</li>
      ))}</ul>
      <br></br>
      <h4>Reply to Review</h4>
      <form onSubmit={(e) => props.handleResponseReply(e, history, dispatch)}>
        <label>Response</label>
        <input type="textarea" style={{ color: "black" }}></input>
        <br></br>
        <input
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "black" }}
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
export default ReviewResponse;
