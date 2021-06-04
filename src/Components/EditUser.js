import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import MainConHeader from "./MainConHeader";
import { useState } from 'react'
import EditName from "./EditName"
import EditPassword from "./EditPassword"
import EditEmail from "./EditEmail"
import EditProfilePicture from "./EditProfilePicture"

function EditUser(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  let current_user = useSelector((state) => state.userState.current_user);
  const [name, setName] = useState(false)
  const [password, setPassword] = useState(false)
  const [email, setEmail] = useState(false)
  const [profile, setProfile] = useState(false)

  let deleteUser = (user) => {
    let reqPack = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, reqPack).then(
      dispatch({ type: "DELETE" })
    );
  };

  let handleName = (e) => {
    e.preventDefault()
    setName(!name)
  }
  let handlePassword = (e) => {
    e.preventDefault();
    setPassword(!password);
  };
  let handleEmail = (e) => {
    e.preventDefault();
    setEmail(!email);
  };
  let handleProfile = (e) => {
    e.preventDefault();
    setProfile(!profile);
  };

  return (
    <div className="show">
      <div className="header">
        <MainConHeader />
        <br></br>
        <br></br>
        <MainNavBar />
      </div>
      <div className="beody">
        <div style={{ color: "black" }} className="beodycolumn1">
          <br></br>
          <label style={{ color: "ivory" }}>
            What would you like to change?
          </label>
          <br></br>
          <button className="btn btn-primary" onClick={(e) => handleName(e)}>
            Name
          </button>
          {name ? <EditName getUsers={props.getUsers} /> : null}
          <br></br>
          <button
            className="btn btn-primary"
            onClick={(e) => handlePassword(e)}>
            Password
          </button>
          {password ? <EditPassword getUsers={props.getUsers} /> : null}
          <br></br>
          <button className="btn btn-primary" onClick={(e) => handleEmail(e)}>
            Email
          </button>
          {email ? <EditEmail getUsers={props.getUsers} /> : null}
          <br></br>
          <button className="btn btn-primary" onClick={(e) => handleProfile(e)}>
            Profile Picture
          </button>
          {profile ? <EditProfilePicture getUsers={props.getUsers} /> : null}
          <br></br>
          <br></br>
          {/* <input type="submit" className="btn btn-primary" style={{backgroundColor: "yellow", color: "black"}}></input> */}
          <br></br>
          <br></br>
          <button
            className="btn btn-primary"
            onClick={() => deleteUser(current_user)}
            style={{ backgroundColor: "red" }}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditUser;
