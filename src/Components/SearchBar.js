import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function SearchBar() {
  
  const dispatch = useDispatch();
  const allmovies = useSelector((state) => state.movieState.movies);
  const filtered = useSelector((state) => state.movieState.filtered)
  // NEED TO MAKE AN ARRAY OF ALL THE MOVIES THAT DONT FIT INTO MY FILTERS AND ADD THEM TO THEIR OWN ARRAY TO SET THEM BACK TO "MOVIES" ON A RESET

  const all = [...allmovies, ...filtered]

  function handleAlpha(e) {
    e.preventDefault()
    let alpha = allmovies.sort()
    dispatch({type: 'FILTER', movies: alpha})
  }

  function handleMarquee(e) {
    e.preventDefault()
    let filteredtitle = e.target.value
    console.log("search", filteredtitle)
   let filteredmovies =  allmovies.filter((movie) => movie.title.toLowerCase().includes(filteredtitle.toLowerCase())).sort()
    dispatch({ type: 'FILTER', movies: filteredtitle.length > 0 ? filteredmovies : allmovies })
  }
  
  function handleGenre(e) {
    e.preventDefault()
    console.log(e.target.value)
    let chosen = e.target.value
    let filteredbygenre = allmovies.filter((movie) =>
      movie.genres.includes(chosen)
    );
    dispatch({type: 'FILTER', movies: filteredbygenre})
  }
  
  function selectGenreOption() {
    const genres = allmovies.map(movie => (movie.genres)).flat().sort()
    let makeOption = function (g) {
      return <option value={g}>{g}</option>
    }
    return <select onChange={(e)=> handleGenre(e)}>{genres.map(makeOption)}</select>
  }

  function handleDirector(e) {
    console.log(e.target.value)
    let director = e.target.value
    let directedby = allmovies.filter((movie) => movie.directors.includes(director))
    dispatch ({ type: 'FILTER', movies: directedby })
  }
  
  function selectDirectorOption() {
    const directors = allmovies.map(movie => (movie.directors)).flat().sort()
    let makeOption = function (d) {
      return <option value={d}>{d}</option>
    }
    return <select onChange={(e)=> handleDirector(e)}>{directors.map(makeOption)}</select>
  }

  function handleStarring(e) {
    let starring = e.target.value
    let bigtime = allmovies.filter((movie) => movie.starring.includes(starring))
    dispatch({ type: 'FILTER', movie: bigtime})
  }

  function selectStarringOption() {
    const starring = allmovies.map(movie => (movie.stars)).flat().sort()
    let makeOption = function (s) {
      return <option value={s}>{s}</option>
    }
    return <select onChange={(e)=> handleStarring(e)}>{starring.map(makeOption)}</select>
  }

  function handleYears(e) {
    console.log(e)
  }

  function handleReset(e) {
    console.log(e.target.value)
    dispatch({ type: 'RESET', movies: allmovies })
  }

  return (
    <div className="left-panel" style={{ textAlign: "center" }}>
      <strong>Search Movies By Name:</strong>
      <br />
      <input type="text" name="search" placeholder={"Search Marquee"} onChange={(e) => handleMarquee(e)} />
      <br />
      <strong>Sort:</strong>
      <br></br>
      <label>
        <input type="radio" value="Alphabetically" onChange={(e) => handleAlpha(e)}/>
        Alphabetically
      </label>
      <br></br>
      <label>
        <input type="radio" value="Price" />
        Chronologically
      </label>
      <br></br>
      <label>
        <strong>Filter Genre:</strong>
        {selectGenreOption()}
      </label>
      <br></br>
      <label>
        <strong>Filter Director:</strong>
        {selectDirectorOption()}
      </label>
      <br></br>
      <label>
        <strong>Filter Starring:</strong>
        {selectStarringOption()}
      </label>
      <br></br>
      <label>
        <strong>Filter Years:</strong>
        <select onchange={(e)=> handleYears(e)}>
          <option> None </option>
          <option>1980s</option>
          <option>1990s</option>
          <option>2000s</option>
          <option>2010s</option>
          <option>Other</option>
        </select>
      </label>
      <br></br>
      <button value="reset" onClick={(e) => handleReset(e)}>Reset Filters</button>
    </div>
  );
}
export default SearchBar;
