import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import SignIn from "./Components/SignIn";
import MainContainer from "./Containers/MainContainer";

function App() {

  const dispatch = useDispatch()

  let ids = ["tt0068646", "tt0133093"];

  useEffect(() => {
      ids.forEach(id => getMovies(id));
  }, [])

  const getMovies = (id) => {
    fetch(
      `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "02e66b9f2fmshc40c9abe86ec5dep1cf267jsn78b29265385e",
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_MOVIES", movies: data }));
    
    fetch(
      `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${id}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "02e66b9f2fmshc40c9abe86ec5dep1cf267jsn78b29265385e",
          "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "GET_MOVIE_IMGS", movieimgs: data })
      );
  };

const handleCreateUser = (e) => {
    e.preventDefault();
    let user = {
      name: e.target[0].value,
      password: e.target[1].value,
    };

    let reqPack = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:3000/api/v1/users", reqPack)
      .then((res) => res.json())
      // .then((result) => {
      //   result.error
      //     ? this.setState({ errormsg: result.error })
      //     : this.setState({ usercreated: true });
      // });
    e.target.reset();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let user = {
      name: e.target[0].value,
      password: e.target[1].value,
    };

    let reqPackage = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:3000/api/v1/login", reqPackage)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        dispatch({ type: 'SIGN_IN' });
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    dispatch({ type: 'SIGN_OUT' })
    dispatch ({ type: 'LOGOUT'})
  };

    return (
      <div style={{ textAlign: "center" }} className="bg_image">
        <Router>
          <nav>
            <ul></ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <CreateUser
                handleCreateUser={handleCreateUser}
              />
              
            </Route>
            <Route exact path="/signin">
              <SignIn
                handleLogin={handleLogin}
              />
             
            </Route>
            <Route
              exact
              path="/home"
              render={(routerProps) => (
                <MainContainer
                  handleSignOut={handleSignOut}
                  {...routerProps}
                />
              )}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
}
export default App
