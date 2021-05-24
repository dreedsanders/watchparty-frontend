import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // Redirect,
} from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import SignIn from "./Components/SignIn";
import MainContainer from "./Containers/MainContainer";
import EditUser from "./Components/EditUser";

function App() {
  const dispatch = useDispatch();

  let current_user = useSelector(state => state.userState.current_user)
  // console.log(current_user)


  let ids = ["tt0068646", "tt0133093"];

  useEffect(() => {
    ids.forEach((id) => getMovies(id));
    getReviews();
    getResponses();
    getMovieWatches();
    getMoviesfromBack()
  }, []);

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
      .then((data) => dispatch({ type: "GET_MOVIE_IMGS", movieimgs: data }));
  };

  const getReviews = () => {
    let recPack = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch("http://localhost:3000/api/v1/reviews", recPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_REVIEWS", reviews: data }));
  };

  const getResponses = () => {
    let recPack = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch("http://localhost:3000/api/v1/responses", recPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_RESPONSES", responses: data }));
  };

  const getMovieWatches = () => {
    let recPack = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch("http://localhost:3000/api/v1/movie_watches", recPack)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "GET_MOVIEWATCHES", moviewatches: data })
      );
  };

  const getMoviesfromBack = () => {
    let recPack = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch("http://localhost:3000/api/v1/movies", recPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GETBACKENDMOVIES", backendmovies: data }));
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
      .then((data) => dispatch({ type: "CREATE_USER", errormsg: data.error }));
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
        console.log(data.user);
        localStorage.setItem("token", data.token);
        localStorage.token !== "undefined" ? 
        dispatch({
          type: "SIGN_IN",
          current_user: data.user,
          errormsg: data.error,
        }) : dispatch({type: 'FAILED'});
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    dispatch({ type: "SIGN_OUT" });
    dispatch({ type: "LOGOUT" });
  };

  const handleEditUser = (e) => {
    e.preventDefault();
    let newUser = {
      name: e.target[0].value,
      password: e.target[1].value,
      profile_picture: e.target[2].value,
      email: e.target[3].value,
    };
    let recPack = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Application" : "application/json"
      },
      body: JSON.stringify(newUser)
    }
    fetch(`http://localhost:3000/api/v1/users/${current_user.id}`, recPack)
      .then(res => res.json())
    .then(data => dispatch({type: "EDIT", current_user: data}))
  };

  return (
    <div style={{ textAlign: "center" }} className="bg_image">
      <Router>
        <Switch>
          <Route exact path="/">
            <CreateUser handleCreateUser={handleCreateUser} />
          </Route>
          <Route exact path="/signin">
            <SignIn handleLogin={handleLogin} />
          </Route>
          <Route
            exact
            path="/home"
            render={(routerProps) => (
              <MainContainer handleSignOut={handleSignOut} {...routerProps} handleEditUser={handleEditUser} />
            )}
          ></Route>
          <Route exact path="/users"></Route>
          {/* <Route exact path="/editprofile">
            <EditUser />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
