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
      <select onChange={(e) => handleGenre(e)}>{unique.map(makeOption)}</select>
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
      return <option value={d}>{d}</option>;
    };
    return (
      <select onChange={(e) => handleDirector(e)}>
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
      <select onChange={(e) => handleStarring(e)}>
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
        {selectGenreOption()}
      </label>
      <br></br>
      <label style={{ color: "ivory" }}>
        <strong>Filter Director:</strong>
        {selectDirectorOption()}
      </label>
      <br></br>
      <label style={{ color: "ivory" }}>
        <strong>Filter Starring:</strong>
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
    </div>
  );
}
export default SearchBar;
