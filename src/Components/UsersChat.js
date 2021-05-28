import React from 'react'
import { useSelector } from "react-redux";

function Users() {
    let users = useSelector((state) => state.userState.users);
    console.log(users)
    
    return (
      <div className="userpage" style={{color: "ivory"}}>
            <div className="column">
                <h2>Users</h2>
                <br></br>
                <ul>
                    {users.map(user => (<li>{user.name}</li>))}
                </ul>
            </div>
            <div className="column">
                <h2>Chat</h2>
                <br></br>
                <label>Post to chat</label>
                <br></br>
                <input type="text" ></input>
        </div>
            <div className="column">
                <h3>Stats</h3>
        </div>
      </div>
    );
}
export default Users