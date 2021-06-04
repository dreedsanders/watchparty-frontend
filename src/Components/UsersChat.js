import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MainNavBar from "./MainNavBar";
import FootBar from "./FootBar";
import MainConHeader from "./MainConHeader";
import SocialUser from "./SocialUser";

function Users(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  let users = useSelector((state) => state.userState.users);
  let chats = useSelector((state) => state.chatState.chats[0]);
  let mostwatched = useSelector((state) => state.movieState.mostwatched[0]);
  let mosttalkedabout = useSelector(
    (state) => state.movieState.mosttalkedabout[0]
  );

  let current_user = useSelector((state) => state.userState.current_user);

  useEffect(() => {}, []);

  const makeChat = (e) => {
    e.preventDefault();
    let chat = {
      chat: e.target[0].value,
      user_id: current_user.id,
    };
    let recPack = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(chat),
    };
    fetch("http://localhost:3000/api/v1/chats", recPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADDCHAT", chats: data }))
      .then(props.getChats);
    e.target.reset();
  };
  const handleMostWatched = (e) => {
    dispatch({ type: "RANDOM", currentMovie: mostwatched });
    history.push("/movieshow");
  };
  const handleMostTalkedAbout = (e) => {
    dispatch({ type: "RANDOM", currentMovie: mosttalkedabout });
    history.push("/movieshow");
  };
  

  return (
    <div style={{ color: "ivory" }}>
      <MainConHeader />
      <br></br>
      <br></br>
      <MainNavBar />
      <div className="usrinfo" id="left">
        <ul>
          <h2>Users</h2>
          <h5 style={{color: "yellow"}}>Click each user to view watchlist</h5>
          {users.map((user) => {return <SocialUser user={user} key={user.id} />}
          )}
        </ul>
        <div className="column2" id="middle">
          <h2>Chat</h2>
          <br></br>
          <ul style={{ color: "yellow" }}>
            {chats.length > 0 ? (
              chats.map((chat) => (
                <li>
                  {users.find((user) => user.id === chat.user_id).name} -{" "}
                  {chat.chat}
                </li>
              ))
            ) : (
              <p>NO ONE CHATTING YET :(</p>
            )}
          </ul>
          <form onSubmit={(e) => makeChat(e)}>
            <input type="text" style={{ color: "black" }}></input>
            <input
              type="submit"
              value="Post"
              style={{ backgroundColor: "blue", color: "yellow" }}
            ></input>
          </form>
        </div>
      </div>
      <div className="column3" id="right">
        <h3>Stats</h3>
        <div className="stats">
          <div onClick={(e) => handleMostWatched(e)}>
            <h4 className="neonText">Most Watched Movie</h4>
            <h5>{mostwatched.title}</h5>
            <img src={mostwatched.poster} alt="mostwatched"></img>
          </div>
          <div onClick={(e) => handleMostTalkedAbout(e)}>
            <h4 className="neonText">Most Talked About Movie</h4>
            <h5>{mosttalkedabout.title}</h5>
            <img src={mosttalkedabout.poster} alt="mosttalked"></img>
          </div>
        </div>
      </div>
      <FootBar />
    </div>
  );
}
export default Users;
