import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function PopcornMenu() {
    let history = useHistory();
    let currentuser = useSelector((state) => state.userState.current_user)
    

  let handleExit = (e, history) => {
    console.log("take me home....tonight");
    history.push("/myaccount");
    return (
      <>
        {/* <canvas id="canvas"></canvas> */}
        <div style={{ alignContent: "center" }}>
          <h1>CANDYPOP CATCH</h1>
          <br></br>
          <h2>HOW TO PLAY:</h2>
          <br></br>
          <h4>
            Use left and right arrow keys to move basket across screen. Catch as
            much popcorn and candy as you like! Dont miss the movie!
          </h4>
          <br></br>
          <button className="btn btn-primary" onClick={(e) => handlePlay(e)}>
            PLAY
          </button>
          <button
            className="btn btn-primary"
            onClick={(e) => handleExit(e, history)}
          >
            EXIT
          </button>
        </div>
      </>
    );

  }
}