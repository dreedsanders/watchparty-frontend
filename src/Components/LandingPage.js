import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Landing() {
    const dispatch = useDispatch()
    const history = useHistory()
  const hall = useSelector((state) => state.userState.hall)
  const user = useSelector((state) => state.userState.current_user)
  console.log(user)

    const handleEnter = (e) => {
        e.preventDefault()
        dispatch({ type: "HALL" })
        history.push("/home")
        console.log("click")
  };
    
  return (
    <div className="showcase">
      <h1 style={{ color: "ivory" }}>Coming to Watch?</h1>
      <br></br>
      <div className="landingnav">
        <button onClick={handleEnter}>Movie Room</button>
      </div>
    </div>
  );
}
export default Landing;
