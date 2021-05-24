import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




function UserPage(props) {

  let current_user = useSelector((state) => state.userState.current_user)
  let backendmovies = useSelector((state) => state.movieState.backendmovies)[0]
  let reviews = useSelector((state) => state.movieState.reviews)
  let current_user_reviews = reviews.map(reviewlist => reviewlist.filter(review => review.user_id == current_user.id))[0]
  let actualreviews = current_user_reviews.map(review => review.review)
  let actualreviewedmovies = current_user_reviews.map((review) => review.movie_id)[0]
  let movie = backendmovies.filter(movie => movie.id === actualreviewedmovies)
  
    return (
      <div>
        <h1>{current_user.name}</h1>
        <br></br>
        <img src={current_user.profile_picture} style={{width: "100px"}}></img>
        <br></br>
        <h5>{current_user.email}</h5>
        <br></br>
        <div>
          <label>Reviews</label>
        <ul>
            {actualreviews.map(review => <li>{movie[0].title} - {review}</li>)}
          </ul>
        </div>
        <br></br>

        <button
          className="btn btn-primary"
          onClick={(e) => props.handleSignOut(e)}
        >
          Sign Out
        </button>
        <Link to="/editprofile" className="btn btn-primary">
          Edit Account
        </Link>
        <span></span>
      </div>
    );
}
export default UserPage