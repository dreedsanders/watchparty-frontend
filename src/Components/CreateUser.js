import React from "react";
import { Link, Redirect} from "react-router-dom";
import { useSelector } from "react-redux";
import FootBar from "../Components/FootBar"
// import LowBar from "../Components/LowBar";
import MainConHeader from "../Components/MainConHeader"

const CreateUser = (props) => {
  const errormsg = useSelector((state) => state.userState.errormsg);
  let created = useSelector((state) => state.userState.created)
  return (
    <div className="formcontainer">
      <div className="header">
        <MainConHeader />
        <br></br>
      </div>
      <form onSubmit={props.handleCreateUser}>
        <h2 className="neonText">New User Sign Up</h2>
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
        <label className="sr-only">Profile Picture</label>
        <input
          type="text"
          placeholder="IMG URL"
          className="form-control"
        ></input>
        <br></br>
        <label className="sr-only">Email</label>
        <input
          type="text"
          placeholder="Enter valid email"
          className="form-control"
        ></input>
        <br></br>
        <input
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          value="Create Account"
          style={{ backgroundColor: "black" }}
        ></input>
        <br></br>
        <Link
          to="/signin"
          className="btn btn-primary"
          style={{ backgroundColor: "black" }}
        >
          Sign in
        </Link>
      </form>

      <FootBar />
      {created ? (
        <Redirect to="/signin" />
      ) : errormsg ? (
        <strong>{errormsg}</strong>
      ) : null}
    </div>
  );
};
export default CreateUser;
