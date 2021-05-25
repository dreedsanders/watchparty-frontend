import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import UserPage from "../Components/UserPage";
import EditUser from "../Components/EditUser";

function MainNavBar(props) {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <Link to="/myaccount" className="btn btn-primary">
              My Profile
            </Link>
            <span></span>
            <Link to="/users" className="btn btn-primary">
              Users
            </Link>
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
              Play Popcorn Game
            </Link>
            <span></span>
          </ul>
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
          path="/editprofile"
          render={(routerProps) => (
            <EditUser {...routerProps} handleEditUser={props.handleEditUser} />
          )}
        ></Route>
      </Router>
    </div>
  );
}

export default MainNavBar;
