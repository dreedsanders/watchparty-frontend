import { BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import React from "react";
import UserPage from "../Components/UserPage";
import EditUser from "../Components/EditUser";
import PopcornGame from "../Components/PopcornGame";

function MainNavBar() {
  let history=useHistory()

  const goToUser = () => {
    history.push('/users')
  }
  const goToMyProfile = () => {
    history.push('/myaccount')
  }

  const goToEditProfile = () => {
    history.push("/editprofile")
  }

  const goToMovies = () => {
    history.push("/home")
  }
  const goToGame = () => {
    history.push("/game")
  }


  return (
    <div className="routes">
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "black" }}
        onClick={() => goToMovies()}
      >
        {" "}
        Movies{" "}
      </button>
      <span></span>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "black" }}
        onClick={() => goToMyProfile()}
      >
        Profile
      </button>
      <span></span>
      {/* <button
        className="btn btn-primary"
        style={{ backgroundColor: "black" }}
        onClick={() => goToEditProfile()}
      >
        Edit Profile
      </button>
      <span></span> */}
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "black" }}
        onClick={() => goToUser()}
      >
        Social
      </button>
      <span></span>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "black" }}
        onClick={() => goToGame()}
      >
        Draw & Chill
      </button>
      <span></span>
    </div>
  );
}

export default MainNavBar;
