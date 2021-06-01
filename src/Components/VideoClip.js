import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

function VideoClip() {
  return (
    <div className="right-panel1">
      <div className="vid">
        <YoutubeEmbed embedId={"poLPKdc-zTY"} />
      </div>
      <div className="vid">
        <YoutubeEmbed embedId={"nVeNlaUCa2E"} />
      </div>
      <div className="vid">
        <YoutubeEmbed embedId={"olXYZOsXw_o"} />
      </div>
    </div>
  );
}
export default VideoClip;
