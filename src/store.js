import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux'
import movieReducer from './Reducers/movieReducer'
import userReducer from './Reducers/userReducer'
import gameReducer from './Reducers/gameReducer'

const rootReducer = combineReducers({
  movieState: movieReducer,
  userState: userReducer,
  gameState: gameReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
);

export default store