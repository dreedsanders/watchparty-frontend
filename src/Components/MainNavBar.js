import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import UserPage from "../Components/UserPage";
import EditUser from "../Components/EditUser";
import MainContainer from "../Containers/MainContainer";


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
            {/* <button
            onClick={(e) => props.handleSignOut(e)}
            className="btn btn-primary"
          >
            Sign Out
          </button> */}
          </ul>
        </nav>
        <Route
          exact
          path="/myaccount"
          render={(routerProps) => (
            <UserPage {...routerProps} handleSignOut={props.handleSignOut} />
          )}
        ></Route>
        <Route
          path="/editprofile"
          render={(routerProps) => <EditUser {...routerProps} handleEditUser={props.handleEditUser} />}
        ></Route>
      </Router>
    </div>
  );
}

export default MainNavBar;
