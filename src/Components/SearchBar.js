import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function SearchBar() {
  const dispatch = useDispatch();
  const allmovies = useSelector((state) => state.movieState.backendmovies[0]);

  function handleMarquee(e) {
    e.preventDefault();
    let filteredtitle = e.target.value;
    let filteredmovies = allmovies
      .filter((movie) =>
        movie.title.toLowerCase().includes(filteredtitle.toLowerCase())
      )
      .sort();
    dispatch({
      type: "FILTER",
      filtered: filteredtitle.length > 0 ? filteredmovies : allmovies,
    });
  }

  function handleGenre(e) {
    e.preventDefault();
    let chosen = e.target.value;
    let filteredbygenre = allmovies.filter((movie) =>
      movie.genres.includes(chosen)
    );
    dispatch({ type: "FILTER", filtered: filteredbygenre });
  }

  function selectGenreOption() {
    const unique = [...new Set(allmovies.map((movie) => movie.genres))].sort();
    let makeOption = function (g) {
      return <option value={g}>{g}</option>;
    };
    return (
      <select style={{ color: "black" }} onChange={(e) => handleGenre(e)}>
        {unique.map(makeOption)}
      </select>
    );
  }

  function handleDirector(e) {
    let director = e.target.value;
    let directedby = allmovies.filter((movie) =>
      movie.directors.includes(director)
    );
    dispatch({ type: "FILTER", filtered: directedby });
  }

  function selectDirectorOption() {
    const unique = [
      ...new Set(allmovies.map((movie) => movie.directors)),
    ].sort();
    let makeOption = function (d) {
      return <option value={d}>{d} </option>;
    };
    return (
      <select style={{ color: "black" }} onChange={(e) => handleDirector(e)}>
        {unique.map(makeOption)}
      </select>
    );
  }

  function handleStarring(e) {
    let starring = e.target.value;
    let bigtime = allmovies.filter((movie) =>
      movie.starring.includes(starring)
    );
    dispatch({ type: "FILTER", filtered: bigtime });
  }

  function selectStarringOption() {
    const unique = [
      ...new Set(allmovies.map((movie) => movie.starring)),
    ].sort();
    let makeOption = function (s) {
      return <option value={s}>{s}</option>;
    };
    return (
      <select style={{ color: "black" }} onChange={(e) => handleStarring(e)}>
        {unique.map(makeOption)}
      </select>
    );
  }

  function handleReset(e) {
    dispatch({ type: "RESET" });
  }

  return (
    <div className="left-panel" style={{ textAlign: "center" }}>
      <strong style={{ color: "ivory" }}>Search Movies By Name:</strong>
      <br />
      <input
        type="text"
        name="search"
        placeholder={"Search Marquee"}
        onChange={(e) => handleMarquee(e)}
      />
      <br />
      <label style={{ color: "ivory" }}>
        <strong>Filter Genre:</strong>
        <br></br>
        {selectGenreOption()}
      </label>
      <br></br>
      <label style={{ color: "ivory" }}>
        <strong>Filter Director:</strong>
        <br></br>
        {selectDirectorOption()}
      </label>
      <br></br>
      <label style={{ color: "ivory" }}>
        <strong>Filter Starring:</strong>
        <br></br>
        {selectStarringOption()}
      </label>
      <br></br>
      <br></br>
      <button
        value="reset"
        onClick={(e) => handleReset(e)}
        style={{ backgroundColor: "yellow" }}
      >
        Reset Filters
      </button>
      <br></br>
      <div className="linkbar">
        <br></br>
        <a href="https://github.com/dreedsanders">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            width="50px"
            height="50px"
            alt="github"
          ></img>
        </a>
        <br></br>
        <br></br>
        <a href="https://www.linkedin.com/in/donovan-sanders-22308928/">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
            width="50px"
            height="50px"
            alt="linkedin"
          ></img>
        </a>
        <br></br>
        <a href="https://thedinnertabletalk.medium.com/">
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-62-512.png"
            width="50px"
            height="50px"
            alt="medium"
          ></img>
        </a>
      </div>
      <h4 style={{ color: "ivory" }}>Follow Here ^</h4>
    </div>
  );
}
export default SearchBar;
