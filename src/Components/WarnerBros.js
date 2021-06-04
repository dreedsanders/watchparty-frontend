import React from "react";
import MainNavBar from "./MainNavBar";
import MainConHeader from "../Components/MainConHeader";

const API = "AIzaSyAJretcLaYZS8RN5vtN5hhbv5q0HxOPq-s";
const channelID = "UCsQQo8qb62ikp9kc954V7eQ";
const result = 10;

const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class WarnerBros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultyt: [],
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        const resultyt = data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
      });
  }

  render() {
    return (
      <div>
        <div className="header">
          <MainConHeader />
          <br></br>
          <br></br>
          <MainNavBar />
        </div>
        <button
          className="btn btn-primary"
          style={{ backgroundColor: "black" }}
          onClick={this.clicked}
        >
          Get the Latest from Warner Bros.
        </button>
        {this.state.resultyt.map((link, i) => {
          const frame = (
            <div key={i}>
              <iframe
                width="560"
                height="315"
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
          return frame;
        })}
        {this.frame}
      </div>
    );
  }
}

export default WarnerBros;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA
