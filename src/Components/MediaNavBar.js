import React, { useState } from "react";
import MainConHeader from "../Components/MainConHeader";
import MainNavBar from "./MainNavBar";
import Videos from "./WarnerBros";

const MediaNavBar = (props) => {
  const [warner, setWarner] = useState(false);
  const warnerAPI = "AIzaSyCtg0ni_eXKVO4ZDpwALVEwy0RKtucX5Uo";
  const warnerchannelID = "UCsQQo8qb62ikp9kc954V7eQ";
  const warnerresult = 11;
  const warnerfinalURL = `https://www.googleapis.com/youtube/v3/search?key=${warnerAPI}&channelId=${warnerchannelID}&part=snippet,id&order=date&maxResults=${warnerresult}`;
  const [warnerresultyt, setWarnerResultyt] = useState([]);

  const warnerclicked = () => {
    fetch(warnerfinalURL)
      .then((res) => res.json())
      .then((data) => {
        const resultyt = data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        setWarnerResultyt(resultyt);
        setWarner(!warner);
      });
  };

  const [a24, setA24] = useState(false);
  const a24API = "AIzaSyCtg0ni_eXKVO4ZDpwALVEwy0RKtucX5Uo";
  const a24channelID = "UCuPivVjnfNo4mb3Oog_frZg";
  const a24result = 11;
  const a24finalURL = `https://www.googleapis.com/youtube/v3/search?key=${a24API}&channelId=${a24channelID}&part=snippet,id&order=date&maxResults=${a24result}`;
  const [a24resultyt, setA24Resultyt] = useState([]);

  const a24clicked = () => {
    fetch(a24finalURL)
      .then((res) => res.json())
      .then((data) => {
        const resultyt = data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        setA24Resultyt(resultyt);
        setA24(!a24);
      });
  };

  const [focus, setFocus] = useState(false);
  const focusAPI = "AIzaSyCtg0ni_eXKVO4ZDpwALVEwy0RKtucX5Uo";
  const focuschannelID = "UCU4SM3j_9TNWaSu8KdGV50g";
  const focusresult = 11;
  const focusfinalURL = `https://www.googleapis.com/youtube/v3/search?key=${focusAPI}&channelId=${focuschannelID}&part=snippet,id&order=date&maxResults=${focusresult}`;
  const [focusresultyt, setFocusResultyt] = useState([]);

  const focusclicked = () => {
    fetch(focusfinalURL)
      .then((res) => res.json())
      .then((data) => {
        const resultyt = data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        setFocusResultyt(resultyt);
        setFocus(!focus);
      });
  };

  return (
    <div className="mediapage">
      <div className="header">
        <MainConHeader />
        <br></br>
        <br></br>
        <MainNavBar />
      </div>
      <div>
        <h5 className="neonText">
          To view movies from each studio click on studio button
        </h5>
      </div>
      <div>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "black" }}
          onClick={warnerclicked}
        >
          Warner Bros.
        </button>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "black" }}
          onClick={a24clicked}
        >
          A24
        </button>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "black" }}
          onClick={focusclicked}
        >
          Focus Features
        </button>
      </div>
      <div className="videobox">
        <div>
          {warner ? <Videos resultyt={warnerresultyt} /> : null}
          {a24 ? <Videos resultyt={a24resultyt} /> : null}
          {focus ? <Videos resultyt={focusresultyt} /> : null}
        </div>
      </div>
    </div>
  );
};

export default MediaNavBar;
