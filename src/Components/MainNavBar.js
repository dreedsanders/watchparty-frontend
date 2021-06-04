import {  useHistory} from "react-router-dom";
import React from "react";

function MainNavBar() {
  let history=useHistory()

  const goToUser = () => {
    history.push('/users')
  }
  const goToMyProfile = () => {
    history.push('/myaccount')
  }

  // const goToEditProfile = () => {
  //   history.push("/editprofile")
  // }

  const goToMovies = () => {
    history.push("/home")
  }
  const goToGame = () => {
    history.push("/game")
  }
  const goToMedia = () => {
    history.push("/media")
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
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "black" }}
        onClick={() => goToMedia()}
      >
        Media
      </button>
      <span></span>
    </div>
  );
}

export default MainNavBar;
