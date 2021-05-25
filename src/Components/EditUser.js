import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function EditUser(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  let current_user = useSelector((state) => state.userState.current_user);

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

  return (
    <div>
      <form onSubmit={(e) => props.handleEditUser(e, history, dispatch)}>
        <h3>❗️❗️ MUST FILL OUT FORM. VALUES ARE JUST PLACEHOLDERS ❗️❗️</h3>
        <label>Edit Name</label>
        <input type="text" placeholder={current_user.name}></input>
        <br></br>
        <label>Edit Password</label>
        <input type="text" placeholder="Current or New Password"></input>
        <br></br>
        <label>Edit Profile Picture</label>
        <input type="text" placeholder={current_user.profile_picture}></input>
        <br></br>
        <label>Edit Email</label>
        <input type="text" placeholder={current_user.email}></input>
        <br></br>
        <input type="submit" className="btn btn-primary"></input>
      </form>
      <button
        onClick={() => deleteUser(current_user)}
        style={{ backgroundColor: "red" }}
      >
        Delete
      </button>
    </div>
  );
}
export default EditUser;
