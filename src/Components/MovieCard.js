import React, { useState } from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const MovieCard = (props) => {
  // const [details, setDetails] = useState(false)
  
  return (
      <div className="flip-card" style={{ backgroundColor: "red" }}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={props.movieimg[0].poster}
              style={{ width: "200px", height: "200px" }}
              alt=""
            ></img>
          </div>
          <div className="flip-card-back">
            <img
              src={props.movieimg[0].fanart}
              className={"p-avatar"}
              alt=""
              style={{ height: "250px" }}
            ></img>
            <h1>
              {props.movie.title}:{props.movie.year}
              <br></br>
              <button className="btn btn-primary">Like 🤍</button>
              <button className="btn btn-primary">Add To Watchlist</button>
              <br></br>
            </h1>
            <h3>🎬IMDB RATING | {props.movie.imdb_rating}🎬</h3>

            <ul>
              {" "}
              Directed by:
              <h5>
                {props.movie.directors.map((director) => (
                  <li>{director}</li>
                ))}
              </h5>
            </ul>
            <br></br>
            <ul>
              Starring ⭐:
              <h5>
                {props.movie.stars[0]} & {props.movie.stars[1]}
              </h5>
            </ul>
            <p>
              <strong>Description</strong>: {props.movie.description}
            </p>
            <br></br>
            <h5> 🎥 Trailer 🎞</h5>
            <YoutubeEmbed embedId={props.movie.youtube_trailer_key} />
          </div>
        </div>
      </div>
  );
};

export default MovieCard;
