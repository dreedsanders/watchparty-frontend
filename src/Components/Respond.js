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
    e.preventDefault();
    dispatch({ type: "BACKTOMOVIE" });
  };

  return (
    <div style={{ color: "ivory" }}>
      <h1>Review</h1>
      <h2>"{currentreview.review}"</h2>
      <h5>Responses</h5>
      {currentresponses.map((response) => (
        <li>{response.response}</li>
      ))}
      <br></br>
      <h4>Reply to Review</h4>
      <form onSubmit={(e) => props.handleResponseReply(e, history, dispatch)}>
        <label>Response</label>
        <input type="textarea"></input>
        <br></br>
        <input
          type="submit"
          className="btn btn-primary"
          value="Publish"
        ></input>
      </form>
      <button className="btn btn-primary" onClick={(e) => handleBackToMovie(e)}>
        Back To Movie
      </button>
    </div>
  );
}
export default ReviewResponse;
