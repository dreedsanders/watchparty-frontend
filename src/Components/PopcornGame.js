import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef, useEffect } from "react";

// canvas html being rendered at top of popcorn menu
// "/game" route defined in MainNavBar
// PopcornGame component being rendered if "/game" route hit
// user hits game route by clicking link in main nav bar that says Play Game


function PopcornGame(props) {
  
  
return (
    <div>
      <h1>hey</h1>
      <canvas id="canvas" width={window.innerWidth} height={window.innerHeight} ></canvas>
    </div>
  );

}
export default PopcornGame;
