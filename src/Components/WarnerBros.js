import React from "react";

function Videos(props) {
  return (
    <div className="vdo">
      {props.resultyt.map((link, i) => {
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
    </div>
  );
}

export default Videos;

