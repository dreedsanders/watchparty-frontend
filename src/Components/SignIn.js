import React from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux'



const SignIn = (props) => {
  const logged_in = useSelector(state => state.userState.logged_in)


  return (
    <div className="bg_image">
      <div className="formcontainer">
        <form onSubmit={(e) => props.handleLogin(e)} className="form-signin">
          <h2 className="form-signin-heading">Sign In</h2>
          <br></br>
          <label className="sr-only">Name</label>
          <input
            type="text"
            name="new_user_name"
            className="form-control"
            placeholder="Name"
          ></input>
          <br></br>
          <label className="sr-only">Password</label>
          <input
            type="password"
            name="new_password"
            className="form-control"
            placeholder="Password"
          ></input>
          <input
            type="submit"
            className="btn btn-lg btn-primary btn-block"
          ></input>
          <Link to="/" className="btn btn-primary">
            Create Account
          </Link>
        </form>
        {logged_in ? <Redirect to="/home" /> : null}
      </div>
    </div>
  );
};
export default SignIn;
