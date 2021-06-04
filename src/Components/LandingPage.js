import React from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Landing() {
    const dispatch = useDispatch()
    const history = useHistory()
  // const hall = useSelector((state) => state.userState.hall)

    const handleEnter = (e) => {
        e.preventDefault()
        dispatch({ type: "HALL" })
        history.push("/home")
  };
    
  return (
    <div className="showcase">
      <h1 style={{ color: "ivory" }}>Coming to Watch?</h1>
      <br></br>
      <div className="landingnav">
        <button
          onClick={handleEnter}
          className="btn btn-primary"
          style={{ backgroundColor: "black" }}
        >
          Movie Room
        </button>
      </div>
    </div>
  );
}
export default Landing;
