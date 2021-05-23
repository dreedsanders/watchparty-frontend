import { createStore } from 'redux'
import { combineReducers } from 'redux'
import movieReducer from './Reducers/movieReducer'
import userReducer from './Reducers/userReducer'

const rootReducer = combineReducers({
  movieState: movieReducer,
  userState: userReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store