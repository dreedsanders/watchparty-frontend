import { BrowserRouter as Router, Route, Link, useHistory} from "react-router-dom";
import React from "react";
import UserPage from "../Components/UserPage";
import EditUser from "../Components/EditUser";
import PopcornGame from "../Components/PopcornGame";

function MainNavBar(props) {
  let history=useHistory()

  const goToUser = () => {
    // e.preventDefault()
    history.push('/users')
  }


  return (
    <div className="routes">
        <nav>
          <Link to="/myaccount" className="btn btn-primary">
            My Profile
          </Link>
          <span></span>
          <button className="btn btn-primary" onClick={() => goToUser()}> Users </button>
          <span></span>
          <Link to="/home" className="btn btn-primary">
            Movies
          </Link>
          <span></span>
          <Link to="/editprofile" className="btn btn-primary">
            EditProfile
          </Link>
          <span></span>
          <Link to="/game" className="btn btn-primary">
            PLAY GAME
          </Link>
          {/* <button className="btn btn-primary" onClick={(e)=>handleGame(e)}>PLAY GAME</button> */}
          <span></span>
        </nav>
        <Route
          exact
          path="/myaccount"
          render={(routerProps) => (
            <UserPage
              {...routerProps}
              handleSignOut={props.handleSignOut}
              getMovieWatches={props.getMovieWatches}
            />
          )}
        ></Route>
        <Route
          exact
          path="/game"
          render={(routerProps) => <PopcornGame />}
        ></Route>
        <Route
          path="/editprofile"
          render={(routerProps) => (
            <EditUser {...routerProps} handleEditUser={props.handleEditUser} />
          )}
        ></Route>
    </div>
  );
}

export default MainNavBar;
