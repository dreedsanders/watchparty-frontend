import React from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const EditProfilePicture = (props) => {
     const history = useHistory();
     const dispatch = useDispatch();
    let current_user = useSelector((state) => state.userState.current_user);
    
  const updateProfilePicture = (e, history) => {
      e.preventDefault();
      let profile_picture = {
        profile_picture: e.target[0].value,
      };
      let recPack = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Application: "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(profile_picture),
      };
      fetch(`http://localhost:3000/api/v1/users/${current_user.id}`, recPack)
        .then((res) => res.json())
        .then((data) => dispatch({ type: "EDIT", current_user: data }))
        .then(props.getUsers);

      e.target.reset();
      history.push("/myaccount");
    };

    return (
      <div>
        <form onSubmit={(e)=>updateProfilePicture(e,history)}>
          <input type="text" placeholder="Profile Picture URL"></input>
          <input
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "yellow", color: "black" }}
          ></input>
        </form>
      </div>
    );
}

export default EditProfilePicture
