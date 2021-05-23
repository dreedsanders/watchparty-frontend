import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import UserPage from "../Components/UserPage";
import MainContainer from "../Containers/MainContainer";


function MainNavBar(props) {
  return (
    <Router>
      <div>
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
            <button
              onClick={(e) => props.handleSignOut(e)}
              className="btn btn-primary"
            >
              Sign Out
            </button>
          </ul>
        </nav>
        <Switch>
          <Route path="/myaccount">
            <UserPage />
          </Route>
          <Route path="/home">
            <MainContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainNavBar;
