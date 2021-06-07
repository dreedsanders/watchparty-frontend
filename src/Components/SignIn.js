import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import MainConHeader from "../Components/MainConHeader";
import MainNavBar from "../Components/MainNavBar"

const SignIn = (props) => {
  const logged_in = useSelector((state) => state.userState.logged_in);
  const errormsg = useSelector((state) => state.userState.errormsg);

  return (
    <div className="formcontainer2">
      <form onSubmit={(e) => props.handleLogin(e)}>
        <h2 className="neonText">Sign In</h2>
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
        <br></br>
        <input
          type="submit"
          className="btn btn-primary"
          value="Sign In"
          style={{ backgroundColor: "black" }}
        ></input>
        <br></br>
        <span></span>
        <br></br>
        <Link
          to="/"
          className="btn btn-primary"
          style={{ backgroundColor: "black" }}
        >
          Create Account
        </Link>
      </form>
      {errormsg ? <strong>{errormsg}</strong> : null}
      {logged_in ? <Redirect to="/watchparty" /> : <Redirect to="/signin" />}
    </div>
  );
};
export default SignIn;
