import React from 'react'
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const EditEmail = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    let current_user = useSelector((state) => state.userState.current_user);

    const updateEmail = (e, history) => {
        e.preventDefault();
      let user = {
        email: e.target[0].value,
      };
      let recPack = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Application: "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify(user),
      };
      fetch(`http://localhost:3000/api/v1/users/${current_user.id}`, recPack)
        .then((res) => res.json())
        .then((data) => dispatch({ type: "EDIT", current_user: data }))
        
        props.getUsers()
      e.target.reset();
      history.push("/myaccount");
    };

    return (
      <div>
        <form onSubmit={(e)=>updateEmail(e, history)}>
          <input type="text" placeholder="Email"></input>
          <input
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "yellow", color: "black" }}
          ></input>
        </form>
      </div>
    );
}

export default EditEmail
