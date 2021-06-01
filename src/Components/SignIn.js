import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

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

        <input type="submit" className="btn btn-primary"></input>
        <br></br>
        <Link to="/" className="btn btn-primary">
          Create Account
        </Link>
      </form>
      {errormsg ? <strong>{errormsg}</strong> : null}
      {logged_in ? <Redirect to="/watchparty" /> : <Redirect to="/signin" />}
    </div>
  );
};
export default SignIn;
