import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateUser from "./Components/CreateUser";
import SignIn from "./Components/SignIn";
import MainContainer from "./Containers/MainContainer";
import MovieReviewForm from "./Components/MovieReviewForm";
import PopcornGame from './Components/PopcornGame'
import Users from './Components/UsersChat'
function App() {
  const dispatch = useDispatch();

  let current_user = useSelector((state) => state.userState.current_user);
  let currentMovie = useSelector((state) => state.movieState.currentMovie);

  useEffect(() => {
    getReviews();
    getResponses();
    getMovieWatches();
    getMoviesfromBack();
    getUsers();
    // question();
  }, []);

  const getUsers = () => {
    let reqPack = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    fetch("http://localhost:3000/api/v1/users", reqPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "USERS", users: data }));
  };

  const getReviews = () => {
    let recPack = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
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
        Authorization: `Bearer ${localStorage.token}`,
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
        Authorization: `Bearer ${localStorage.token}`,
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
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    fetch("http://localhost:3000/api/v1/movies", recPack)
      .then((res) => res.json())
      .then((data) => 
        dispatch({ type: "GETBACKENDMOVIES", backendmovies: data })
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
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:3000/api/v1/users", reqPack)
      .then((res) => res.json())
    .then(console.log("Welcome new User!"))
      .then((data) => dispatch({ type: "CREATE_USER", errormsg: data.error }))
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
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:3000/api/v1/login", reqPackage)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.token !== "undefined"
          ? dispatch({
            type: "SIGN_IN",
            current_user: data.user,
            errormsg: data.error,
          })
          : dispatch({ type: "FAILED", errormsg: data.error });
      })
      .then(localStorage.token !== "undefined" ? console.log(`Ayyye what up ${current_user.name}`) : console.log("never found ya"))
  };

  const handleSignOut = (e, history) => {
    localStorage.clear();
    dispatch({ type: "SIGN_OUT" });
    dispatch({ type: "LOGOUT" });
    console.log("Later gator")
  };

  const handleEditUser = (e, history, dispatch) => {
    e.preventDefault();
    let newUser = {
      name: e.target[0].value,
      password: e.target[1].value,
      profile_picture: e.target[2].value,
      email: e.target[3].value,
    };
    let recPack = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Application: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(newUser),
    };
    fetch(`http://localhost:3000/api/v1/users/${current_user.id}`, recPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "EDIT", current_user: data }))
    .then(console.log(`Looks like ${current_user.name} needed some changes. Change is good. `))
    e.target.reset();
    history.push("/myaccount");
  };

  let handleReview = (e, history, dispatch) => {
    e.preventDefault();
    let review = {
      review: e.target[0].value,
      user_id: current_user.id,
      movie_id: currentMovie.id,
    };
    let recPack = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify(review),
    };
    fetch("http://localhost:3000/api/v1/reviews", recPack)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_REVIEW", review: data }))
      .then(getReviews);
    e.target.reset();
    history.push("/home");
  };

  return (
    <div style={{ textAlign: "center" }} className="app">
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
              <MainContainer
                handleSignOut={handleSignOut}
                {...routerProps}
                handleEditUser={handleEditUser}
                getResponses={getResponses}
                getMoviesfromBack={getMoviesfromBack}
                getMovieWatches={getMovieWatches}
              />
            )}
          ></Route>
          <Route
            exact
            path="/users"
            render={(routerProps) => <Users {...routerProps}/>}
          ></Route>
          <Route exact path="/moviereview">
            <MovieReviewForm handleReview={handleReview} />
          </Route>
          <Route exact path="/reply"></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
