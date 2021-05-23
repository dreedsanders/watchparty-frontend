import React from "react";
import { Redirect, Link } from "react-router-dom";

const CreateUser = (props) => {
  return (
    <div className="formcontainer">
      <div style={{ textAlign: "center" }} className="row">
        <form
          onSubmit={props.handleCreateUser}
          className="form-signin"
        >
          <h2 className="form-signin-heading">New User Sign Up</h2>
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
          <label className="sr-only">Confirm Password</label>
          <input
            type="password"
            name="confirm_new_password"
            className="form-control"
            placeholder="Confirm Password"
          ></input>
          <br></br>
          <input
            type="submit"
            className="btn btn-lg btn-primary btn-block"
          ></input>
          <Link to="/signin" className="btn btn-primary">
            Sign in
          </Link>
        </form>
        {props.usercreated ? (
          <Redirect to="/signin" />
        ) : (
          <strong>
            <h4 style={{ color: "red" }}>{props.errormsg}</h4>
          </strong>
        )}
      </div>
    </div>
  );
};
export default CreateUser;
